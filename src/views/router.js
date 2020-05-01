import React, {Component} from 'react';
// import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import store from '../store/reducers';
import AppContainer from './appContainer';

import Contact from './Contact';
import Gallery from './Gallery';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import Post from './Post';
import Privacy from './Privacy';
import Terms from './Terms';

import * as meta from '../store/constants/meta_info';

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={AppContainer} meta={meta}>
            <IndexRoute component={Home} meta={meta} />
            <Route path='/gallery(/:set)(/:image)' component={Gallery} meta={meta} />
            <Route path='/contact' component={Contact} meta={meta} />
            <Route path='/terms' component={Terms} meta={meta} />
            <Route path='/privacy' component={Privacy} meta={meta} />
            <Route path='/post' component={Post} />
            <Route path='/login' component={Login} />
            <Route path='*' component={NotFound} meta={meta} />
          </Route>
        </Router>
      </Provider>
    )
  }
}
