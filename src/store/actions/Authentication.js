import * as types from '../constants/ActionTypes';


export function login(password) {
	console.log('LOGIN ACTION', password)
	let data = {
	  password: password,
	}

  return dispatch => {
    dispatch(authenticationPending(true));
    dispatch(authenticationSuccess(false));
    dispatch(authenticationError(null));

    callAuthenticationApi(data, error => {
      console.log('store: api callback')
      dispatch(authenticationPending(false));
      if (!error) {
        dispatch(authenticationSuccess(true));
        // dispatch(loadUserFromToken())
        // browserHistory.push('/'); 
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

function authenticationPending(signupPending) {
  return {
    type: types.AUTHENTICATION_PENDING,
    authenticationPending
  };
}
 
function authenticationSuccess(signupSuccess) {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    authenticationSuccess
  };
}
 
function authenticationError(signupError) {
  return {
    type: types.AUTHENTICATION_ERROR,
    authenticationError
  }
}