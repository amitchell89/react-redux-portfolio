import React, {Component} from 'react';
import { connect } from 'react-redux';
import GalleryItem from './galleryItem'
import { updatePortfolio } from '../store/actions/UpdatePortfolio'
import { images } from '../store/constants/images'

function mapStateToProps(state) {
   return {
    images: state.gallery.images,
    selectedGallery: state.gallery.selected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // onClick: (gallery, e) => {
    //   dispatch(updatePortfolio(gallery))
    // }
    filterGallery: (event) => {
      dispatch(updatePortfolio(event.target.value))
    }
  }
}

class Gallery extends Component {
  render() {
    const { images, selectedGallery } = this.props;

    let currentPortfolio = images[selectedGallery];

    let galleryItems = (
      <div className="gallery__container">
        {currentPortfolio.map(function (s, i) {
          return (
          <GalleryItem image={s.url} id={s.id}/>
        )}.bind(this))}
      </div>
    )

    console.log('images', images)

    let galleryList = [];

    for (var key in images) {
      galleryList.push(key)
    }

    let filters = (
      <span className="select-wrapper">
        <select title="select" onChange={this.props.filterGallery}>
          <option selected disabled>Select a Portfolio</option>
          {galleryList.map(function (s, i) {
            let name = s[0].toUpperCase() + s.slice(1);
            return (
            <option value={s}>{name}</option>
          )}.bind(this))}
        </select>
      </span>
    )

          // <option value="paintings">Paintings</option>
          // <option value="illustrations">Illustrations</option>
          // <option value="design">Design</option>
          // <option value="posters">Posters</option>
          // <option value="comics">Comics</option>
          // <option value="circular">Circular</option>
          // <option value="drawings">Drawings</option>
          // <option value="collage">Collage</option>

    // let list = (
    //   <ul className="gallery__nav">
    //     <li onClick={this.props.onClick.bind(this, 'paintings')}>Paintings</li>
    //     <li onClick={this.props.onClick.bind(this, 'illustrations')}>Illustrations</li>
    //     <li>Portfolio 3</li>
    //   </ul>
    // )

    let selectedGalleryClean = this.props.selectedGallery[0].toUpperCase() + this.props.selectedGallery.slice(1);

    return (
      <div>
        {filters}
        <p>Set: {selectedGalleryClean}</p>
        <p>Year: test</p>
        {galleryItems}
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
