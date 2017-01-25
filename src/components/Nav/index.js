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
      <ul key={9}>
        <li key={1}>
          <Link to="/about"><i className="nav-item fa fa-user-circle"></i></Link>
        </li>
        <li key={2}>
          <Link to="/projects"><i className="nav-item fa fa-laptop"></i></Link>
        </li>
        <li key={3}>
          <Link to="/"><i className="nav-item fa fa-home"></i></Link>
        </li>
        <li key={4}>
          <Link to="/blog"><i className="nav-item fa fa-pencil"></i></Link>
        </li>
        <li key={5}>
          <Link to="/contact"><i className="nav-item fa fa-commenting"></i></Link>
        </li>
      </ul>
    ];
  }

  mobileNavLinks() {
    return [
      <ul key={9}>
        <li key={1}>
          <Link to="/"><i className="nav-item fa fa-home">  Home</i></Link>
        </li>
        <li key={2}>
          <Link to="/about"><i className="nav-item fa fa-user-circle">  About</i></Link>
        </li>
        <li key={3}>
          <Link to="/projects"><i className="nav-item fa fa-laptop">  Projects</i></Link>
        </li>
        <li key={4}>
          <Link to="/blog"><i className="nav-item fa fa-pencil">  Blog</i></Link>
        </li>
        <li key={5}>
          <Link to="/contact"><i className="nav-item fa fa-commenting">  Contact</i></Link>
        </li>
      </ul>
    ];
  }

  renderMobileNav() {
    if(this.state.mobileNavVisible) {
      return this.mobileNavLinks();
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
    if(this.state.windowWidth <= 900) {
      return (
        <div className="mobile-nav">
          <p onClick={this.handleNavClick.bind(this)}><i className="icons">...</i></p>
          {this.renderMobileNav()}
        </div>
      );
    }
    else {
      return (
        <nav>
          {this.navLinks()}
        </nav>
      );
    }
  }

  render() {
    return (
      <div className="vertical-nav">
        {this.renderNav()}
      </div>
    );
  }
}