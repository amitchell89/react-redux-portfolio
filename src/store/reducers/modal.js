import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const display = (state = false, action) => {
  switch (action.type) {

    case types.OPEN_MODAL:
      return true;

    case types.CLOSE_MODAL:
      return false;

    default:
      return state;
  }
}

const selectedImage = (state = null, action) => {
  switch (action.type) {

    case types.SET_IMAGE:
      return action.id

    default:
      return state;
  }
}

const modal = combineReducers({
  display,
  selectedImage
});

export default modal;