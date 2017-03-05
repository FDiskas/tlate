// import React from 'react';
// import Header from './Header';
// import renderer from 'react-test-renderer';
import {MuiThemeProvider} from 'material-ui';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {shallow} from 'enzyme';

/*
test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <MuiThemeProvider>
      <Header muiTheme={getMuiTheme(darkBaseTheme)} />
    </MuiThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.button.props.onTouchTap();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});*/
/*
test('CheckboxWithLabel changes the text after click', () => {
  // Render a header
  const header = shallow(
      <Header/>
  );

  header.find('button').simulate('change');

  expect(header.text()).toEqual('Sign out');

});*/

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Header from './Header';
import renderer from 'react-test-renderer';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const header = renderer.create(
    <MuiThemeProvider>
      <Header muiTheme={getMuiTheme(darkBaseTheme)} />
    </MuiThemeProvider>
  ).toJSON();

  expect(header).toMatchSnapshot();

});
