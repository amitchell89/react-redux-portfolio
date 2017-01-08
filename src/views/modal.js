import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import Helmet from "react-helmet";
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

  componentWillMount() {
    this.setState({info: false})
  }

  toggleInfo = () => {
    this.setState({info: !this.state.info})
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
    const bkgdImg = {
      backgroundImage: 'url(/../images/' + image.url + ')',
    }

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
    let modal__info_classes = 'modal__info'
    if (this.state.info == true) {
      modal__info_classes = 'modal__info modal__info--show'
    }
    let helmet_title = 'Aaron Mitchell: ' + image.name;

    return (
      <div className="modal">
        <Helmet title={helmet_title} />
        <div className="site_wrapper">
          <div className={modal__info_classes}>
            <p>{image.name}</p>
            <p>{image.medium}</p>
            <p>{image.year}</p>
            <p>{image.about}</p>
          </div>
          <div className="modal__buttons">
            <button className="btn--modal btn--modal--info" onClick={this.toggleInfo}><i className="fa fa-info" aria-hidden="true"></i></button>
            <button className={prevClass} disabled={prevDisabled} onClick={this.props.switchImage.bind(this, selectedGallery, prevId)}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
            <button className={nextClass} disabled={nextDisabled} onClick={this.props.switchImage.bind(this, selectedGallery, nextId)}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
            <button className="btn--modal btn--modal--close" onClick={this.props.closeModal.bind(this, selectedGallery)}><i className="fa fa-times" aria-hidden="true"></i></button>
          </div>
          <div className="modal__img" style={bkgdImg}></div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);