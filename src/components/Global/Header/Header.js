import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { openMobileNav, closeMobileNav } from '../../../store/actions/ToggleMobileNav';

import MobileNavigationDrawer from '../MobileNavigationDrawer';

function mapStateToProps(state) {
   return {
      mobileNavIsOpen: state.mobileNav.display
   };
}

function mapDispatchToProps(dispatch) {
  return {
    openMobileNav: () => dispatch(openMobileNav()),
    closeMobileNav: () => dispatch(closeMobileNav()) 
  }
}

class Header extends Component {

  toggleDrawer(mobileNavIsOpen) {
    console.log('toggle', mobileNavIsOpen);

    if (mobileNavIsOpen) {
      this.props.closeMobileNav();
    } else {
      this.props.openMobileNav();
    }
  }

  render() {

    const { mobileNavIsOpen, closeMobileNav } = this.props;

    return (
      <header>
        <div className="header__container">
          <div className="site_wrapper site_wrapper--main">

            <div className="header__logo">
              <Link to="/" onClick={closeMobileNav}>
                <h2 className="header__title--desktop">
                  Aaron Mitchell Design
                </h2>
                <h3  className="header__title--mobile">
                  Aaron Mitchell Design
                </h3>
              </Link>
            </div>

            <div className="header__nav--desktop">
              <Link to="/">
                Home
              </Link>
              <Link to="/gallery">
                Gallery
              </Link>
              <Link to="/contact">
                Contact
              </Link>
            </div>

            <div className="header__nav--mobile">
              <button 
                className="button--icon"
                onClick={this.toggleDrawer.bind(this, mobileNavIsOpen)} 
              >
                <img src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/icons/icon_hamburger.svg" />
              </button>
            </div>

          </div>

        </div>

        {mobileNavIsOpen ?
          <MobileNavigationDrawer onClick={this.toggleDrawer.bind(this, mobileNavIsOpen)}  />
          :
          null
        }

      </header>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);