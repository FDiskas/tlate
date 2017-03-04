import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import './App.css';
import logo from './../assets/img/logo.svg';

injectTapEventPlugin();

class App extends Component {

  renderLogo() {
    return <img src={logo} className="App-logo" alt="logo"/>;
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="ⓣ Late">
            {this.renderLogo()}
          </AppBar>
          <div style={{ marginTop: '1em', marginBottom: '1em', marginRight: '1em', marginLeft: '1em' }}>
            <RaisedButton
              href="http://www.material-ui.com/"
              label="Read the Material UI docs"
              icon={<FontIcon className="material-icons">home</FontIcon>}
              fullWidth
              secondary
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
