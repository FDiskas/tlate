import React, { Component } from 'react';
import {AppBar, FlatButton, IconButton, IconMenu, MenuItem} from 'material-ui';
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
              <MenuItem primaryText="Sign out" onTouchTap={this.handleLogout} />
            </IconMenu>
          :
            <FlatButton label="Login" onTouchTap={this.handleLogin} />
        }
      >
      </AppBar>
    );
  }

}

export default Header;
