import React, {Component} from 'react';
import ReactDOM from 'react-dom';
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
          <h2>Case Studies</h2>
          <NavigationLinksCaseStudies />
          <h2>Galleries</h2>
          <NavigationLinksGalleries />
        </div>
        <div className="gallery__nav__select">
          <NavigationDropdownGalleries />
        </div>
      </div>
    )
  }
}

