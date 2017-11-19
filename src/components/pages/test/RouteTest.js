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

import {getRoute, generateURL} from 'router';

export const RouteTest = (props, context) => {
    const router = context.framework7AppContext.getCurrentRoute();
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
                    <ListItem title="Route" badge={JSON.stringify(router.route)} />
                    <ListItem title="Url" badge={router.url} />
                    <ListItem title="Path" badge={router.path} />
                    <ListItem title="User ID" badge={router.params.userId} />
                    <ListItem title="Post ID" badge={router.params.postId} />
                    <ListItem title="Query" badge={JSON.stringify(router.query)} />
                    <ListItem title="Hash" badge={router.hash} />
                    <ListItem title="Get route by path" badge={JSON.stringify(getRoute(router.route.pagePath))} />
                    <ListItem title="Generate URL" badge={generateURL('RouteTest', {userId: 10, postId: 20})} />
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