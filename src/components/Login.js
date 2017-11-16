import React from 'react';

import {
    View,
    Pages,
    Page,
    List,
    ListItem,
    Button,
    LoginScreen,
    LoginScreenTitle,
    ListButton,
    ListLabel,
    FormLabel,
    FormInput,
} from 'framework7-react';

const AppLoginScreen = () => (
    <LoginScreen id="login-screen">
        <View>
            <Pages key={4}>
                <Page loginScreen="loginScreen">
                    <LoginScreenTitle>Login</LoginScreenTitle>
                    <List form="form">
                        <ListItem key={0}>
                            <FormLabel>Username</FormLabel>
                            <FormInput name="username" placeholder="Username" type="text"/>
                        </ListItem>
                        <ListItem key={1}>
                            <FormLabel>Password</FormLabel>
                            <FormInput name="password" type="password" placeholder="Password"/>
                        </ListItem>
                    </List>
                    <List>
                        <Button key={0} closeLoginScreen="closeLoginScreen" fill big>Button Text</Button>
                        <ListButton key={1} title="Sign In" closeLoginScreen="closeLoginScreen"/>
                        <ListLabel key={2}>
                            <p>Click Sign In to close Login Screen</p>
                        </ListLabel>
                    </List>
                </Page>
            </Pages>
        </View>
    </LoginScreen>
);

export default AppLoginScreen;
