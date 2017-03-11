import React, { Component } from 'react';

import logo from './../../assets/img/logo.svg';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
// import Button from 'react-toolbox/lib/button/Button';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
// import IconButton from 'react-toolbox/lib/button/IconButton';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider';
import Navigation from 'react-toolbox/lib/navigation/Navigation';

// const Logo = <img src={logo} className="App-logo" alt="logo"/>;
const Logo = () => (
  <span>
    <img src={logo} className="App-logo" alt="logo"/> Late
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

  handleSelect = (value) => {
    console.log('Option selected', value);
    this.setState({ selected: value });
  };

  render() {
    return (
      <AppBar accent className="App-header" scrollHide={true} fixed={true} title={<Logo/>} leftIcon="menu" onLeftIconClick={this.props.onLeftIconClick}>
        <Navigation type="horizontal">
          <IconMenu
            icon="more_vert"
            position="auto"
            iconRipple
            inverse
            menuRipple
            onSelect={this.handleSelect}
            selectable
            selected={this.state.selected}
          >
            <MenuItem value="refresh" caption="Refresh" icon="refresh" />
            <MenuItem value="help" caption="Help & Feedback" icon="help" />
            <MenuItem value="settings" caption="Settings" icon="settings" />
            <MenuDivider />
            <MenuItem value="signout" onClick={this._handleLogout} caption="Sign out" disabled icon="power_settings_new" />
          </IconMenu>
        </Navigation>
      </AppBar>
    );
  }

}

export default Header;
