import React, {Component} from 'react';
import { connect } from 'react-redux';
import GalleryItem from './galleryItem'
import { bindActionCreators } from 'redux'
import { updatePortfolio } from '../store/actions/UpdatePortfolio'

function mapStateToProps(state) {
   console.log('state', state)
   return {portfolio: state.portfolio.portfolio};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (gallery, e) => {
      dispatch(updatePortfolio(gallery))
    }
  }
}

class Gallery extends Component {
  componentWillMount() {
    this.setState({})
  }

  render() {

    let paintings = [
      {url: "Aaron_Mitchell_Painting_2011_700.jpg"},
      {url: "Aaron_Mitchell_Painting_Does_This_Look_Good_700.jpg"},
      {url: "Aaron_Mitchell_Painting_In_Between_700.jpg"},
      {url: "Aaron_Mitchell_Painting_Is_It_Fresh_700.jpg"},
      {url: "Aaron_Mitchell_Painting_Reach_700.jpg"}
    ]
    let illustrations = [
      {url: "Aaron_Mitchell_Best_Hotel_700.jpg"},
      {url: "Aaron_Mitchell_Black_Gold_700.jpg"},
      {url: "Aaron_Mitchell_Phish_Poster_700.jpg"},
      {url: "Aaron_Mitchell_The_Ring_700.jpg"}
    ]

    let galleryItems = (
      <div className="gallery__container">
        {paintings.map(function (s, i) {
          return (
          <GalleryItem image={s.url} />
        )}.bind(this))}
      </div>
    )
    console.log('this', this.props)

    return (
      <div>
        <ul className="gallery__nav">
          <li onClick={this.props.onClick.bind(this, 'paintings')}>Paintings</li>
          <li onClick={this.props.onClick.bind(this, 'illustration')}>Illustrations</li>
          <li>Portfolio 3</li>
        </ul>
        <p>Current: {this.props.portfolio}</p>
        {galleryItems}
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
