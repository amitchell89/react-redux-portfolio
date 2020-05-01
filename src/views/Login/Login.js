import React, {Component} from 'react';
import { Link } from 'react-router';
import Helmet from "react-helmet";

import LoginForm from '../../components/LoginForm';

export default class Login extends Component {

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="Login">
        <div className="site_wrapper site_wrapper--main">
          <div className="Login__wrapper">
            <p className="Login__return-link"><Link to="/">Return to home</Link></p>
            <h1>Hello stranger! This page is password protected</h1>
            <p>Secret secrets are no fun, but sometimes nessecary. If you would like access to this page, please <Link to="contact">send me a message.</Link></p>
            <div className="Login__form">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

