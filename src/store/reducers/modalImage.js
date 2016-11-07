import * as types from '../constants/ActionTypes';

const initialState = {
  modalImage: null,
};

export default function modalImage(state = initialState, action) {
  console.log('reducer fired', action.type)
  switch (action.type) {

    case types.SET_IMAGE:
      return {
        ...state,
        modalImage: action.id,
      }

    default:
      return state;
  }
}