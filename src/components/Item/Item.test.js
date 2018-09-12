// @flow
import * as React from 'react';
import { shallow } from 'enzyme';
import { Item } from './Item';

describe('example', () => {
  const props = {
    item: {
      id: 'test',
      title: 'Test',
      subtitle: 'This is Test',
      description: 'This is realy good test',
      image: 'http://example.com/test.png',
    },
  };
  it('renders', () => {
    const wrapper = shallow(<Item {...props} />);
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
