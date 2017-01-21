import React, { Component } from 'react'; 
import { Router, Route, browserHistory } from 'react-router'

import Home from '../Home/index'
import About from '../About/index'

import './style.scss';

export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false
    };
  }

  handleResize() {
    this.setState({
      windowWidth: window.innerWidth
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }  
  
  componentWillUnmount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  renderMobileNav() {
    if(this.state.mobileNavVisible) {
      return this.navigationLinks();
    }
  }

  handleNavClick() {
    if(!this.state.mobileNavVisible) {
      this.setState({
        mobileNavVisible: true
      });
    } else {
      this.setState({
        mobileNavVisible: false
      });
    }
  }

  renderNavigation() {
    if(this.state.windowWidth <= 900) {
      return [
        <div key={9} className="mobile-nav">
          <p onClick={this.handleNavClick.bind(this)}><i className="material-icons">view_headline</i></p>
          {this.renderMobileNav()}
        </div>
      ];
    } else {
      return [
        <div key={7} className="nav-menu">
          {this.navigationLinks()}
        </div>
      ];
    }
  }

  navigationLinks() {
    return [
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    ];
  }  

  
  render() {

    return (
      <div className="nav-container">
        <div className="steve-portfolio">
          {this.renderNavigation()}
        </div>
      </div>
    );
  }

} 