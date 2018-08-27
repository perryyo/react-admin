import React, { Component } from 'react';
import { FaBars, FaAddressBook, FaCalendarCheck, FaTimes} from 'react-icons/fa';

import '../public/SideBar/SideBar.css';

const $ = require('jquery');

class SideBar extends Component {

  handleCancel() {
    $('.sidebar-container').removeClass("mobile-sidebar-width");
    $('.sidebar-title').removeClass("mobile-sidebar-display");
    $('.sidebar-menu').removeClass("mobile-sidebar-display");
    $('.sidebar-cancel').removeClass("mobile-sidebar-display");
  }

  render() {
    return (
      <div className="sidebar-container">
        <div onClick={this.handleCancel} className="sidebar-cancel">
          <FaTimes />
        </div>
        <div className="sidebar-title">
          Menu
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <div className="sidebar-menu-icon">
              <FaAddressBook />
              </div>
              <div className="sidebar-menu-title">course</div>
            </li>
            <li>
              <FaCalendarCheck />
              <div className="sidebar-menu-title">user</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
