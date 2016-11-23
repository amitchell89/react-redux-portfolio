import { combineReducers, createStore } from 'redux';
import gallery from './gallery';
import modal from './modal'
import projects from './projects'

const reducer = combineReducers({
  gallery,
  modal,
  projects
});

const store = createStore(reducer);

export default store;