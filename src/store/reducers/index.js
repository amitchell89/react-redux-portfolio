import { combineReducers, createStore } from 'redux';
import gallery from './gallery';
import mobileNav from './mobileNav';
import modal from './modal';
import projects from './projects';

const reducer = combineReducers({
  gallery,
  modal,
  mobileNav,
  projects
});

const store = createStore(reducer);

export default store;