import * as types from '../constants/ActionTypes';

const initialState = {
  portfolio: 'paintings',
};

export default function portfolio(state = initialState, action) {
  console.log('reducer fired', action.type)
  switch (action.type) {

    case types.UPDATE_PORTFOLIO:
      return {
        ...state,
        portfolio: action.name,
      }

    default:
      return state;
  }
}