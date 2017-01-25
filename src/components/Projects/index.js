import React, { Component } from 'react'; 

import Nav from '../Nav/index';

import './style';

export default class Projects extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div id="projects-wrapper">
          <h1>Projects</h1>
        </div>
      </div>
    );
  }

}