import * as types from '../constants/ActionTypes';

const initialState = {
  modal: false,
};

export default function modal(state = initialState, action) {
  console.log('reducer fired', action.type)
  switch (action.type) {

    case types.OPEN_MODAL:
      console.log('reducer open modal')
      return {
        ...state,
        modal: true,
      }
    case types.CLOSE_MODAL:
      console.log('reducer close modal')
      return {
        ...state,
        modal: false,
      }

    default:
      return state;
  }
}