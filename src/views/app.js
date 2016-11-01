import React, {Component} from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import Header from './header'
import Footer from './footer'
import Gallery from './gallery'
import About from './about'
import Contact from './contact'
import Terms from './terms'
import NotFound from './notFound'

import { createStore } from 'redux';
import * as reducers from '../store/reducers';
const reducer = combineReducers(reducers);
const store = createStore(reducer);

import { updatePortfolio } from '../store/actions/UpdatePortfolio';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({
  portfolio: state.portfolio
}))

class AppContainer extends Component {

  testFunction = () => {
    console.log('test function fired')
    store.dispatch(updatePortfolio('Does this work?'));
  }

  render() {
    return (
      <div className="site_wrapper">
        <button onClick={this.testFunction}>click me</button>
        <Header />
        <div className="content_wrapper">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}


class Routes extends Component {

  componentDidMount() {
    let state = store.getState()
    this.setState({ currentPortfolio: state.portfolio.portfolio})
  }

  render() {
    if (!this.state) {
      return null;
    }
    console.log('before', this.state.currentPortfolio)
    return (
      <Router history={browserHistory}>
        <Route path='/' component={AppContainer}>
          <IndexRoute component={Gallery} gallery={this.state.currentPortfolio} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/terms' component={Terms} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
