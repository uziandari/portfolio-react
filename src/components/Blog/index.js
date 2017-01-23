import React, { Component } from 'react'; 

import Nav from '../Nav/index';

import './style';

export default class Blog extends Component {

  render() {
    return (
      <div id="blog-wrapper">
        <Nav />
        <h1>Blog</h1>
      </div>
    );
  }

}