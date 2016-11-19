import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const display = (state = false, action) => {
  console.log('reducer fired', action.type)
  switch (action.type) {

    case types.OPEN_MODAL:
      console.log('reducer open modal', state)
      return true;

    case types.CLOSE_MODAL:
      console.log('reducer close modal')
      return false;

    default:
      return state;
  }
}

const selectedImage = (state = null, action) => {
  console.log('reducer fired', action.type)
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