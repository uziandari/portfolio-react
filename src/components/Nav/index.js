import React, { Component } from 'react';
import { Link } from 'react-router';

import './style';

export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false
    };
  }

  handleResize() {
    this.setState({windowWidth: window.innerWidth});
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  navLinks() {
    return [
      <ul key={9} className="nav">
        <li key={1} className="link-item">
          <Link to="/about">About</Link>
        </li>
        <li key={2} className="link-item">
          <Link to="/projects">Projects</Link>
        </li>
        <li key={3} className="link-item">
          <Link to="/">SteveM</Link>
        </li>
        <li key={4} className="link-item">
          <Link to="/blog">Words</Link>
        </li>
        <li key={5} className="link-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    ];
  }

  renderMobileNav() {
    if(this.state.mobileNavVisible) {
      return this.navLinks();
    }
  }

  handleNavClick() {
    if(!this.state.mobileNavVisible) {
      this.setState({mobileNavVisible: true});
    }
    else {
      this.setState({mobileNavVisible: false});
    }
  }

  renderNav() {
    if(this.state.windowWidth <= 1080) {
      return [
        <div className="mobile-nav">
          <p onClick={this.handleNavClick.bind(this)}><i className="icons">...</i></p>
          {this.renderMobileNav()}
        </div>
      ];
    }
    else {
      return [
        <div key={7} className="nav-menu">
          {this.navLinks()}
        </div>
      ];
    }
  }

  render() {
    return (
      <div className="nav-wrapper">
        {this.renderNav()}
      </div>
    );
  }
}