import * as types from '../constants/ActionTypes';

export function updateGallery(name) {
  return {
    type: types.UPDATE_GALLERY,
    name
  };
}