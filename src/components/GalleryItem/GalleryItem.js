import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { openModal } from '../../store/actions/ToggleModal';
import { setImage } from '../../store/actions/SetImage';

function mapStateToProps(state) {
   return {
    selectedGallery: state.gallery.selected
   };
}

function mapDispatchToProps(dispatch) {
  return {
    openModal: (gallery, id) => {
      dispatch(openModal())
      dispatch(setImage(id))
      browserHistory.push('/gallery/' + gallery + '/' + id)
    }
  }
}

class GalleryItem extends Component {
  render() {

    const { image, id, selectedGallery } = this.props;

    const bkgdImg = {
      backgroundImage: 'url(' + image + ')',
    }

    return (
      <div className="gallery__item">
        <div
          className="gallery__image"
          style={bkgdImg}
          onClick={this.props.openModal.bind(this, selectedGallery, id)}>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryItem);