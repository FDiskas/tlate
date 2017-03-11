import React, { Component } from 'react';
import {AppBar, Avatar, FlatButton, IconButton, IconMenu, MenuItem} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import logo from './../../assets/img/logo.svg';

const Logo = () => (
  <span>
    <img src={logo} className="App-logo" alt="logo"/>Late
  </span>
);

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      logged: false,
    };

    this._handleLogout = this._handleLogout.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
  }

  _handleLogout(event) {
    this.setState({logged: false});
  };

  _handleLogin(event) {
    this.setState({logged: true});
  };

  render() {
    return (
      <AppBar
        title={<Logo/>}
        iconElementRight={
          this.state.logged ?
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" onClick={this._handleLogout} />
            </IconMenu>
          :
            <FlatButton label="Login" id="ts-login-btn" onClick={this._handleLogin} />
        }
      >
      </AppBar>
    );
  }

}

export default Header;
