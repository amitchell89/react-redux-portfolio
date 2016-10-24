import React, {Component} from 'react';
import TestComponent from './testComponent';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import Header from './header'
import Footer from './footer'
import Gallery from './gallery'
import About from './about'
import Contact from './contact'
import Terms from './terms'
import NotFound from './notFound'
console.log('fire')


class AppContainer extends Component {
  render() {
    return (
      <div className="site_wrapper">
        <Header />
        <div class="content_wrapper">
          {this.props.children}
        </div>
        <Footer />
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
          <Route path='/contact' component={Contact} />
          <Route path='/terms' component={Terms} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}