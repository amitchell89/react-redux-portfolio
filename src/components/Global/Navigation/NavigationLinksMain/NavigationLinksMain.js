import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

function mapStateToProps(state) {
   return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}


class NavigationLinksMain extends Component {
  render() {

    const { onClick } = this.props;

    return (
      <div className="NavigationLinks NavigationLinks__Main">
        <ul>
          <li>
            <Link to="/" onClick={onClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={onClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinksMain);