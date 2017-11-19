

import React from 'react';
import PropTypes from 'prop-types';
import {
    Actions,
    ActionsGroup,
    ActionsLabel,
    ActionsButton,
} from 'framework7-react';

const AppActions = (props) => {
    const close = () => props.actions(false);
    return (
        <Actions opened={props.opened} onActionsClose={close}>
            <ActionsGroup>
                <ActionsLabel>Hello</ActionsLabel>
                <ActionsButton>Button 1</ActionsButton>
                <ActionsButton>Button 2</ActionsButton>
            </ActionsGroup>
            <ActionsGroup>
                <ActionsButton color="red" bold="bold">Cancel</ActionsButton>
            </ActionsGroup>
        </Actions>
    );
};

AppActions.propTypes = {
    opened: PropTypes.bool,
    actions: PropTypes.func,
};

export default AppActions;