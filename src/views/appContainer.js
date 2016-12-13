import React, {Component} from 'react';
import { combineReducers, createStore } from 'redux';
import { connect } from 'react-redux';
import Header from './header'
import Footer from './footer'
import Modal from './modal'

function mapStateToProps(state) {
   return {
    modal: state.modal.display
  };
}

class AppContainer extends Component {

  render() {
    let modal = null;

    if (this.props.modal) {
      modal = (
        <Modal />
      );
    }

    return (
      <div>
        {modal}
        <div className="site_wrapper site_wrapper--main">
          <Header />
          <div className="content_wrapper">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(AppContainer);
