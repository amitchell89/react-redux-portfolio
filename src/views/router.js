import React, {Component} from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import store from '../store/reducers';
import AppContainer from './appContainer'
import Gallery from './gallery'
import Code from './code'
import About from './about'
import Contact from './contact'
import Terms from './terms'
import Post from './post'
import NotFound from './notFound'

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/*' component={AppContainer}>
            <IndexRoute component={About} />
            <Route path='/gallery(/:set)(/:image)' component={Gallery} />
            <Route path='/code' component={Code} />
            <Route path='/contact' component={Contact} />
            <Route path='/terms' component={Terms} />
            <Route path='/post' component={Post} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </Provider>
    )
  }
}
