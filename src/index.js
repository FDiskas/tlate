import React from 'react';
import ReactDOM from 'react-dom';

import './toolbox/theme.css';
import theme from './toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import App from './components/App';
import './assets/styles/index.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';

import * as firebase from "firebase";

import { Provider } from 'react-redux';
import Store from './store';

import { config as fireBaseConf } from './constants/FireBase';

firebase.initializeApp(fireBaseConf);

// TODO: do we need set this to global?
window.firebase = firebase;

ReactDOM.render(
  <Provider store={Store} >
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
