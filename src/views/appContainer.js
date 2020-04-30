import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import { combineReducers, createStore } from 'redux';
import { connect } from 'react-redux';
import Helmet from "react-helmet";
import Header from '../components/Global/Header';
import Footer from '../components/Global/Footer';
import Modal from '../components/modal';

import { checkForAuthToken } from '../store/actions/Authentication';

function mapStateToProps(state) {
   return {
    modal: state.modal.display,
    mobileNav: state.mobileNav.display
  };
}

function mapDispatchToProps(dispatch) {
  return {
    checkForAuthToken: () => {
      dispatch(checkForAuthToken())
    },
  }
}

class AppContainer extends Component {

  componentWillMount() {
    this.props.checkForAuthToken();
  }

  componentDidMount() {
    // Fade In
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = "opacity 500ms";
      elem.style.opacity = 1;
    });
  }

  componentDidUpdate() {
    let {modal, mobileNav} = this.props;

    if (modal || mobileNav) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }

  render() {
    let modal = null;

    if (this.props.modal) {
      modal = (
        <Modal meta={this.props.route.meta}/>
      );
    }

    return (
      <div>
        <Helmet
          meta={ [
            { property: "og:site_name", content: 'Aaron Mitchell\'s Online Portfolio'},
            { property: "og:type", content: 'website'},
          ] }
        />
        {modal}
        <Header />
        
        <div>
          {this.props.children}
        </div>
  
        <Footer />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
