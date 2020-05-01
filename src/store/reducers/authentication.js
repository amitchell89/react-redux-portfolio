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
        authenticationErrorMessage: null,
        isAuthenticated: false
      }

    case types.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        // authenticationSuccess: action.authenticationSuccess,
        authenticationSuccess: true,
        authenticationPending: false,
        authenticationErrorMessage: null,
        authenticationError: false,
        isAuthenticated: true,

      }

    case types.AUTHENTICATION_ERROR:
      return {
        ...state,
        authenticationSuccess: false,
        authenticationPending: false,
        authenticationError: true,
        authenticationErrorMessage: `Ah ah ah! You didn't say the magic word!`,
        isAuthenticated: false
      }

    case types.AUTHENTICATION_FAIL:
      return {
        ...state,
        authenticationSuccess: false,
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