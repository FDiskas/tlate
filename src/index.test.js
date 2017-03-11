import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import App from './components/App';

describe('index.js', () => {
  it('renders without crashing', () => {
    ReactDOM.render(
      <App />,
      document.createElement('div')
    );
  });

  it('firebase SDK version should be 3.6.10', () => {
    expect(firebase.SDK_VERSION).toBe('3.6.10');
  });
});
