import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

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
    const payload = {
      email: this.state.loginId,
      password: this.state.loginPw,
    };

    axios.post('http://127.0.0.1:8000/api/hello', { payload })
      .then((res) => {
        if (res.data.token === 'fail') {
          Swal('Login Fail', 'Please check your email and password', 'error');
        } else {
          localStorage.setItem('token', res.data.token);
          this.props.history.push('/');
        }
      });
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
              label="Eamil"
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
      </div>
    );
  }
}

export default Login;
