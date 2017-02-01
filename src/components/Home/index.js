import React, { Component } from 'react'; 

import Nav from '../Nav/index';

import './style';

export default class Home extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div id="home-wrapper">
          <section id="home-title">
            <div className="col"><h1>TITLE</h1></div>
          </section>
          <section id="home-grid">
            <div className="col">
              <h3>Sub Content 1</h3>
            </div>
            <div className="col">
              <h3>Sub Content 2</h3>
            </div>
          </section>
        </div>
      </div>
    );
  }

}