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
          img: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b",
          link: "project link 1"
        },
        {
          id: "project2",
          name: "ProjectName2",
          desc: "project description 2",
          img: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254",
          link: "project link 2"
        },
        {
          id: "project3",
          name: "ProjectName3",
          desc: "project description 3",
          img: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0",
          link: "project link 3"
        },
        {
          id: "project4",
          name: "ProjectName4",
          desc: "project description 4",
          img: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0",
          link: "project link 4"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div id="works-wrapper">
          <Project projects={this.state.projects} />
        </div>
      </div>
    );
  }

}