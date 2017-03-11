import {MuiThemeProvider} from 'material-ui';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

it('Check Header snapshot', () => {
  const header = renderer.create(
    <MuiThemeProvider>
      <Header muiTheme={getMuiTheme(darkBaseTheme)} />
    </MuiThemeProvider>
  ).toJSON();

  expect(header).toMatchSnapshot();

});
