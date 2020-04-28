import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

function mapStateToProps(state) {
   return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

class NavigationLinksCaseStudies extends Component {

  render() {

    const { onClick } = this.props;

    return (
      <div className="NavigationLinks NavigationLinks__Work">
        <ul>
          <li>
            <Link to="/case-study/rover-homepage-vision" onClick={onClick}>
              Rover Homepage Vision
            </Link>
          </li>
          <li>
            <Link to="/case-study/rover-growth-cro" onClick={onClick}>
              Rover Growth & CRO
            </Link>
          </li>

        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinksCaseStudies);