import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { updateGallery } from '../../../../store/actions/UpdateGallery';

function mapStateToProps(state) {
   return {
      galleries: state.gallery.images
   };
}

function mapDispatchToProps(dispatch) {
  return {
    updateGallery: (gallery) => {
      dispatch(updateGallery(gallery));
      browserHistory.push('/gallery/' + gallery);
      window.scrollTo(0,0);
    }
  }
}

class NavigationLinksGalleries extends Component {

  selectGallery(gallery) {
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
          <li onClick={this.selectGallery.bind(this, 'development')}> 
            Web Development
          </li>
          {galleryList.map(function (s, i) {
            let name = s[0].toUpperCase() + s.slice(1);
            return (
             <li key={i} onClick={this.selectGallery.bind(this, s)}>
              {name}
             </li>
          )}.bind(this))}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinksGalleries);