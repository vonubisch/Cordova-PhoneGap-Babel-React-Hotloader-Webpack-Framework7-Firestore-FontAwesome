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

export default AppLoginScreen;