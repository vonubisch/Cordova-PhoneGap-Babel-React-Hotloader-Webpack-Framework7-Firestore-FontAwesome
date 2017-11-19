

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
        <Actions opened={props.opened} close={false}>
            <ActionsGroup>
                <ActionsLabel onClick={close}>Hello</ActionsLabel>
                <ActionsButton onClick={close}>Button 1</ActionsButton>
                <ActionsButton onClick={close}>Button 2</ActionsButton>
            </ActionsGroup>
            <ActionsGroup>
                <ActionsButton color="red" bold="bold" onClick={close}>Cancel</ActionsButton>
            </ActionsGroup>
        </Actions>
    );
};

AppActions.propTypes = {
    opened: PropTypes.bool,
    actions: PropTypes.func,
};

export default AppActions;