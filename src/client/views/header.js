import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <header>
        <p>Aaron Mitchell's Online Portfolio</p>
        <Link to="/">Gallery</Link>
        <Link to="about">About</Link>
        <Link to="">Resume</Link>
        <Link to="contact">Contact</Link>
      </header>
    )
  }
}