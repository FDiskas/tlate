import React, { Component } from 'react';
import firebase from 'firebase';

import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import Input from 'react-toolbox/lib/input/Input';
// import {addNotification} from '../../actions/notificationActions';

class UserMenu extends Component {


  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      email: '',
      password: '',
      loginFormActive: false
    };

    this.actions = [
      { label: "Cancel", onClick: this.toggleLoginForm.bind(this) },
      { label: "Register", onClick: this._handleRegister.bind(this) },
      { label: "Login In", onClick: this._handleLogin.bind(this) }
    ];

    // this._handleLogout = this._handleLogout.bind(this);
    // this._handleLogin = this._handleLogin.bind(this);
    this.toggleLoginForm = this.toggleLoginForm.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
      if (user) {
        // dispatch(addNotification('happy days', 'success'));
        this.setState({ logged: true });
      }
    });
  }

  _handleLogout(event) {
    this.setState({ logged: false });
    firebase.auth().signOut().then(data => {
      console.log('Signed Out', data);
    }, error => {
      console.error('Sign Out Error', error);
    });
  };

  _handleLogin(event) {
    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    ).then(data => {
      console.log('Signed In', data);
      this.setState({ logged: true });
      this.toggleLoginForm();
    }, error => {
      console.error('Sign In Error', error);
    });
  };

  _handleRegister(event) {
    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    ).then(data => {
      console.log('Register success', data);
    }, error => {
      console.log('Register error', error.message);
    });

    /*firebase.auth().(
     this.state.email,
     this.state.password
     ).then(data => {
     console.log('Signed In', data);
     this.setState({logged: true});
     this.toggleLoginForm();
     }, error => {
     console.error('Sign In Error', error);
     });*/
  };

  toggleLoginForm() {
    this.setState({ loginFormActive: !this.state.loginFormActive });
    alert('Want a login form');
  }

  renderLoginForm() {
    return (
      <section>
        <Input type="email" label="Email address" icon="email" value={this.state.email}
               onChange={this.handleFormChange.bind(this, "email")}/>
        <Input type="password" label="Password" name="password" icon="vpn_key" value={this.state.password}
               onChange={this.handleFormChange.bind(this, "password")}/>
      </section>
    )
  }

  handleFormChange = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  handleSelect = (value) => {
    console.log('Option selected', value);
    this.setState({ selected: value });

    if (value === 'signin') {
      this.setState({ loginFormActive: true });
    }

    if (value === 'signout') {
      this._handleLogout();
    }
  };

  renderLoggedInMenu() {
    return (
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
        <MenuItem value="refresh" caption="Refresh" icon="refresh"/>
        <MenuItem value="help" caption="Help & Feedback" icon="help"/>
        <MenuItem value="settings" caption="Settings" icon="settings"/>
        <MenuDivider />
        <MenuItem value="signout" caption="Sign Out" icon="power_settings_new"/>
      </IconMenu>
    );
  }

  renderGuestMenu() {

    return (
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
        <MenuItem value="help" caption="Help & Feedback" icon="help"/>
        <MenuDivider />
        <MenuItem value="signin" caption="Sign In" icon="power_settings_new"/>
        <Dialog
          actions={this.actions}
          active={this.state.loginFormActive}
          onEscKeyDown={this.toggleLoginForm}
          onOverlayClick={this.toggleLoginForm}
          title="Please Login"
          type="small"
        >
          {this.renderLoginForm()}
        </Dialog>
      </IconMenu>
    );
  }

  render() {
    return this.state.logged ? this.renderLoggedInMenu() : this.renderGuestMenu();
  }
}

UserMenu.propTypes = {};
UserMenu.defaultProps = {};

export default UserMenu;
