import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';
import * as allImages from '../constants/images';

let mappedImages = allImages.images;

for (var key in mappedImages) {
  mappedImages[key] = mappedImages[key].filter((image, i) => {
    return image.hidden !== true;
  });
  mappedImages[key].map((image, i) => {
    image.id = i;
    return image;
  });
}

const images = (state = mappedImages, action) => {
  switch (action.type) {
    case types.WHATEVER:
      return [
        ...state,
        action.images
      ]
    default:
      return state;
  }
}

// const selected = (state = 'illustration', action) => {
const selected = (state = false, action) => {
  console.log('ACTION', action)
  switch (action.type) {
    case types.UPDATE_GALLERY:
      return {
        ...state,
        galleryName: action.name
      }
    default:
      return state;
  }
}

const gallery = combineReducers({
  images,
  selected
});

export default gallery;
