import React, { Component } from 'react';
import { FaBars, FaAddressBook, FaCalendarCheck} from 'react-icons/fa';

import '../public/SideBar/SideBar.css';

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar-container">
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
