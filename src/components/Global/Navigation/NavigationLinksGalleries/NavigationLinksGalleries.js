import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { updateGallery } from '../../../../store/actions/UpdateGallery';

function mapStateToProps(state) {
   return {
      galleries: state.gallery.images
   };
}

function mapDispatchToProps(dispatch) {
  return {
    updateGallery: (gallery) => {
      dispatch(updateGallery(gallery))
    }
  }
}

class NavigationLinksGalleries extends Component {


  selectGallery(gallery) {
    console.log('gallery', gallery)
    this.props.updateGallery(gallery);
    this.props.onClick();
  }

  render() {

    const { onClick, galleries } = this.props;

    let galleryList = [];

    for (var key in galleries) {
      galleryList.push(key)
    }

    return (
      <div className="NavigationLinks NavigationLinks__Galleries">
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
                onClick={this.selectGallery.bind(this, s)}
              >
                {name}
              </Link>
             </li>
          )}.bind(this))}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinksGalleries);