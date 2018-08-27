import React, { Component } from 'react';

import '../public/Login/Login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import loginLogo from '../public/Login/loginLogo.png';

class Login extends Component {
  render() {
    return (
      <div>
        <div className="login-container">
          <div className="login-logo-container">
            <img className="login-logo" src={loginLogo} alt="login-logo" />
          </div>

          <div className="login-id-container">
            <TextField
              id="login-input-id"
              label="Username"
              type="text"
              margin="normal"
            />
          </div>
          <div className="login-password-container">
            <TextField
              id="login-input-password"
              label="Password"
              type="password"
              margin="normal"
            />
          </div>

          <div className="login-submit-container">
            <Button
              variant="contained"
              color="primary"
            >
            Login
            </Button>
          </div>

        </div>
      </div>
    );
  }
}

export default Login;
