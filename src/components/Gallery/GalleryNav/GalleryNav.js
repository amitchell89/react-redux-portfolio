import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

import NavigationLinksCaseStudies from '../../Global/Navigation/NavigationLinksCaseStudies';
import NavigationLinksGalleries from '../../Global/Navigation/NavigationLinksGalleries';
import NavigationDropdownGalleries from '../../Global/Navigation/NavigationDropdownGalleries';

export default class GalleryNav extends Component {

  render() {

    return (        
      <div className="gallery__nav">
        <div className="gallery__nav__list">
          <div className="gallery__nav_-section--1">
            <h3>Case Studies</h3>
            <NavigationLinksCaseStudies />
          </div>
          <div className="gallery__nav_-section--2">
            <h3>Galleries</h3>
            <NavigationLinksGalleries />
          </div>
        </div>
        <div className="gallery__nav__select">
          <NavigationDropdownGalleries />
        </div>
      </div>
    )
  }
}

