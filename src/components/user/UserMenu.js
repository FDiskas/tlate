import React, { Component, PropTypes } from 'react';
import {IconButton, IconMenu, MenuItem} from 'material-ui';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class UserMenu extends Component {
  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" onTouchTap={this.props.handleLogout} />
      </IconMenu>
    );
  }
}

UserMenu.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default UserMenu;

