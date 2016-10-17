import React, { Component } from 'react';
import { Link } from 'react-router';
import NProgress from 'nprogress';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

class Menu extends Component {
  render() {
    return (
      <div id="home">
        <div>
        <Navbar color="faded" light>
        <div className="nav-left">
          <Link to="/" className="logo">首页</Link>
          <Link to="all">全部</Link>
          <Link to="archive">归档</Link>
          <Link to="tags">标签</Link>
        </div>
          <Nav className="pull-xs-right" navbar>
            <NavItem>
              <NavLink href="/about/">about</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/cllgeek">Github</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
      </div>
    );
  }
};

export default Menu;