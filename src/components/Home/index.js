import React, { Component } from 'react'; 

import Nav from '../Nav/index';

import './style';

export default class Home extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div id="home-wrapper">
          <h1>Hi.</h1>
          <h3>I'm Steve</h3>
        </div>
      </div>
    );
  }

}