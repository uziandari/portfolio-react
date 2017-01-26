import React, { Component } from 'react'; 

import Nav from '../Nav/index';

import './style';

export default class NotFound extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div id="notfound-wrapper">
          <h1>NotFound</h1>
        </div>
      </div>
    );
  }

}