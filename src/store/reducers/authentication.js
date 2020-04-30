import * as types from '../constants/ActionTypes';

const authentication = (state = false, action) => {
  switch (action.type) {
    case types.AUTHENTICATION_PENDING:
      return {
        ...state,
        // authenticationPending: action.authenticationPending,
        authenticationPending: true,
        authenticationSuccess: false,
        authenticationError: false,
        isAuthenticated: false
      }

    case types.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        // authenticationSuccess: action.authenticationSuccess,
        authenticationPending: false,
        isAuthenticated: true
      }

    case types.AUTHENTICATION_ERROR:
      return {
        ...state,
        // authenticationError: action.authenticationError,
        authenticationPending: false,
        isAuthenticated: false
      }

    case types.SET_DESTINATION_PAGE:
      return {
        ...state,
        destinationPage: action.destination
      }

    default:
      return state;

  }
}

export default authentication;