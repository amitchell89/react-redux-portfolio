import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';
import * as allImages from '../constants/images';

let mappedImages = allImages.images;

for (var key in mappedImages) {
  mappedImages[key].map((image, i) => {
    image.id = i;
    return image;
  })
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

const selected = (state = 'paintings', action) => {
  console.log('reducer fired', action.type)
  switch (action.type) {
    case types.UPDATE_GALLERY:
      return action.name;
    default:
      return state;
  }
}

const gallery = combineReducers({
  images,
  selected
});

export default gallery;
