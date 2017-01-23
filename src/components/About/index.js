import React, { Component } from 'react'; 

import Nav from '../Nav/index';

import './style';

export default class About extends Component {

  render() {
    return (
      <div id="about-wrapper">
        <Nav />
        <h1>About</h1>
      </div>
    );
  }

}