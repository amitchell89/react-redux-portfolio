import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

function mapStateToProps(state) {
   return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

class NavigationLinksSocial extends Component {

  render() {
    const { onClick } = this.props;

    return (
      <div className="NavigationLinks NavigationLinks__Social">
        <ul>

          <li>
            <Link to="https://github.com/amitchell89" onClick={onClick} target="_blank">
               <button className="button--icon button--icon--social">
                 <img src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/icons/icon_github.svg" />
               </button>
            </Link>
          </li>

          <li>
            <Link to="https://www.linkedin.com/in/aaron-mitchell-design" onClick={onClick} target="_blank">
               <button className="button--icon button--icon--social">
                 <img src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/icons/icon_linkedin.svg" />
               </button>
            </Link>
          </li>

          <li>
            <Link to="https://www.instagram.com/mindofmitchell/" onClick={onClick} target="_blank">
               <button className="button--icon button--icon--social">
                 <img src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/icons/icon_instagram.svg" />
               </button>
            </Link>
          </li>

        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinksSocial);