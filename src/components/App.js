import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {FontIcon, MuiThemeProvider, RaisedButton} from 'material-ui';

import './App.css';
import Header from './header/Header';

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
