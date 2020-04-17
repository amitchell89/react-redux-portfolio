import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { openMobileNav, closeMobileNav } from '../../../store/actions/ToggleMobileNav';

import NavigationLinks from '../NavigationLinks';

function mapStateToProps(state) {
   return {
      mobileNavIsOpen: state.mobileNav.display,
      // selectedImage: state.modal.selectedImage,
      // selectedGallery: state.gallery.selected,
      // images: state.gallery.images
      state: state
   };
}

function mapDispatchToProps(dispatch) {
  return {
    openMobileNav: () => dispatch(openMobileNav()), 
    closeMobileNav: () => dispatch(closeMobileNav()) 

    // closeModal: (gallery, e) => {
    //   dispatch(closeModal())
    //   browserHistory.push('/gallery/' + gallery)
    // },
    // switchImage: (gallery, id) => {
    //   if (id < 0) {
    //     return;
    //   }
    //   dispatch(setImage(id))
    //   browserHistory.push('/gallery/' + gallery + '/' + id)
    // }
  }
}

class Header extends Component {


  toggleDrawer(mobileNavIsOpen) {
    console.log('toggle', mobileNavIsOpen);

    if (mobileNavIsOpen) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  }

  render() {

    const { mobileNavIsOpen, state } = this.props;

    console.log('nav', mobileNavIsOpen, state)

    return (
      <header>
        <div className="header__container">
          <div className="site_wrapper site_wrapper--main">

            <div className="header__logo">
              <Link to="/">
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

        <div className="header__nav__drawer">
          <h2>Nav goes here</h2>
        </div>
      </header>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);