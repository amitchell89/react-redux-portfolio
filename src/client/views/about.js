import React, {Component} from 'react';
import { Link } from 'react-router'

export default class About extends Component {
  render() {
    return (
      <div>
        <h2>
        About
        </h2>
        <p>
        lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>Want to know more? <Link to="">Check out my resume</Link></p>
       <p> Want to talk? <Link to="contact">Send me a message</Link></p>
      </div>
    )
  }
}