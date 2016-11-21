import * as types from '../constants/ActionTypes';

export function updateGallery(name) {
  console.log('action dispatched', name)
  return {
    type: types.UPDATE_GALLERY,
    name
  };
}