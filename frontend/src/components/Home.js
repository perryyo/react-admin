import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';
import Content2 from './Content2';

import '../public/Home/Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='home-container'>
          <SideBar />
          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/login" component={Content2} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
