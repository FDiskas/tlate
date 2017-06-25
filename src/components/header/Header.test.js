import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

// TODO: check if it's working correctly. First version should work. check history
it('Check Header snapshot', () => {

  // const renderer = ReactTestUtils.createRenderer();
  const result = shallow(
        <Header leftIcon="menu" />
  );
  // const result = renderer.getRenderOutput();

  expect(result.find('.App-header').length).toBe(1);
});
