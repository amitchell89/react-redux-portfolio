import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import { combineReducers, createStore } from 'redux';
import { connect } from 'react-redux';
import Helmet from "react-helmet";
import Header from '../components/Global/Header';
import Footer from '../components/Global/Footer';
import Modal from '../components/modal';

function mapStateToProps(state) {
   return {
    modal: state.modal.display,
    mobileNav: state.mobileNav.display
  };
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

class AppContainer extends Component {

  componentDidMount() {
    this.scrollToTop()
    this.fadeIn();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.scrollToTop()
    }

    let {modal, mobileNav} = this.props;
    if (modal || mobileNav) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  fadeIn() {
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 0;

    window.requestAnimationFrame(function() {
      elem.style.transition = "opacity 1000ms";
      elem.style.opacity = 1;
    });
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
