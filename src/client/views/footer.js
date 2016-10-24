import React, {Component} from 'react';
import { Link } from 'react-router'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>&copy; INSERT YEAR Aaron Mitchell <Link to="terms">Terms & Conditions</Link></p>
      </footer>
    )
  }
}