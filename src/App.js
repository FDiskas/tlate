import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import './App.css';
import './styles/fonts/index.css';
import logo from './logo.svg';

// Load site name from package.json
const siteName = require('../package.json').name;

injectTapEventPlugin();

class App extends Component {

  renderLogo() {
    return <img src={logo} className="App-logo" alt="logo"/>;
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title={siteName}>
            {this.renderLogo()}
          </AppBar>
          <div style={{ marginTop: '1em', marginBottom: '1em', marginRight: '1em', marginLeft: '1em' }}>
            <RaisedButton
              href="http://www.material-ui.com/"
              label="Read the Material UI docs"
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
