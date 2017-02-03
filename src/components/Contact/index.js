import React, { Component } from 'react'; 

import Nav from '../Nav/index';

import './style';

export default class Contact extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Nav />
        <div id="contact-wrapper">
          <form className='react-form' /*onSubmit={this.handleSubmit}*/>
            <h1>Say Hi!</h1>       
          </form>
        </div>
      </div>
    )
  }


 
}