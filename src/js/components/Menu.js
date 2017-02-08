import React, { Component } from 'react';
import Nav from './Nav'
import Head from './Head'
import Foot from './Foot'

class Menu extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Head />
        <Foot />
      </div>
    );
  }
};

export default Menu