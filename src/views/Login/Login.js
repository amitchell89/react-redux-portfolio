import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Helmet from "react-helmet";

import LoginForm from '../../components/LoginForm';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="site_wrapper site_wrapper--main">
          <h1>Login</h1>
          <LoginForm />
        </div>
      </div>
    )
  }
}

