import React, { Component } from 'react';

import '../public/Login/Login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import loginLogo from '../public/Login/loginLogo.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginId: '',
      loginPw: '',
    };

    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangePw = this.handleChangePw.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeId(event) {
    this.setState({ loginId: event.target.value });
  }

  handleChangePw(event) {
    this.setState({ loginPw: event.target.value });
  }

  handleSubmit() {
    console.log('this.loginId -> ', this.state.loginId);
    console.log('this.loginPw -> ', this.state.loginPw);
  }

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
              value={this.state.loginId}
              onChange={this.handleChangeId}
            />
          </div>
          <div className="login-password-container">
            <TextField
              id="login-input-password"
              label="Password"
              type="password"
              margin="normal"
              value={this.state.loginPw}
              onChange={this.handleChangePw}
            />
          </div>

          <div className="login-submit-container">
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
            Login
            </Button>
          </div>

        </div>

        <h5>DEBUG -> loginId</h5>
        <h5>{this.state.loginId}</h5>
        <h5>DEBUG -> loginPw</h5>
        <h5>{this.state.loginPw}</h5>
      </div>
    );
  }
}

export default Login;
