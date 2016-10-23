import React, {Component} from 'react';
import TestComponent from './testComponent';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import Header from './header'
import Gallery from './gallery'
import Contact from './contact'
import About from './about'
import NotFound from './notFound'


class AppContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={AppContainer}>
          <IndexRoute component={Gallery} />
          <Route path='/about' component={About} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}