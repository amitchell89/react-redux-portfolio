import React, {Component} from 'react';
import { Link } from 'react-router';

import GalleryItem from '../galleryItem';
import GalleryLockIcon from '../GalleryLockIcon';

export default class GalleryHomeCaseStudy extends Component {
  render() {

    return (
      <div className="GalleryHomeCaseStudy gallery__container gallery__container--full-width">
        <div className="gallery__item">
          <GalleryLockIcon />
          <Link to="gallery/rover-homepage-vision">
            <div className="gallery__image gallery__image--rover-homepage-vision">
            </div>
            <p className="gallery__label">
              Rover Homepage Vision
            </p>
          </Link>
        </div>

        <div className="gallery__item">
          <GalleryLockIcon />
          <Link to="gallery/rover-growth-cro">
            <div className="gallery__image gallery__image--rover-cro">
            </div>
            <p className="gallery__label">
              Rover Growth & CRO
            </p>
          </Link>
        </div>

      </div>
    )
  }
}
