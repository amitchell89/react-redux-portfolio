import React, {Component} from 'react';
import { connect } from 'react-redux';
import GalleryItem from './galleryItem'
import { updatePortfolio } from '../store/actions/UpdatePortfolio'
import { images } from '../store/constants/images'

function mapStateToProps(state) {
  console.log('state: ', state)
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
  componentWillMount() {
    this.setState({})
  }

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

    let filters = (
      <span className="select-wrapper">
        <select title="select" onChange={this.props.filterGallery}>
          <option selected disabled>Select a Portfolio</option>
          <option value="paintings">Paintings</option>
          <option value="illustrations">Illustrations</option>
          <option value="design">Design</option>
          <option value="posters">Posters</option>
          <option value="comics">Comics</option>
          <option value="circular">Circular</option>
          <option value="drawings">Drawings</option>
          <option value="collage">Collage</option>
        </select>
      </span>
    )

    // let list = (
    //   <ul className="gallery__nav">
    //     <li onClick={this.props.onClick.bind(this, 'paintings')}>Paintings</li>
    //     <li onClick={this.props.onClick.bind(this, 'illustrations')}>Illustrations</li>
    //     <li>Portfolio 3</li>
    //   </ul>
    // )

    return (
      <div>
        {filters}
        <p>Set: {this.props.portfolio}</p>
        <p>Year: test</p>
        {galleryItems}
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
