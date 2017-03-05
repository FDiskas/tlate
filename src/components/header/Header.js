import React, { Component } from 'react';
import {AppBar} from 'material-ui';

import UserMenu from '../user/UserMenu';
import UserLogin from '../user/UserLogin';

import logo from './../../assets/img/logo.svg';

const Logo = () => (
  <span>
    <img src={logo} className="App-logo" alt="logo"/>Late
  </span>
);

class Header extends Component {

  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  state = {
    logged: true,
  };

  handleLogout(event) {
    this.setState({logged: false});
  };

  handleLogin(event) {
    this.setState({logged: true});
  };

  render() {
    return (
      <AppBar
        title={<Logo/>}
        iconElementRight={this.state.logged ? <UserMenu handleLogout={this.handleLogout} /> : <UserLogin handleLogin={this.handleLogin} />}
      >
      </AppBar>
    );
  }

}

export default Header;
