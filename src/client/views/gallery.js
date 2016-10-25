import React, {Component} from 'react';
import GalleryItem from './galleryItem'

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <ul className="gallery__nav">
          <li>Portfolio 1</li>
          <li>Portfolio 2</li>
          <li>Portfolio 3</li>
        </ul>
        <div className="gallery__container">
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
        </div>
      </div>
    )
  }
}