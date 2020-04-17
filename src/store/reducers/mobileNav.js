import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const display = (state = false, action) => {
  console.log('reducer fired', action.type)
  switch (action.type) {

    case types.OPEN_MOBILE_NAV:
      console.log('reducer open mobile nav')
      return true;

    case types.CLOSE_MOBILE_NAV:
      console.log('reducer close mobile nav')
      return false;

    default:
      return state;
  }
}


const mobileNav = combineReducers({
  display
});

export default mobileNav;