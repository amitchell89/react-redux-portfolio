import React, {Component} from 'react';
import { Link } from 'react-router';

import NavigationLinksMain from '../Navigation/NavigationLinksMain';
import NavigationLinksCaseStudies from '../Navigation/NavigationLinksCaseStudies';
import NavigationLinksGalleries from '../Navigation/NavigationLinksGalleries';

export default class MobileNavigationDrawer extends Component {

  render() {

    const { onClick } = this.props;

    return (
      <div className="MobileNavigationDrawer">
        <div className="site_wrapper site_wrapper--main">

          <div className="NavigationLinks__section NavigationLinks__go">
            <h4>Go to</h4>
            <NavigationLinksMain onClick={onClick} />

          </div>

          <div className="NavigationLinks__section NavigationLinks__work">
            <h4>Case Studies</h4>
            <NavigationLinksCaseStudies onClick={onClick} />
          </div>

          <div className="NavigationLinks__section NavigationLinks__galleries">
            <h4>Galleries</h4>
            <NavigationLinksGalleries onClick={onClick} />
          </div>

        </div>
      </div>
    )
  }
}
