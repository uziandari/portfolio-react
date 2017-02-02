import React, { Component } from 'react';

import './style';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
			mouseOver: false
    };
    this._clickHandler = this._clickHandler.bind(this);
		this._mouseEnter = this._mouseEnter.bind(this);
		this._mouseLeave = this._mouseLeave.bind(this);
	}
  

  _mouseEnter(e) {
		e.preventDefault();
		if (this.state.mouseOver === false) {
			this.setState({
				mouseOver: true
			})
		}
	}

	_mouseLeave(e) {
		e.preventDefault();
		if (this.state.mouseOver === true) {
			this.setState({
				mouseOver: false
			})
		}
	}

	_clickHandler(e) {
		e.preventDefault();
		if (this.state.open === false) {
			this.setState({
				open: true
			});
		} else {
			this.setState({
				open: false
			});
		}
	}


  render() {

    // Modify styles based on state values
		let tileStyle = {};
		let headerStyle = {};
		let zoom = {};
		// When project clicked
		if (this.state.open) {
			tileStyle = {
				width: '50vw',
				height: '50vw',
				position: 'absolute',
				top: '50%',
				left: '50%',
				margin: '0',
				marginTop: '-25vw',
				marginLeft: '-25vw',
				boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
				transform: 'none'
			};
		} else {
			tileStyle = {
				width: '18vw',
				height: '18vw'
			};
		}

    var projectsNode = this.props.projects.map((project) => 
      <div className="project" key={project.id}>
				<img
					onMouseEnter={this._mouseEnter}
					onMouseLeave={this._mouseLeave}
					onClick={this._clickHandler}
					src={project.img}
					alt={project.name}
					style={tileStyle}
				/>
			</div>
      /*
      <li key={project.id} className="list-col">
        <h3>{project.name}</h3>
        <div className="description">{project.desc}</div>
        <p>{project.img}</p>
        <h4>{project.link}</h4>
      </li>
      */
    );

    return (
      <ul id="projects-grid">
        {projectsNode}
      </ul>
    );

  }

  

}