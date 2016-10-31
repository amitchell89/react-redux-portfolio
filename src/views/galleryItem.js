import React, {Component} from 'react';

export default class GalleryItem extends Component {
  render() {

    const { image } = this.props;

    const bkgdImg = {
      backgroundImage: 'url(../images/paintings/' + image + ')',
    }

    return (
      <div className="gallery__item" style={bkgdImg}>
      </div>
    )
  }
}