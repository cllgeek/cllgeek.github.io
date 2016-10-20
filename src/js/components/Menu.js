import React, { Component } from 'react';
import Nav from './Nav'
import Head from './Head'
import PageContent from './PageContent'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Foot from './Foot'

class Menu extends Component {
  render() {
    return (
    <div>
    <Nav />
    <Head />
    <PageContent />
    <Portfolio />
    <Contact />
    <Foot />
    </div>
    );
  }
};

export default Menu;