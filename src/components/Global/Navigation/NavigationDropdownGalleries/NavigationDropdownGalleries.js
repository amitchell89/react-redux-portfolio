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
    updateGallery: (event) => {
      let gallery = event.target.value;
      dispatch(updateGallery(gallery));
      browserHistory.push('/gallery/' + gallery);
      window.scrollTo(0,0);
    }
  }
}

class NavigationDropdownGalleries extends Component {

  render() {

    const { galleries } = this.props;

    let galleryList = [];

    for (var key in galleries) {
      galleryList.push(key)
    }

    return (
      <div className="NavigationDropdownGalleries select-wrapper">
        <h4>
          <select title="select" onChange={this.props.updateGallery}>
            <option selected disabled>Select a Portfolio</option>
            <option value='projects'>Web Development</option>
            {galleryList.map(function (s, i) {
              let name = s[0].toUpperCase() + s.slice(1);
              return (
              <option key={i} value={s}>{name}</option>
            )}.bind(this))}
          </select>
        </h4>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDropdownGalleries);