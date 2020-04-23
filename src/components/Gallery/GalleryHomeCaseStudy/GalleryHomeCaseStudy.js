import React, {Component} from 'react';
import GalleryItem from '../galleryItem';
import { Link } from 'react-router';

export default class GalleryHomeCaseStudy extends Component {
  render() {

    return (
      <div className="GalleryHomeCaseStudy gallery__container gallery__container--full-width">

        <div className="gallery__item">
          <Link to="">
            <div className="gallery__image">
            </div>
            <p className="gallery__label">
              Label
            </p>
          </Link>
        </div>

        <div className="gallery__item">
          <Link to="">
            <div className="gallery__image">
            </div>
            <p className="gallery__label">
              Label
            </p>
          </Link>
        </div>

      </div>
    )
  }
}
