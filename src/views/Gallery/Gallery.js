import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Helmet from "react-helmet";

import { updateGallery } from '../../store/actions/UpdateGallery';
import { openModal } from '../../store/actions/ToggleModal';
import { setImage } from '../../store/actions/SetImage';
import { checkForAuthTokenAndRerouteIfProtected } from '../../store/actions/Authentication';

import GalleryContainer from '../../components/Gallery/GalleryContainer';
import GalleryHero from '../../components/Gallery/GalleryHero';
import GalleryNav from '../../components/Gallery/GalleryNav';
import Projects from '../../components/Gallery/Projects';
import RoverHomepageVision from '../../components/Content/CaseStudy/RoverHomepageVision';
import RoverCRO from '../../components/Content/CaseStudy/RoverCRO';

function mapStateToProps(state) {
   return {
    images: state.gallery.images,
    selectedGallery: state.gallery.selected.galleryName,
    modal: state.modal.display,
    isAuthenticated: state.authentication.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateGalleryOnLoad: (gallery) => {
      dispatch(updateGallery(gallery))
    },
    openModal: (id) => {
      dispatch(openModal());
      dispatch(setImage(id));
    },
    checkForAuthTokenAndRerouteIfProtected: (page) => {
      dispatch(checkForAuthTokenAndRerouteIfProtected(page))
    }
  }
}

class Gallery extends Component {

  rerouteIfProtected(gallery) {
    let { isAuthenticated } = this.props;

    let protectedPages = ['rover-homepage-vision', 'rover-growth-cro']

    if (isAuthenticated !== true && protectedPages.includes(gallery) ) {
      this.props.checkForAuthTokenAndRerouteIfProtected(gallery)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedGallery !== this.props.selectedGallery) {
      this.rerouteIfProtected(this.props.selectedGallery)
    }
  }

  componentDidMount() {
    // window.scrollTo(0, 0);

    let gallery = this.props.params.set;

    let lastGalleryId = this.props.images[gallery] ? this.props.images[gallery].length - 1 : null; // accomodate for projects not being in gallery array
    let imageId = this.props.params.image;

    // If no gallery, open the default gallery
    if (gallery) {
      this.props.updateGalleryOnLoad(gallery);
    } else {
      this.props.updateGalleryOnLoad('development');
    }

    this.rerouteIfProtected(gallery);

    // Open Modal
    // Check if URL includes imageId, if it does and that ID is valid, open modal. 
    if (imageId && imageId <= lastGalleryId) {
      this.props.openModal(imageId)
    } else {
      // ToDo: Remove invalid ImageId from url
    }

    // Fade In
    // var elem = ReactDOM.findDOMNode(this);
    // elem.style.opacity = 0;
    // window.requestAnimationFrame(function() {
    //   elem.style.transition = "opacity 500ms";
    //   elem.style.opacity = 1;
    // });

  }

  render() {
    const { images, selectedGallery } = this.props;

    let currentPortfolio = null;
    let og_image = 'https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/logos/react__logo.jpg';

    // Determine Gallery Type to decide which content component to show
    let galleryType = null;

    switch(selectedGallery) {
      case undefined: 
        break;
      case 'rover-growth-cro':
        galleryType = 'case-study';
        break;
      case 'rover-homepage-vision':
        galleryType = 'case-study';
        break;
      case 'development':
        galleryType = 'projects';
        break;
      default:
        galleryType = 'gallery';
        currentPortfolio = images[selectedGallery].filter(function(n) {
          return n.hidden !== true;
        });
        og_image = currentPortfolio[0].url;
    } 

    // This shit is hacky as fuck. Fix this later
    // if (images[selectedGallery]) {
    //   currentPortfolio = images[selectedGallery].filter(function(n) {
    //     return n.hidden !== true;
    //   });
    //   og_image = currentPortfolio[0].url;
    // }

    return (
      <div className="Gallery__page">
        <Helmet
          title="Aaron Mitchell: Gallery"
          meta={ [
            { name: "description", content: this.props.route.meta.meta_gallery },
            { property: "og:title", content: 'Aaron Mitchell\'s Online Portfolio: Gallery'},
            { property: "og:url", content: 'https://mitchellaaron.com/gallery/' + selectedGallery},
            { property: "og:image", content: og_image},
          ] }
        />
        <GalleryHero page={selectedGallery} />
        <div className="site_wrapper site_wrapper--main">

          <div className="col__left">
            <GalleryNav />
          </div>

          <div className="col__right">

            { galleryType === 'projects'
            ?
              <div>
                  <h1 className="Gallery__title">Web Development</h1>
                  <Projects />
                </div>
            : null
            }

            { galleryType === 'gallery'
              ?
                <div>
                  <h1 className="Gallery__title">{selectedGallery}</h1>
                  <div className="clearFix">
                    <GalleryContainer gallery={currentPortfolio} />
                  </div>
                </div>
              : null
            }

            { galleryType === 'case-study' && selectedGallery === 'rover-homepage-vision'
              ?
                <RoverHomepageVision />
              : null
            }

            { galleryType === 'case-study' && selectedGallery === 'rover-growth-cro'
              ?
                <RoverCRO />
              : null
            }

          </div>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
