import React, { Component } from 'react'; 

import Nav from '../Nav/index';
import Project from '../Project/index';

import './style';

export default class Works extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: "project1",
          name: "ProjectName1",
          desc: "project description 1",
          img: "project img 1",
          link: "project link 1"
        },
        {
          id: "project2",
          name: "ProjectName2",
          desc: "project description 2",
          img: "project img 2",
          link: "project link 2"
        },
        {
          id: "project3",
          name: "ProjectName3",
          desc: "project description 3",
          img: "project img 3",
          link: "project link 3"
        },
        {
          id: "project4",
          name: "ProjectName4",
          desc: "project description 4",
          img: "project img 4",
          link: "project link 4"
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div id="works-wrapper">
          <h1>Projects</h1>
          <Project projects={this.state.projects} />
        </div>
      </div>
    );
  }

}