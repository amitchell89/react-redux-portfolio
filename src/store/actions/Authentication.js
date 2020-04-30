import { browserHistory } from 'react-router';

import * as types from '../constants/ActionTypes';
import store from '../reducers';

/////////////////////////////////////////////
// Check if Auth Token exists & verify it //
///////////////////////////////////////////

export function checkForAuthToken() {
  return dispatch => {
    let token = window.localStorage.getItem('MitchysSecretToken');
    console.log('CHECK FOR TOKEN', token)

    if (token) {
      let data = { token: token }

      dispatch(authenticationPending(true));
      verifyAuthToken(data, error => {
        if (!error) {
          console.log('SUCCESS')
          dispatch(authenticationSuccess(true));
        } else {
          console.log('FAIL')
          dispatch(authenticationFail());
        }
      });
    }

  }
}

function verifyAuthToken(data,callback) {
  fetch('/verifyAuthToken', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
   }).then(function(response) {
    Promise.resolve(response).then(function(value) {

      console.log('RESPONSE', value)
      switch (response.status) {
        case 400: 
          return callback(new Error('400: Token Verification Failure: Server error'));
        case 401:
          return callback(new Error('401: Token Verification Failure: Your token did not match'));
        case 500: 
          return callback(new Error('500: There was a problem verifying your token.'));
        default:
          return callback();
      }
    });
  });
}

////////////////////////////////////////
// Login to password protected pages //
//////////////////////////////////////

export function login(password) {

	let data = { password: password }

  return dispatch => {
    dispatch(authenticationPending(true));
    dispatch(authenticationSuccess(false));
    dispatch(authenticationError(null));

    callAuthenticationApi(data, error => {
      console.log('store: api callback')
      dispatch(authenticationPending(false));
      if (!error) {
        dispatch(authenticationSuccess(true));

        // advance to page that triggered login
        let destinationPage = store.getState().authentication.destinationPage;
        if (destinationPage) {
          browserHistory.push(destinationPage); 
        } else {
          browserHistory.push('/'); 
        }

      } else {
        dispatch(authenticationError(error));
      }
    });

  }
}

function callAuthenticationApi(data, callback) {
  console.log('STORE: call authentication api', data)

  fetch('/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
   }).then(function(response) {
    Promise.resolve(response.json()).then(function(value) {

      //store Secret Cookie Token to local session storage 
      //sessionStorage = persisted only in current tab. LocalStorage = across all windows and tabs
      localStorage.setItem('MitchysSecretToken', value.token)

      console.log('RESPONSE', value)
      switch (response.status) {
        case 400: 
          return callback(new Error('400: Signup Failure: Server error'));
        case 401:
          return callback(new Error('401: Login Failure: Your password did not match'));
        case 500: 
          return callback(new Error('500: There was a problem signing in.'));
        default:
          return callback();
      }
    });
  });

}

/////////////////////////////
// Authentication Actions //
///////////////////////////

function authenticationPending(authenticationPending) {
  return {
    type: types.AUTHENTICATION_PENDING,
    authenticationPending
  };
}
 
function authenticationSuccess(authenticationSuccess) {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    authenticationSuccess
  };
}
 
function authenticationError(authenticationError) {
  return {
    type: types.AUTHENTICATION_ERROR,
    authenticationError
  }
}

function authenticationFail(authenticationFail) {
  return {
    type: types.AUTHENTICATION_FAIL,
    authenticationFail
  }
}

export function setDestinationPage(destination) {
  return {
    type: types.SET_DESTINATION_PAGE,
    destination
  }
}
