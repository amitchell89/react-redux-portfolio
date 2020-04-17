import React, {Component} from 'react';
import { Link } from 'react-router';

import NavigationLinks from '../NavigationLinks';

export default class MobileNavigationDrawer extends Component {

  render() {

    const { onClick } = this.props;

    return (
      <div className="MobileNavigationDrawer">
        <div className="site_wrapper site_wrapper--main">
          <NavigationLinks onClick={onClick} />
        </div>
      </div>
    )
  }
}
