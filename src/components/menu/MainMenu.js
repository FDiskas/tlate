import React, {Component, PropTypes} from "react";
import List from "react-toolbox/lib/list/List";
import ListDivider from "react-toolbox/lib/list/ListDivider";
import ListItem from "react-toolbox/lib/list/ListItem";

class MainMenu extends Component {
  render() {
    return (
      <List selectable ripple>
        <ListItem caption="Late" rightIcon="arrow_back" onClick={this.props.onLeftIconClick} />
        <ListDivider />
        <ListItem caption="Spaces" leftIcon="view_module" />
        <ListItem caption="Search" leftIcon="search" disabled={true} />
        <ListItem caption="Settings" leftIcon="settings" disabled={true} />
        <ListDivider />
        <ListItem caption="App Downloads" leftIcon="devices" disabled={true} />
        <ListDivider />
        <ListItem caption="Help" leftIcon="help" />
        <ListItem caption="Send feedback" leftIcon="announcement" />
        <ListItem caption="About" leftIcon="info" />
      </List>
    );
  }
}

MainMenu.propTypes = {
  onLeftIconClick: PropTypes.func.isRequired
};

MainMenu.defaultProps = {};

export default MainMenu;
