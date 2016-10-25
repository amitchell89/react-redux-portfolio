import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Aaron Mitchell</h1>
        <div className="header__nav">
          <Link to="/">Gallery</Link>
          <Link to="about">About</Link>
          <Link to="">Resume</Link>
          <Link to="contact">Contact</Link>
        </div>
      </header>
    )
  }
}