import React, {Component} from 'react';
import { connect } from 'react-redux';
import { openModal } from '../store/actions/ToggleModal'
import { setImage } from '../store/actions/SetImage'

function mapStateToProps(state) {
   return {};
}

function mapDispatchToProps(dispatch) {
  return {
    openModal: (id) => {
      dispatch(openModal())
      dispatch(setImage(id))
    }
  }
}

class GalleryItem extends Component {
  render() {

    const { image, id } = this.props;

    const bkgdImg = {
      backgroundImage: 'url(../images/' + image + ')',
    }

    return (
      <div className="gallery__item" style={bkgdImg} onClick={this.props.openModal.bind(this, id)}>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryItem);