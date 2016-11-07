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
          <img src={imgUrl} />
          <button onClick={this.props.closeModal}>Close Modal</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);