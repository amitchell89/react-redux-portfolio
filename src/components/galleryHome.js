import React, {Component} from 'react';
import GalleryItem from './galleryItem';
import { Link } from 'react-router';

export default class GalleryHome extends Component {
  render() {

    const { gallery } = this.props;

    return (
      <div className="gallery__container gallery__container--home">
        {gallery.map(function (s, i) {
          const bkgdImg = {
            backgroundImage: 'url(../images/' + s.url + ')',
          }
          return (
            <div className="gallery__item">
              <Link to={s.link}>
                <div
                  className="gallery__image"
                  style={bkgdImg}
                >
                </div>
                <p className="gallery__label">
                {s.name}
                </p>
              </Link>
            </div>
        )}.bind(this))}
      </div>
    )
  }
}
