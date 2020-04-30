import * as types from '../constants/ActionTypes';

export function openMobileNav() {
  return {
    type: types.OPEN_MOBILE_NAV
  };
}

export function closeMobileNav() {
  return {
    type: types.CLOSE_MOBILE_NAV
  };
}