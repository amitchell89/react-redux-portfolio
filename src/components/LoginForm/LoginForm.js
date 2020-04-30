import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { login, signup } from '../../store/actions/Authentication';

function mapStateToProps(state) {
   return {
   }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (password) => {
      dispatch(login(password));
    }
  }
}

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: null,
    };
    this.login = this.login.bind(this);
  } 

  login(e) {
    e.preventDefault();
    let { password } = this.state;
    this.props.login(password);
    this.setState({
      password: ''
    });
  }

  render() {
    const { password } = this.state;

    const {  } = this.props;
 
    return (
      <div className="LoginForm">

        <form name="loginForm" onSubmit={this.login}>
          <div className="formRow">
            <label>Please enter password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Password"
              value={password} 
              onChange={e => this.setState({password: e.target.value})}  
            />
          </div>
          <p>
            <input className="btn btn--primary btn--100" type="submit" value="Login" />
          </p>
        </form>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
