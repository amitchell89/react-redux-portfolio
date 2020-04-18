import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

import NavigationLinksGalleries from '../../Global/Navigation/NavigationLinksGalleries';
import NavigationDropdownGalleries from '../../Global/Navigation/NavigationDropdownGalleries';


export default class GalleryNav extends Component {

  render() {

    return (        
      <div className="gallery__nav">
        <h2 className="gallery__nav__label">Galleries</h2>
        <div className="gallery__nav--select">
          <NavigationDropdownGalleries />
        </div>
        <div className="gallery__nav--list">
          <NavigationLinksGalleries />
        </div>
      </div>
    )
  }
}

