import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

class UserLogin extends Component {
  render() {
    return (
      <FlatButton label="Login" onTouchTap={this.props.handleLogin} />
    );
  }
}

UserLogin.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default UserLogin;
