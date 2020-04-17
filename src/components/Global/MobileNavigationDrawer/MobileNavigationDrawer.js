import React, {Component} from 'react';
import { Link } from 'react-router';

import NavigationLinks from '../NavigationLinks';

export default class MobileNavigationDrawer extends Component {
  render() {
    return (
      <div className="MobileNavigationDrawer">
        <div className="site_wrapper site_wrapper--main">
          <NavigationLinks />
        </div>
      </div>
    )
  }
}
