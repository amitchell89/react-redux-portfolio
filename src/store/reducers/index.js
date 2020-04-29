import { combineReducers, createStore, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import authentication from './authentication';
import gallery from './gallery';
import mobileNav from './mobileNav';
import modal from './modal';
import projects from './projects';

const reducer = combineReducers({
	authentication,
  gallery,
  modal,
  mobileNav,
  projects
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);
/* eslint-enable */

export default store;