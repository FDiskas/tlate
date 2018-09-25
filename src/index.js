/* eslint-disable */
// @flow

import * as React from 'react';
import { render } from 'react-dom';

// import * as App from '/src/root/App';

const root = document.getElementById('app') || document.createElement('div');
function renderApp() {
  const App = require('/src/root/App').default;
  render(<App />, root);
}

renderApp();

if (module.hot) {
  module.hot.accept('/src/root/App');
}
