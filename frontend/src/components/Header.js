import React, { Component } from 'react';
import '../public/Header/Header.css';
import { FaBars } from 'react-icons/fa';
import HeaderLogo from '../public/Header/HeaderLogo.png';
import IconA from '../public/Header/a0.png';

const $ = require('jquery');

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  hello() {
    console.log('start -----> ');
    $('.sidebar-container').addClass("mobile-sidebar-width");
    $('.sidebar-title').addClass("mobile-sidebar-display");
    $('.sidebar-menu').addClass("mobile-sidebar-display");
    $('.sidebar-cancel').addClass("mobile-sidebar-display");

    //.addClass( "myClass yourClass" );

    console.log('end -----> ');
  }

  render() {

    return (
      <div>
          <header>
            <div className='header-container'>

                <div onClick={this.hello} className='header-hamberger-menu'>
                    <FaBars />
                </div>

                <div className='header-logo-container'>
                    <img className='header-logo' src={HeaderLogo}/>
                </div>

                <div className='header-right-menu'>
                    <div className='header-permission-box'>
                        <img className='header-permission-icon' src={IconA}/>
                    </div>

                    <div className='header-profile-box'>
                        <div className='header-profile-box-name'>
                            안진용
                        </div>
                        <div className='header-profile-box-level'>
                            System Admin
                        </div>
                    </div>

                    <div className='header-logout-button'>
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
