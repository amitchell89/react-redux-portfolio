import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { updateGallery } from '../store/actions/UpdateGallery'
import { openModal } from '../store/actions/ToggleModal'
import { setImage } from '../store/actions/SetImage'
import GalleryItem from './galleryItem'


function mapStateToProps(state) {
   return {
    images: state.gallery.images,
    selectedGallery: state.gallery.selected,
    modal: state.modal.display
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (gallery) => {
      dispatch(updateGallery(gallery))
       browserHistory.push('/gallery/' + gallery)
    },
    filterGallery: (event) => {
      dispatch(updateGallery(event.target.value))
      browserHistory.push('/gallery/' + event.target.value)
    },
    updateGalleryOnLoad: (gallery) => {
      dispatch(updateGallery(gallery))
    },
    openModal: (id) => {
      dispatch(openModal())
      dispatch(setImage(id))
    }
  }
}

class Gallery extends Component {

  componentDidMount() {
    if (this.props.params.set) {
      for (var key in this.props.images) {
        if (this.props.params.set == key ) {
          this.props.updateGalleryOnLoad(this.props.params.set);
          break;
        }
      }
    }
    if (this.props.params.image) {
      this.props.openModal(this.props.params.image)
    }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('check', this.props.modal !== nextProps.modal)
  //   return (this.props.modal !== nextProps.modal)
  // }

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

    let galleryList = [];

    for (var key in images) {
      galleryList.push(key)
    }

    let filters = (
      <div className="select-wrapper gallery__nav--select">
        <select title="select" onChange={this.props.filterGallery}>
          <option selected disabled>Select a Portfolio</option>
          {galleryList.map(function (s, i) {
            let name = s[0].toUpperCase() + s.slice(1);
            return (
            <option value={s}>{name}</option>
          )}.bind(this))}
        </select>
      </div>
    )

    let list = (
      <ul className="gallery__nav--list">
        {galleryList.map(function (s, i) {
          let name = s[0].toUpperCase() + s.slice(1);
          let listClass = null;
          if (s == selectedGallery) {
            listClass = 'list--selected'
          }
          return (
           <li className={listClass} onClick={this.props.onClick.bind(this, s)}>{name}</li>
        )}.bind(this))}
      </ul>
    )

    return (
      <div>
        <div className="gallery__nav">
        {filters}
        {list}
        </div>
        {galleryItems}
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
