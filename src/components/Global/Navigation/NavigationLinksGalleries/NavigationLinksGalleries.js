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
    }
  }
}

class NavigationLinksGalleries extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.selectGallery = this.selectGallery.bind(this);
  } 

  selectGallery(gallery) {
    const { updateGallery, onClick } = this.props;

    this.props.updateGallery(gallery);

    if (onClick) {
      this.props.onClick();
    }
    
  }

  render() {

    const { galleries } = this.props;

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
            
            let name = s.replace('_',' ');

            return (
             <li className="capitalize" key={i} onClick={this.selectGallery.bind(this, s)}>
              {name}
             </li>
          )}.bind(this))}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinksGalleries);