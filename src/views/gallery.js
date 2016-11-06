import React, {Component} from 'react';
import { connect } from 'react-redux';
import GalleryItem from './galleryItem'
import { bindActionCreators } from 'redux'
import { updatePortfolio } from '../store/actions/UpdatePortfolio'
import { Images } from '../store/constants/images'

function mapStateToProps(state) {
   return {
    portfolio: state.portfolio.portfolio
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
    const {portfolio} = this.props;
    let currentPortfolio = Images;

    currentPortfolio = currentPortfolio.filter(function (x, i) {
      if (currentPortfolio[i].set == portfolio) {
        return currentPortfolio[i].url
      }
    });

    let galleryItems = (
      <div className="gallery__container">
        {currentPortfolio.map(function (s, i) {
          return (
          <GalleryItem image={s.url} />
        )}.bind(this))}
      </div>
    )

    let filters = (
      <select title="select" onChange={this.props.filterGallery}>
        <option selected disabled>Choose one</option>
        <option value="paintings">Paintings</option>
        <option value="illustrations">Illustrations</option>
      </select>
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
        <p>Year: </p>
        {galleryItems}
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
