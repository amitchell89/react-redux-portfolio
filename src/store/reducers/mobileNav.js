import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const display = (state = false, action) => {
  switch (action.type) {

    case types.OPEN_MOBILE_NAV:
      return true;

    case types.CLOSE_MOBILE_NAV:
      return false;

    default:
      return state;
  }
}


const mobileNav = combineReducers({
  display
});

export default mobileNav;