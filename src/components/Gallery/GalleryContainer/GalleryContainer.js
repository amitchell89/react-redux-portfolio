import React, {Component} from 'react';
import GalleryItem from '../galleryItem';

export default class GalleryContainer extends Component {
  render() {

    const { gallery } = this.props;

    return (
      <div className="gallery__container">
        {gallery.map(function (s, i) {
          return (
          <GalleryItem image={s.url} id={s.id} key={s.id} />
        )}.bind(this))}
      </div>
    )
  }
}
