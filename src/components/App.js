import React from 'react';
import PropTypes from 'prop-types'; // ES6

import {
    Framework7App,
    Statusbar,
    Panel,
    View,
    Navbar,
    Pages,
    Page,
    ContentBlock,
    ContentBlockTitle,
    Icon,
    List,
    ListItem,
    Views,
    NavLeft,
    Link,
    NavCenter,
    NavRight,
    GridRow,
    GridCol,
    Button,
    Popup,
    LoginScreen,
    LoginScreenTitle,
    ListButton,
    ListLabel,
    FormLabel,
    FormInput
} from 'framework7-react';

import createContainer from 'firestore-react';

import firebase from "firebase";
import "firebase/firestore";

import firebaseConfig from '../config/firebase.config';

firebase.initializeApp(firebaseConfig);

import {routes} from '../routes';

const LeftPanel = (props, context) => (
    <Panel left="left" reveal="reveal">
        <View id="left-panel-view" navbarThrough="navbarThrough" dynamicNavbar="true">
            {context.framework7AppContext.theme.ios ? <Navbar title="Left Panel"/> : null}
            <Pages>
                <Page>
                    {context.framework7AppContext.theme.material ? <Navbar title="Left Panel"/> : null}
                    <ContentBlock inner="inner">
                        <p>Left panel content goes here</p>
                    </ContentBlock>
                    <ContentBlockTitle>Load page in panel</ContentBlockTitle>
                    <List>
                        <ListItem link="/about/" title="About"/>
                        <ListItem link="/form/" title="Form"/>
                    </List>
                    <ContentBlockTitle>Load page in main view</ContentBlockTitle>
                    <List>
                        <ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel="linkClosePanel"/>
                        <ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel="linkClosePanel"/>
                    </List>
                </Page>
            </Pages>
        </View>
    </Panel>
);

LeftPanel.contextTypes = {
    framework7AppContext: PropTypes.object
};

const RightPanel = (props, context) => (
    <Panel right="right" cover="cover">
        <View id="right-panel-view" navbarThrough="navbarThrough" dynamicNavbar={true}>
            {context.framework7AppContext.theme.ios ? <Navbar title="Right Panel" sliding="sliding"/> : null}
            <Pages>
                <Page>
                    {context.framework7AppContext.theme.material ? <Navbar title="Right Panel" sliding="sliding"/> : null}
                    <ContentBlock>
                        <p>Right panel content goes here</p>
                    </ContentBlock>
                    <ContentBlockTitle>Load page in panel</ContentBlockTitle>
                    <List>
                        <ListItem link="/about/" title="About"/>
                        <ListItem link="/form/" title="Form"/>
                    </List>
                    <ContentBlockTitle>Load page in main view</ContentBlockTitle>
                    <List>
                        <ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel="linkClosePanel"/>
                        <ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel="linkClosePanel"/>
                    </List>
                </Page>
            </Pages>
        </View>
    </Panel>
);

RightPanel.contextTypes = {
    framework7AppContext: PropTypes.object
};

const MainViews = (props, context) => {
    return (
        <Views>
            <View id="main-view" navbarThrough="navbarThrough" dynamicNavbar={true} main="main" url="/">
                {/* Navbar */}
                {
                    context.framework7AppContext.theme.ios
                        ? (<Navbar>
                            <NavLeft>
                                <Link icon="icon-bars" openPanel="left"/>
                            </NavLeft>
                            <NavCenter sliding="sliding">Framework7!</NavCenter>
                            <NavRight>
                                <Link icon="icon-bars" openPanel="right"/>
                            </NavRight>
                        </Navbar>)
                        : null
                }
                {/* Pages */}
                <Pages>
                    <Page>
                        {
                            context.framework7AppContext.theme.material
                                ? (<Navbar>
                                    <NavLeft>
                                        <Link icon="icon-bars" openPanel="left"/>
                                    </NavLeft>
                                    <NavCenter sliding="sliding">Framework7!</NavCenter>
                                    <NavRight>
                                        <Link icon="icon-bars" openPanel="right"/>
                                    </NavRight>
                                </Navbar>)
                                : null
                        }
                        <ContentBlockTitle>Welcome to my App</ContentBlockTitle>
                        <ContentBlock inner="inner">
                            <Icon fa="home"/>
                            <p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
                        </ContentBlock>
                        <ContentBlockTitle>Navigation</ContentBlockTitle>
                        <List>
                            <ListItem link="/about/" title="About"/>
                            <ListItem link="/form/" title="Form"/>
                        </List>
                        <ContentBlockTitle>Side Panels</ContentBlockTitle>
                        <ContentBlock>
                            <GridRow>
                                <GridCol width={50}>
                                    <Button openPanel="left">Left Panel</Button>
                                </GridCol>
                                <GridCol width={50}>
                                    <Button openPanel="right">Right Panel</Button>
                                </GridCol>
                            </GridRow>
                        </ContentBlock>
                        <ContentBlockTitle>Modals</ContentBlockTitle>
                        <ContentBlock>
                            <GridRow>
                                <GridCol width={50}>
                                    <Button openPopup="#popup">Popup</Button>
                                </GridCol>
                                <GridCol width={50}>
                                    <Button openLoginScreen="#login-screen">Login Screen</Button>
                                </GridCol>
                            </GridRow>
                        </ContentBlock>
                    </Page>
                </Pages>
            </View>
        </Views>
    );
};

MainViews.contextTypes = {
    framework7AppContext: PropTypes.object
};

const AppPopup = () => (
    <Popup id="popup">
        <View navbarFixed="navbarFixed">
            <Pages>
                <Page>
                    <Navbar title="Popup">
                        <NavRight>
                            <Link closePopup="closePopup">Close</Link>
                        </NavRight>
                    </Navbar>
                    <ContentBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</ContentBlock>
                </Page>
            </Pages>
        </View>
    </Popup>
);

const AppLoginScreen = () => (
    <LoginScreen id="login-screen">
        <View>
            <Pages>
                <Page loginScreen="loginScreen">
                    <LoginScreenTitle>Login</LoginScreenTitle>
                    <List form="form">
                        <ListItem>
                            <FormLabel>Username</FormLabel>
                            <FormInput name="username" placeholder="Username" type="text"/>
                        </ListItem>
                        <ListItem>
                            <FormLabel>Password</FormLabel>
                            <FormInput name="password" type="password" placeholder="Password"/>
                        </ListItem>
                    </List>
                    <List>
                        <Button closeLoginScreen="closeLoginScreen" fill big>Button Text</Button>
                        <ListButton title="Sign In" closeLoginScreen="closeLoginScreen"/>
                        <ListLabel>
                            <p>Click Sign In to close Login Screen</p>
                        </ListLabel>
                    </List>
                </Page>
            </Pages>
        </View>
    </LoginScreen>
);

export const AppBase = (props) => {
    console.log(props);

    if (props.users.loading) {
        return <span>Loading</span>;
    }

    props.users.snapshot.forEach(doc => {
      console.log(doc.data());
    });

    return (
        <Framework7App themeType="material" routes={routes}>
            <Statusbar/>
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
