import React, {Component} from 'react';
import { Link } from 'react-router'

export default class Footer extends Component {
  render() {
    let year = new Date().getFullYear();
    return (
      <footer>
      
          <div className="footer__top">
            <div className="site_wrapper">
              <h2>Aaron Mitchell Design</h2>
              <div className="footer__grid">
                <div className="footer__grid__item">
                  <h4>Work Samples</h4>
                </div>
                <div className="footer__grid__item">
                  <h4>Galleries</h4>
                </div>
                <div className="footer__grid__item">
                  <h4>About</h4>
                </div>
                <div className="footer__grid__item">
                  <h4>Find me online</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="site_wrapper">
        	    <p>&copy; {year} Aaron Mitchell &nbsp;|&nbsp;<Link to="terms">Terms & Conditions</Link> &nbsp;|&nbsp; <Link to="privacy">Privacy Policy</Link></p>
      	    </div> 
          </div>

      </footer>
    )
  }
}