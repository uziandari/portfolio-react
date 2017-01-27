import React, { Component } from 'react';

import './style';

export default class Project extends Component {

  render() {
    var projectsNode = this.props.projects.map((project) => 
      <div key={project.id}>
        <h3>{project.name}</h3>
        <p>{project.desc}</p>
        <h3>{project.img}</h3>
        <h4>{project.link}</h4>
      </div>
    );

    return (
      <div>
        {projectsNode}
      </div>
    );

  }

  

}