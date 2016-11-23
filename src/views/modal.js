import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { closeModal } from '../store/actions/ToggleModal'
import { setImage } from '../store/actions/SetImage'

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
    const imgUrl = '/../images/' + image.url;

    let prevClass = 'btn--modal'
    let nextClass = 'btn--modal'
    let prevDisabled = false;
    let nextDisabled = false;
    if (prevId < 0) {
      prevClass = prevClass + ' btn--modal--disabled'
      prevDisabled = true;
    }
    if (nextId >= images[selectedGallery].length) {
      nextClass = nextClass + ' btn--modal--disabled'
      nextDisabled = true;
    }

    return (
      <div className="modal">
        <div className="site_wrapper">
          <div className="modal__info">
            <p>Name: {image.name}</p>
            <p>Year: {image.year}</p>
            <p>Medium: {image.medium}</p>
            <p>Description: {image.about}</p>
            <div className="modal__buttons">
              <button className={prevClass} disabled={prevDisabled} onClick={this.props.switchImage.bind(this, selectedGallery, prevId)}>&lsaquo;</button>
              <button className={nextClass} disabled={nextDisabled} onClick={this.props.switchImage.bind(this, selectedGallery, nextId)}>&rsaquo;</button>
              <button className="btn--modal" onClick={this.props.closeModal.bind(this, selectedGallery)}>x</button>
            </div>
          </div>
          <div className="modal__img">
            <img src={imgUrl} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);