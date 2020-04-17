import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import Helmet from "react-helmet";
import { closeModal } from '../../store/actions/ToggleModal'
import { setImage } from '../../store/actions/SetImage'

function mapStateToProps(state) {
   return {
      selectedImage: state.modal.selectedImage,
      selectedGallery: state.gallery.selected,
      images: state.gallery.images
   };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: (gallery, e) => {
      dispatch(closeModal())
      browserHistory.push('/gallery/' + gallery)
    },
    switchImage: (gallery, id) => {
      if (id < 0) {
        return;
      }
      dispatch(setImage(id))
      browserHistory.push('/gallery/' + gallery + '/' + id)
    }
  }
}

class Modal extends Component {

  componentWillMount() {
    this.setState({info: false})
  }

  render() {
    const { selectedImage, selectedGallery, images } = this.props;

    let image = images[selectedGallery].find(function(s) {
      return s.id == selectedImage;
    });

    if (image == null) {
      // close modal if id is not found
      this.props.closeModal(selectedGallery)
    }

    const prevId = image.id - 1;
    const nextId = image.id + 1;

    let prevClass = 'button--icon modal__button__previous';
    let nextClass = 'button--icon modal__button__next';
    let prevDisabled = false;
    let nextDisabled = false;
    if (prevId < 0) {
      prevClass = prevClass + ' button--icon--disabled'
      prevDisabled = true;
    }
    if (nextId >= images[selectedGallery].length) {
      nextClass = nextClass + ' button--icon--disabled'
      nextDisabled = true;
    }

    let helmet_title = 'Aaron Mitchell: ' + image.name;
    let helmet_og_title = image.name + ' by Aaron Mitchell. ' + image.medium + '. ' + image.year + '.'
    let helmet_desc = helmet_og_title + ' ' + this.props.meta.meta_standard

    return (
      <div className="modal">
        <Helmet
          title={helmet_title}
          meta={ [
            { name: "description", content: helmet_desc },
            { property: "og:title", content: helmet_og_title },
            { property: "og:url", content: 'https://mitchellaaron.com/gallery/' + selectedGallery + '/' + image.id},
            { property: "og:image", content: 'https://mitchellaaron.com/images/' + image.url},
          ] }
        />
        <div className="site_wrapper">
          <div className="modal__container">

            <img className="modal__img" src={image.url} />

            <div className="modal__sidebar">
              <div className="modal__navigation">
                
                <button 
                  className={prevClass}
                  disabled={prevDisabled}
                  onClick={this.props.switchImage.bind(this, selectedGallery, prevId)}
                >
                  <img src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/icons/icon_previous.svg" />
                </button>
                
                <button
                  className={nextClass}
                  disabled={nextDisabled}
                  onClick={this.props.switchImage.bind(this, selectedGallery, nextId)} 
                >
                  <img src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/icons/icon_next.svg" />
                </button>

                <button
                  className="button--icon modal__button__close"
                  onClick={this.props.closeModal.bind(this, selectedGallery)}
                >
                  <img src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/icons/icon_close.svg" />
                </button>

              </div>

              <div className="modal__info">
                <h2>{image.name}</h2>
                <p>{image.medium} &nbsp;|&nbsp; {image.year}</p>
                <p>{image.about}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
