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


function mapStateToProps(state) {
   return {
    images: state.gallery.images,
    selectedGallery: state.gallery.selected,
    modal: state.modal.display
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (gallery) => {
      dispatch(updateGallery(gallery))
      browserHistory.push('/gallery/' + gallery)
    },
    filterGallery: (event, path) => {
      dispatch(updateGallery(event.target.value))
      browserHistory.push(path)
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
    if (this.props.params.set) {
      for (var key in this.props.images) {
        if (this.props.params.set == key ) {
          this.props.updateGalleryOnLoad(this.props.params.set);
          break;
        }
      }
    }
    if (this.props.params.image) {
      this.props.openModal(this.props.params.image)
    }

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

    let currentPortfolio = images[selectedGallery].filter(function(n) {
      return n.hidden !== true;
    });

    let galleryList = [];

    for (var key in images) {
      galleryList.push(key)
    }

    let og_image = currentPortfolio[0].url

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
        <GalleryNav images={images} selectedGallery={selectedGallery} onClick={onClick} filter={filterGallery}/>
        <GalleryContainer gallery={currentPortfolio} />
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
