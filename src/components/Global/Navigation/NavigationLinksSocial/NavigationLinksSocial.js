import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

function mapStateToProps(state) {
   return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

class NavigationLinksSocial extends Component {

  render() {
    const { onClick } = this.props;

    return (
      <div className="NavigationLinks NavigationLinks__Social">
        <ul>
          <li>
            <Link to="/" onClick={onClick}>
             To be filled in (social)
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinksSocial);