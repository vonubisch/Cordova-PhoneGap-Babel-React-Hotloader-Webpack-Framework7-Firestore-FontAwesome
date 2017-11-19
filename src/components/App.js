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

let framework7, currentRoute = null;

export const getFramework7 = () => framework7;
export const getCurrentRoute = () => currentRoute;

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            popupOpened: false,
        };
        this.popup = this.popup.bind(this);
    }

    loading(loading) {
        this.setState({loading});
    }

    popup(popupOpened) {
        this.setState({popupOpened});
    }

    render() {
        // console.log(this.props, this.state); // eslint-disable-line no-console
        return (
            <Framework7App
                onFramework7Init={f7 => framework7 = f7}
                onRouteChange={route => currentRoute = route}
                themeType="material"
                routes={routes}
            >
                <Statusbar/>
                {(this.state.loading) ? <Progressbar infinite color="blue" /> : null}
                <LeftPanel/>
                <RightPanel/>
                <MainViews popup={this.popup}/>
                <AppPopup popup={this.popup} opened={this.state.popupOpened}/>
                <AppLoginScreen/>
            </Framework7App>
        );
    }

}