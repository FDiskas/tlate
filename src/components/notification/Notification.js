import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Snackbar from 'react-toolbox/lib/snackbar/Snackbar';
import { addNotification } from '../../actions/notificationActions';

class Notification extends Component {
  render() {
    return (
      <Snackbar
        active={true}
        action="Nice"
        label="A new developer started using React Toolbox"
        onClick={this.handleSnackbarClick}
        ref="notification"
        className=""
        type="cancel"
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    notification: state.notification
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addNotification
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
