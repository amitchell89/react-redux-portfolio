import React, {Component} from 'react';
import { Link } from 'react-router';

import logo from '../images/Aaron_Mitchell_Logo.png';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header__logo">
          <Link to="/">
            <img src={logo} />
            <h1>
              Aaron Mitchell
            </h1>
          </Link>
        </div>
        <div className="header__nav">
          <Link to="/gallery">
            Gallery
          </Link>
          <Link to="/projects">
            Projects
          </Link>
          <Link to="/">
            About
          </Link>
          <Link to="/contact">
            Contact
          </Link>
        </div>
      </header>
    )
  }
}