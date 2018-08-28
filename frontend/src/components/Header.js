import React, { Component } from 'react';
import '../public/Header/Header.css';
import { FaBars } from 'react-icons/fa';
import HeaderLogo from '../public/Header/HeaderLogo.jpg';
import IconA from '../public/Header/a0.png';

const $ = require('jquery');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleHamberger = this.handleHamberger.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    var token = localStorage.getItem('token');

    if(token != null){
      console.log('hello');
    }
    else{
      window.location.href = '/login';
    }
  }

  handleHamberger() {
    $('.sidebar-container').addClass('mobile-sidebar-width');
    $('.sidebar-title').addClass('mobile-sidebar-display');
    $('.sidebar-menu').addClass('mobile-sidebar-display');
    $('.sidebar-cancel').addClass('mobile-sidebar-display');
  }

  handleLogout(){
    localStorage.clear();
    window.location.href = '/login';
  }

  render() {
    return (
      <div>
        <header>
          <div className="header-container">

            <div onClick={this.handleHamberger} className="header-hamberger-menu">
              <FaBars />
            </div>

            <div className="header-logo-container">
              <img className="header-logo" src={HeaderLogo} />
            </div>

            <div className="header-right-menu">
              <div className="header-permission-box">
                <img className="header-permission-icon" src={IconA} />
              </div>

              <div className="header-profile-box">
                <div className="header-profile-box-name">
                  안진용
                </div>
                <div className="header-profile-box-level">
                  System Admin
                </div>
              </div>

              <div onClick={this.handleLogout} className="header-logout-button">
                Logout
              </div>

            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
