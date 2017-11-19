import React           from 'react';
import {
    Framework7App,
    Statusbar,
    Progressbar
}                      from 'framework7-react';

import {routes}        from 'routes';
import LeftPanel       from 'components/LeftPanel';
import RightPanel      from 'components/RightPanel';
import MainViews       from 'components/Main';
import AppPopup        from 'components/Popup';
import AppLoginScreen  from 'components/Login';


export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            popupOpened: false,
        };
    }

    loading(loading) {
        this.setState({loading});
    }

    render() {
        // console.log(this.props, this.state); // eslint-disable-line no-console
        return (
            <Framework7App themeType="material" routes={routes}>
                <Statusbar/>
                {(this.state.loading) ? <Progressbar infinite color="blue" /> : null}
                <LeftPanel/>
                <RightPanel/>
                <MainViews/>
                <AppPopup opened={this.state.popupOpened}/>
                <AppLoginScreen/>
            </Framework7App>
        );
    }

}