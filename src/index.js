// import 'framework7/dist/css/framework7.ios.min.css';
// import 'framework7/dist/css/framework7.ios.colors.min.css';

import 'framework7/dist/css/framework7.material.min.css';
import 'framework7/dist/css/framework7.material.colors.min.css';

import 'font-awesome-webpack';

import 'css/app.css';

import firebase from "firebase";
import "firebase/firestore";

import firebaseConfig from 'config/firebase.config';

firebase.initializeApp(firebaseConfig);

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from 'components/App';

ReactDOM.render(<App />, document.getElementById('root'));