import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Helmet from "react-helmet";
import { updateGallery } from '../store/actions/UpdateGallery';
import { openModal } from '../store/actions/ToggleModal';
import { setImage } from '../store/actions/SetImage';
import GalleryItem from '../components/galleryItem';
import GalleryContainer from '../components/galleryContainer';
import GalleryNav from '../components/galleryNav';

import Projects from '../components/projects';

function mapStateToProps(state) {
   return {
    images: state.gallery.images,
    selectedGallery: state.gallery.selected,
    modal: state.modal.display,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (gallery) => {
      dispatch(updateGallery(gallery))
      browserHistory.push('/gallery/' + gallery)
    },
    filterGallery: (event) => {
      dispatch(updateGallery(event.target.value))
      browserHistory.push('/gallery/' +  event.target.value)
    },
    updateGalleryOnLoad: (gallery) => {
      dispatch(updateGallery(gallery))
    },
    openModal: (id) => {
      dispatch(openModal());
      dispatch(setImage(id));
    }
  }
}

class Gallery extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log('check', this.props.params)
    if (this.props.params.set) {
      this.props.updateGalleryOnLoad(this.props.params.set);
    } else {
      this.props.updateGalleryOnLoad('projects');
    }

    // Images not loading if we open modal on page load, need to fix
    // if (this.props.params.image) {
    //   this.props.openModal(this.props.params.image)
    // }

    // Fade In
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = "opacity 500ms";
      elem.style.opacity = 1;
    });

  }

  render() {
    const { images, selectedGallery, onClick, filterGallery } = this.props;

    let currentPortfolio = null;
    let og_image = 'projects/logos/react__logo.jpg';
    if (selectedGallery !== 'projects') {
      currentPortfolio = images[selectedGallery].filter(function(n) {
        return n.hidden !== true;
      });
      og_image = currentPortfolio[0].url;
    }
    let galleryList = [];

    for (var key in images) {
      galleryList.push(key)
    }

    return (
      <div>
        <Helmet
          title="Aaron Mitchell: Gallery"
          meta={ [
            { name: "description", content: this.props.route.meta.meta_gallery },
            { property: "og:title", content: 'Aaron Mitchell\'s Online Portfolio: Gallery'},
            { property: "og:url", content: 'https://mitchellaaron.com/gallery/' + selectedGallery},
            { property: "og:image", content: 'https://mitchellaaron.com/images/' + og_image},
          ] }
        />
        <div className="col__left">
          <GalleryNav images={images} selectedGallery={selectedGallery} onClick={onClick} filter={filterGallery}/>
        </div>
        <div className="col__right">
          { selectedGallery === 'projects'
            ?
              <Projects />
            : 
              <div className="clearFix">
                <GalleryContainer gallery={currentPortfolio} />
              </div>
          }
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
