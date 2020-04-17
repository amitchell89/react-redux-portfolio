import * as types from '../constants/ActionTypes';

export function openMobileNav() {
  console.log('action dispatched: open mobile nav')
  return {
    type: types.OPEN_MOBILE_NAV
  };
}

export function closeMobileNav() {
  console.log('action dispatched: close mobile nav')
  return {
    type: types.CLOSE_MOBILE_NAV
  };
}