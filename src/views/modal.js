import React, {Component} from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../store/actions/ToggleModal'
import { Images } from '../store/constants/images'

function mapStateToProps(state) {
   return {
      modalImage: state.modalImage.modalImage
   };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: (e) => {
      dispatch(closeModal(e))
    }
  }
}

class Modal extends Component {

  render() {
    const {modalImage} = this.props;

    let image = Images.find(function(s) {
      return s.id == modalImage;
    });

    const imgUrl = '../images/' + image.url;

    return (
      <div className="modal">
        <div className="site_wrapper">
          <div className="modal__info">
            <p>Name: {image.name}</p>
            <p>Year: </p>
            <p>Medium: </p>
            <p>Description: </p>
            <button>Previous</button>
            <button>Next</button>
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