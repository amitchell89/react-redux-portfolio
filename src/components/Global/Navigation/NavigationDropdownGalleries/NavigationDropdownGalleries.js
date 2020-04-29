import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { updateGallery } from '../../../../store/actions/UpdateGallery';

// THIS COMPONENT IS HACKY
// It should really have a better method of routing to case studys and gallerys than by listening for specific values. You should really clean this up sometime. 
//

function mapStateToProps(state) {
   return {
      galleries: state.gallery.images,
      selectedGallery: state.gallery.selected,
   };
}

function mapDispatchToProps(dispatch) {
  return {
    updateGallery: (event) => {
      let gallery = event.target.value;
      dispatch(updateGallery(gallery));
      if (gallery === 'rover-homepage-vision' || gallery === 'rover-growth-cro') {
        browserHistory.push('/case-study/' + gallery);
      } else {
        browserHistory.push('/gallery/' + gallery);
      }
      window.scrollTo(0,0);
    }
  }
}

class NavigationDropdownGalleries extends Component {

  render() {

    const { galleries, selectedGallery } = this.props;

    let galleryList = [];
    for (var key in galleries) {
      galleryList.push(key)
    }

    return (
      <div className="NavigationDropdownGalleries select-wrapper">
        <h4>
          <select value={selectedGallery} title="select" onChange={this.props.updateGallery}>
            <option selected disabled>Select a Portfolio</option>

            <option set='case-study' value='rover-homepage-vision'>Rover Homepage Vision</option>
            <option value='rover-growth-cro'>Rover Growth & CRO</option>

            <option value='development'>Web Development</option>
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