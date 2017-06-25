import React from 'react';
import App from './App';
import shallow from 'react-test-renderer/shallow';

describe('<App />', () => {
  it('contains 1 <Header /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').length).toBe(1);
  });
});
