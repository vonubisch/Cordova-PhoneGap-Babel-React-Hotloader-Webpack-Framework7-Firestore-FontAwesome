import React           from 'react';
import PropTypes       from 'prop-types'; // ES6
import createContainer from 'firestore-react';
import {
    Framework7App,
    Statusbar,
    Progressbar
}                      from 'framework7-react';

import {routes}        from '../routes';
import LeftPanel       from '../components/LeftPanel';
import RightPanel      from '../components/RightPanel';
import MainViews       from '../components/Main';
import AppPopup        from '../components/Popup';
import AppLoginScreen  from '../components/Login';


class Application extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    componentWillReceiveProps(props) {
        console.log("componentWillReceiveProps", props);
        if (props.users) {
            console.log(props.users.loading);
            this.setState({loading: props.users.loading || false});
            if (!props.users.loading) {
                props.users.snapshot.forEach(doc => {
                    console.log(doc.data()); // eslint-disable-line no-console
                });
            }
        }
    }

    render() {
        console.log(this.props, this.state); // eslint-disable-line no-console
        return (
            <Framework7App themeType="material" routes={routes}>
                <Statusbar/>
                {(this.state.loading) ? <Progressbar infinite color="blue" /> : null}
                <LeftPanel/>
                <RightPanel/>
                <MainViews/>
                <AppPopup/>
                <AppLoginScreen/>
            </Framework7App>
        );
    }

}

Application.propTypes = {
    users: PropTypes.object,
};

export const App = createContainer(Application, (db) => {
    return {
        users: db.collection('users')
    };
});
