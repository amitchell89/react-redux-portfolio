import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { connect } from 'react-redux';
import Helmet from "react-helmet";
import Header from '../components/Global/Header'
import Footer from '../components/Global/Footer'
import Modal from '../components/modal'

function mapStateToProps(state) {
   return {
    modal: state.modal.display
  };
}

class AppContainer extends Component {

  componentDidMount() {
    // Fade In
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = "opacity 500ms";
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
