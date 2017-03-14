import React from 'react';
import ReactDOM from 'react-dom';

import './toolbox/theme.css';
import theme from './toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import App from './components/App';
import './assets/styles/index.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';

import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/messaging";
import { Provider } from 'react-redux';
import Store from './store';

const config = {
  apiKey: "AIzaSyChVwFp6hJ8YTDd-7WT52ct-F7nfAJtFS4",
  authDomain: "tlate-700d0.firebaseapp.com",
  databaseURL: "https://tlate-700d0.firebaseio.com",
  storageBucket: "tlate-700d0.appspot.com",
  messagingSenderId: 264784289228
};

firebase.initializeApp(config);

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
