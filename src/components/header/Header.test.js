import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';

import theme from './../../toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import * as firebase from "firebase";
import { config as fireBaseConf } from './../../constants/FireBase';

firebase.initializeApp(fireBaseConf);

it('Check Header snapshot', () => {
  const header = renderer.create(
    <ThemeProvider theme={theme}>
      <Header leftIcon="menu" />
    </ThemeProvider>
  ).toJSON();

  expect(header).toMatchSnapshot();

});
