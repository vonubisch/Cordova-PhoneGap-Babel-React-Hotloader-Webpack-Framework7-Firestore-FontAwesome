import React     from 'react';
import PropTypes from 'prop-types';
import {
    ContentBlock,
    ContentBlockTitle,
    List,
    ListItem,
    Page,
    Navbar,
} from 'framework7-react';

export const RouteTest = (props, context) => {
    const route = context.framework7AppContext.getCurrentRoute();
    return (
        <Page>
            <Navbar backLink="Back" title="Route" sliding="sliding" />
            <ContentBlockTitle>
                Passed parameters
            </ContentBlockTitle>
            <List>
                <ListItem title="User ID" badge={props.userId} />
                <ListItem title="Post ID" badge={props.postId} />
            </List>
            <ContentBlockTitle>
                Route object
            </ContentBlockTitle>
            <ContentBlock>
                <List>
                    <ListItem title="Route" badge={JSON.stringify(route.route)} />
                    <ListItem title="Url" badge={route.url} />
                    <ListItem title="Path" badge={route.path} />
                    <ListItem title="User ID" badge={route.params.userId} />
                    <ListItem title="Post ID" badge={route.params.postId} />
                    <ListItem title="Query" badge={JSON.stringify(route.query)} />
                    <ListItem title="Hash" badge={route.hash} />
                </List>
            </ContentBlock>
        </Page>
    );
};

RouteTest.propTypes = {
    userId: PropTypes.string,
    postId: PropTypes.string,
};

RouteTest.contextTypes = {
    framework7AppContext: PropTypes.object
};