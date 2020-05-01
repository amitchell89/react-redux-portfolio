import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { updateGallery } from '../../../../store/actions/UpdateGallery';

function mapStateToProps(state) {
   return {
      galleries: state.gallery.images,
      selectedGallery: state.gallery.selected.galleryName,
   };
}

function mapDispatchToProps(dispatch) {
  return {
    updateGallery: (event) => {
      let gallery = event.target.value;
      dispatch(updateGallery(gallery));
      browserHistory.push('/gallery/' + gallery);
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
          <select className="capitalize" value={selectedGallery} title="select" onChange={this.props.updateGallery}>
            <option selected disabled>Select a Portfolio</option>
            <option set='case-study' value='rover-homepage-vision'>Rover Homepage Vision</option>
            <option value='rover-growth-cro'>Rover Growth & CRO</option>
            <option value='development'>Web Development</option>

            {galleryList.map(function (s, i) {

              let name = s.replace('_',' ');

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