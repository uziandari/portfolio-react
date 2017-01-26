import React, { Component } from 'react'; 

import Nav from '../Nav/index';

import './style';

export default class Blog extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div id="blog-wrapper">
          <h1>Blog</h1>
        </div>
      </div>
    );
  }

}