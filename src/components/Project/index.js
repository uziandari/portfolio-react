import React, { Component } from 'react';

import './style';

export default class Project extends Component {
	
	render() {
		var projectsNode = this.props.projects.map((project) => 
			<li key={project.id} className="list-col">
				<h3>{project.name}</h3>
				<p className="description">{project.desc}</p>
				<h4>{project.link}</h4>
			</li>
		);

		return (
			<ul id="projects-grid">
				{projectsNode}
			</ul>
		);

	}
}