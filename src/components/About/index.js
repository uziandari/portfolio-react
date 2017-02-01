import React, { Component } from 'react'; 

import Nav from '../Nav/index';

import './style';

export default class About extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div id="about-wrapper">
          <section id="selfie">
            <div className="col _25">
              <h3>Sub Content 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor sollicitudin sodales. Vestibulum non fermentum quam. Donec nec consectetur ligula, sed ullamcorper lectus. Vivamus id ligula interdum, sagittis quam quis, pharetra lorem. Suspendisse lorem ex, placerat a ligula eget, tempor lobortis justo. Ut vitae velit posuere, ultrices enim at, feugiat nulla. In vitae rutrum mauris. Suspendisse sed ligula libero. Maecenas dolor diam, venenatis ac lectus eu, bibendum tempus elit. Suspendisse molestie turpis non suscipit congue. Ut convallis eget dui sed tincidunt. Cras vel tellus sed felis tincidunt blandit. Nunc a mollis justo</p>
            </div>
            <div className="col">
              <img src="http://placehold.it/300x300" />
            </div>
          </section>
          <section id="about-grid">
            <div className="col">
              <h3>Sub Content 2</h3>
            </div>
          </section>
        </div>
      </div>
    );
  }

}