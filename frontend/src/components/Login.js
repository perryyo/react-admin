import React, { Component } from 'react';

import '../public/Login/Login.css';
import loginLogo from '../public/Login/loginLogo.png';

class Login extends Component {
  render() {
    return (
      <div>
        <div className="login-container">
          <div className="login-logo-container">
            <img className="login-logo" src={loginLogo} alt="login-logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
