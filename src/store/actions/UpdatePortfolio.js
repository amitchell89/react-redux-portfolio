import * as types from '../constants/ActionTypes';

export function updatePortfolio(name) {
  console.log('action dispatched', name)
  return {
    type: types.UPDATE_PORTFOLIO,
    name
  };
}