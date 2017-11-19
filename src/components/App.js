import React           from 'react';
import {
    Framework7App,
    Statusbar,
    Progressbar
}                      from 'framework7-react';

import {routes}        from 'router';
import LeftPanel       from 'components/LeftPanel';
import RightPanel      from 'components/RightPanel';
import MainViews       from 'components/Main';
import AppPopup        from 'components/Popup';
import AppLoginScreen  from 'components/Login';
import AppActions      from 'components/Actions';

let framework7, currentRoute, appInstance = null;

export const getFramework7 = () => framework7;
export const getCurrentRoute = () => currentRoute;
export const getApp = () => appInstance;

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            popupOpened: false,
            actionsOpened: false,
        };
        this.popup = this.popup.bind(this);
        this.actions = this.actions.bind(this);
        this.loading = this.loading.bind(this);
    }

    loading(loading) {
        this.setState({loading});
    }

    popup(popupOpened) {
        this.setState({popupOpened});
    }

    actions(actionsOpened) {
        this.setState({actionsOpened});
    }

    render() {
        // console.log(this.props, this.state); // eslint-disable-line no-console
        return (
            <Framework7App
                onFramework7Init={f7 => framework7 = f7}
                onRouteChange={route => currentRoute = route}
                themeType="material"
                pushState={true}
                pushStateSeparator={"#!"}
                onPageBeforeInit={(app, page) => console.log('Opening new page (app, page):', app, page)} // eslint-disable-line no-console
                routes={routes}
            >
                <Statusbar/>
                {(this.state.loading) ? <Progressbar infinite color="blue" /> : null}
                <LeftPanel/>
                <RightPanel/>
                <MainViews
                    popup={this.popup}
                    actions={this.actions}
                />
                <AppPopup
                    popup={this.popup}
                    opened={this.state.popupOpened}
                />
                <AppLoginScreen/>
                <AppActions
                    actions={this.actions}
                    opened={this.state.actionsOpened}
                />
            </Framework7App>
        );
    }

}