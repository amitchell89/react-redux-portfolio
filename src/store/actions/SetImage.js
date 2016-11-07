import * as types from '../constants/ActionTypes';

export function setImage(id) {
  console.log('action dispatched', id)
  return {
    type: types.SET_IMAGE,
    id
  };
}