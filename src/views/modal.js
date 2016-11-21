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

    const imgPrev = image.id - 1;
    const imgNext = image.id + 1;
    const imgUrl = '/../images/' + image.url;

    return (
      <div className="modal">
        <div className="site_wrapper">
          <div className="modal__info">
            <p>Name: {image.name}</p>
            <p>Year: </p>
            <p>Medium: </p>
            <p>Description: </p>
            <button onClick={this.props.switchImage.bind(this, imgPrev)}>Previous</button>
            <button onClick={this.props.switchImage.bind(this, imgNext)}>Next</button>
            <button onClick={this.props.closeModal}>Close Modal</button>
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