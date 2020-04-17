import React, {Component} from 'react';
import { Link } from 'react-router';

// var logo = 'https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/Aaron_Mitchell_Logo.png';

export default class Header extends Component {
  render() {
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
              >
                <img src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/icons/icon_hamburger.svg" />
              </button>
            </div>
          </div>


        </div>
      </header>
    )
  }
}