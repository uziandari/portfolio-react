import React, { Component } from 'react'; 

import Nav from '../Nav/index';

import './style';

export default class Contact extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div id="contact-wrapper">
          <h1>Contact</h1>
        </div>
      </div>
    );
  }

}