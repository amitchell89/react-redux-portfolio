import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

import NavigationLinksGalleries from '../../Global/Navigation/NavigationLinksGalleries';

export default class GalleryNav extends Component {

  render() {
    const { images, filter } = this.props;
    let galleryList = [];

    for (var key in images) {
      galleryList.push(key)
    }

    let filters = (
      <div className="select-wrapper gallery__nav--select">
        <h4>
        <select title="select" onChange={this.props.filter}>
          <option selected disabled>Select a Portfolio</option>
          <option value='projects'>Web Development</option>
          {galleryList.map(function (s, i) {
            let name = s[0].toUpperCase() + s.slice(1);
            return (
            <option key={i} value={s}>{name}</option>
          )}.bind(this))}
        </select>
        </h4>
      </div>
    )

    return (
      <div>
        <h2 className="gallery__nav__label">Galleries</h2>
        <div className="gallery__nav">
          {filters}

          <div className="gallery__nav--list">
            <NavigationLinksGalleries />
          </div>

        </div>
      </div>
    )
  }
}

