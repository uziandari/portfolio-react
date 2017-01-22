import React, { Component } from 'react'; 

import Nav from '../Nav/index';

import './style';

export default class Home extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div id="home-wrapper">
          <h1>Home</h1>
        </div>
      </div>
    );
  }

}