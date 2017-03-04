import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Header from './header/Header';

import './App.css';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
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
