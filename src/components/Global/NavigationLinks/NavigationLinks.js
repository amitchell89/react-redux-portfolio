import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

function mapStateToProps(state) {
   return {
      state: state,
      galleries: state.gallery.images
   };
}

function mapDispatchToProps(dispatch) {
  return {}
}

class NavigationLinks extends Component {
  render() {

    const { onClick, state, galleries } = this.props;

    let galleryList = [];

    for (var key in galleries) {
      galleryList.push(key)
    }

    return (
      <div className="NavigationLinks">
        <div className="NavigationLinks__section NavigationLinks__go">
          <h4>Go to</h4>
          <ul>
            <li>
              <Link to="/" onClick={onClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={onClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="NavigationLinks__section NavigationLinks__work">
          <h4>Work Samples</h4>
        </div>

        <div className="NavigationLinks__section NavigationLinks__galleries">
          <h4>Galleries</h4>

          <ul>
            <li> 
              <Link
                to='gallery/projects' 
                onClick={onClick}
              >
                Web Development
              </Link>
            </li>

            {galleryList.map(function (s, i) {
              let name = s[0].toUpperCase() + s.slice(1);
              return (
               <li key={i}>
                <Link
                  to={`/gallery/${s}`} 
                  onClick={onClick}
                >
                  {name}
                </Link>
               </li>
            )}.bind(this))}
          </ul>

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinks);