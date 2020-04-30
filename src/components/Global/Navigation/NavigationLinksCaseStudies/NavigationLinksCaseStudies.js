import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { updateGallery } from '../../../../store/actions/UpdateGallery';

function mapStateToProps(state) {
   return {}
}

function mapDispatchToProps(dispatch) {
  return {
    updateGallery: (gallery) => {
      dispatch(updateGallery(gallery));
      browserHistory.push('/gallery/' + gallery);
      // window.scrollTo(0,0);
    }
  }
}

class NavigationLinksCaseStudies extends Component {

  render() {

    const { updateGallery } = this.props;

    return (
      <div className="NavigationLinks NavigationLinks__Work">
        <ul>
          <li onClick={updateGallery.bind(this, 'rover-homepage-vision')}>
            Rover Homepage Vision
          </li>
          <li to="/gallery/rover-growth-cro" onClick={updateGallery.bind(this, 'rover-growth-cro')}>
            Rover Growth & CRO
          </li>

        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinksCaseStudies);