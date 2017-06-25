import React, {Component} from "react";
import PropTypes from 'prop-types';
import Menu from 'react-toolbox/lib/menu/Menu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider';

class MainMenu extends Component {
  render() {
    return (
      <Menu >
        <MenuItem caption="Late" icon="arrow_back" onClick={this.props.onLeftIconClick} />
        <MenuDivider />
        <MenuItem caption="Spaces" icon="view_module" />
        <MenuItem caption="Search" icon="search" disabled={true} />
        <MenuItem caption="Settings" icon="settings" disabled={true} />
        <MenuDivider />
        <MenuItem caption="App Downloads" icon="devices" disabled={true} />
        <MenuDivider />
        <MenuItem caption="Help" icon="help" />
        <MenuItem caption="Send feedback" icon="announcement" />
        <MenuItem caption="About" icon="info" />
      </Menu>
    );
  }
}

MainMenu.propTypes = {
  onLeftIconClick: PropTypes.func.isRequired
};

MainMenu.defaultProps = {};

export default MainMenu;
