import React, {Component} from 'react';
import { connect } from 'react-redux';
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
    closeModal: (e) => {
      dispatch(closeModal(e))
    },
    switchImage: (id) => {
      dispatch(setImage(id))
    }
  }
}

class Modal extends Component {

  render() {
    const { selectedImage, selectedGallery, images } = this.props;

    let image = images[selectedGallery].find(function(s) {
      return s.id == selectedImage;
    });

    const prevId = image.id - 1;
    const nextId = image.id + 1;
    const imgUrl = '/../images/' + image.url;

    let prevClass = 'btn--modal'
    let nextClass = 'btn--modal'
    if (prevId < 0) {
      prevClass = prevClass + ' btn--modal--disabled'
    }
    if (nextId >= images[selectedGallery].length) {
      nextClass = nextClass + ' btn--modal--disabled'
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
              <button className={prevClass} onClick={this.props.switchImage.bind(this, prevId)}>&lsaquo;</button>
              <button className={nextClass} onClick={this.props.switchImage.bind(this, nextId)}>&rsaquo;</button>
              <button className="btn--modal" onClick={this.props.closeModal}>x</button>
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