import React, {Component} from 'react';
import { Link } from 'react-router';


export default class NavigationLinks extends Component {
  render() {

    const { onClick } = this.props;

    return (
      <div className="NavigationLinks">
        <div className="NavigationLinks__go">
          <h4>Go to</h4>
          <p>
            <Link to="/" onClick={onClick}>
              Home
            </Link>
          </p>
          <p>
            <Link to="/contact" onClick={onClick}>
              Contact
            </Link>
          </p>
        </div>
        <div className="NavigationLinks__work">
          <h4>Work Samples</h4>
        </div>
        <div className="NavigationLinks__galleries">
          <h4>Galleries</h4>
        </div>
      </div>
    )
  }
}
