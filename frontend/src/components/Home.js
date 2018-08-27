import React, { Component } from 'react';

import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';

import '../public/Home/Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='home-container'>
          <SideBar />
          <Content />
        </div>
      </div>
    );
  }
}

export default Home;
