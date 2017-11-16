import React from 'react';
import PropTypes from 'prop-types'; // ES6

import {
    Framework7App,
    Statusbar,
    Progressbar
} from 'framework7-react';

import createContainer from 'firestore-react';

import firebase from "firebase";
import "firebase/firestore";

import firebaseConfig from '../config/firebase.config';

firebase.initializeApp(firebaseConfig);

import {routes} from '../routes';

import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import MainViews from '../components/Main';
import AppPopup from '../components/Main';
import AppLoginScreen from '../components/Login';

export const AppBase = (props) => {
    console.log(props); // eslint-disable-line no-console

    if (!props.users.loading) {
        props.users.snapshot.forEach(doc => {
          console.log(doc.data()); // eslint-disable-line no-console
        });
    }

    return (
        <Framework7App themeType="material" routes={routes}>
            <Statusbar/>
            {(props.users.loading) ? <Progressbar infinite color="blue" /> : null}
            <LeftPanel/>
            <RightPanel/>
            <MainViews/>
            <AppPopup/>
            <AppLoginScreen/>
        </Framework7App>
    );
};

AppBase.propTypes = {
    users: PropTypes.object,
};

export const App = createContainer(AppBase, (db) => {
    return {
        users: db.collection('users')
    };
});
