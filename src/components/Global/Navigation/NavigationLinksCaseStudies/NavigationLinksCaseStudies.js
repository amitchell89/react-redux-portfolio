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

  constructor(props) {
    super(props);
    this.state = {};
    this.selectGallery = this.selectGallery.bind(this);
  } 

  selectGallery(gallery) {
    const { updateGallery, onClick } = this.props;

    this.props.updateGallery(gallery);

    if (onClick) {
      this.props.onClick();
    }
    
  }

  render() {

    const {} = this.props;

    return (
      <div className="NavigationLinks NavigationLinks__Work">
        <ul>
          <li onClick={this.selectGallery.bind(this, 'rover-homepage-vision')}>
            Rover Homepage Vision
          </li>
          <li to="/gallery/rover-growth-cro" onClick={this.selectGallery.bind(this, 'rover-growth-cro')}>
            Rover Growth & CRO
          </li>

        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinksCaseStudies);