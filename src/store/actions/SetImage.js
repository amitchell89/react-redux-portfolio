import * as types from '../constants/ActionTypes';

export function setImage(id) {
  return {
    type: types.SET_IMAGE,
    id
  };
}