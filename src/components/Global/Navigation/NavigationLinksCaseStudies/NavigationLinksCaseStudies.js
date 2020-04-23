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

    const { onClick, state, galleries } = this.props;

    return (
      <div className="NavigationLinks NavigationLinks__Work">
        <ul>
          <li>
            <Link to="/" onClick={onClick}>
              To be filled in (work)
            </Link>
          </li>

        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinksCaseStudies);