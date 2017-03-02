import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './index.css';

import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/messaging";

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
  <App />,
  document.getElementById('root')
);
