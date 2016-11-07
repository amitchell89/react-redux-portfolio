import React, {Component} from 'react';
import { connect } from 'react-redux';
import { openModal } from '../store/actions/ToggleModal'

function mapStateToProps(state) {
   return {};
}

function mapDispatchToProps(dispatch) {
  return {
    openModal: (e) => {
      dispatch(openModal(e))
    }
  }
}

class GalleryItem extends Component {
  render() {

    const { image } = this.props;

    const bkgdImg = {
      backgroundImage: 'url(../images/' + image + ')',
    }

    return (
      <div className="gallery__item" style={bkgdImg} onClick={this.props.openModal}>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryItem);