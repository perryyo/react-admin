import React, { Component } from 'react';

import '../public/Header/Header.css';
import HeaderLogo from '../public/Header/HeaderLogo.png';
import { FaBars } from 'react-icons/fa';
import IconA from '../public/Header/a0.png';

class Header extends Component {
  render() {
    return (
      <div>
          <header>
            <div className='header-container'>

                <div className='header-hamberger-menu'>
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
