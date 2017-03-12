import React, { Component } from 'react';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';

import logo from './../../assets/img/logo.svg';
import UserMenu from '../menu/UserMenu';

const Logo = () => (
  <span>
    <img src={logo} className="App-logo" alt="logo"/> Late
  </span>
);

class Header extends Component {


  render() {
    return (
      <AppBar accent className="App-header" scrollHide={true} fixed={true} title={<Logo/>} leftIcon="menu" onLeftIconClick={this.props.onLeftIconClick}>
        <Navigation type="horizontal">
          <UserMenu/>
        </Navigation>
      </AppBar>
    );
  }

}

export default Header;
