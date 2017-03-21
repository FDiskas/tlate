import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import theme from './../../toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Header from './Header';

// TODO: check if it's working correctly. First version should work. check history
it('Check Header snapshot', () => {

  const renderer = ReactTestUtils.createRenderer();
  renderer.render(
      <ThemeProvider theme={theme}>
        <Header leftIcon="menu" />
      </ThemeProvider>
  );
  const result = renderer.getRenderOutput();

  expect(result.type).toBe(Header);
});
