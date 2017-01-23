import React, { Component } from 'react'; 

import Nav from '../Nav/index';

import './style';

export default class NotFound extends Component {

  render() {
    return (
      <div id="notfound-wrapper">
        <Nav />
        <h1>Not Found</h1>
      </div>
    );
  }

}