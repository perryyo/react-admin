import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import SideBar from './SideBar';

import Hello from './Hello';

import '../public/Home/Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-container">
          <SideBar />
          <Hello />
        </div>
      </div>
    );
  }
}

export default Home;
