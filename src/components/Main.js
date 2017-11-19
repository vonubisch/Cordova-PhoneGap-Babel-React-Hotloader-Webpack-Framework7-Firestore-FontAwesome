import React           from 'react';
import PropTypes       from 'prop-types';
import {
    View,
    Navbar,
    Pages,
    Page,
    Badge,
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
} from 'framework7-react';
import {routes} from 'routes';

class MainViews extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Views>
                <View id="main-view" navbarThrough="navbarThrough" dynamicNavbar={true} main="main" url="/">
                    {
                        this.context.framework7AppContext.theme.ios
                            ? (<Navbar>
                                <NavLeft>
                                    <Link icon="icon-bars" openPanel="left"/>
                                </NavLeft>
                                <NavCenter sliding="sliding">Framework7</NavCenter>
                                <NavRight>
                                    <Link icon="icon-bars" openPanel="right"/>
                                </NavRight>
                            </Navbar>)
                            : null
                    }
                    <Pages>
                        <Page key={0}>
                            {
                                this.context.framework7AppContext.theme.material
                                    ? (<Navbar>
                                        <NavLeft>
                                            <Link icon="icon-bars" openPanel="left"/>
                                        </NavLeft>
                                        <NavCenter sliding="sliding">Framework7</NavCenter>
                                        <NavRight>
                                            <Link icon="icon-bars" openPanel="right"/>
                                        </NavRight>
                                    </Navbar>)
                                    : null
                            }
                            <ContentBlockTitle>
                                <Icon fa="home" style={{marginRight: 10}}/>
                                Welcome to my App
                            </ContentBlockTitle>
                            <ContentBlock inner="inner">
                                <p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
                            </ContentBlock>
                            <ContentBlockTitle>Route with parameters</ContentBlockTitle>
                            <Button href="/route/1/test/2">View route with <Badge>{JSON.stringify({userId: 1, postId: 2})}</Badge></Button>
                            <ContentBlockTitle>Modals</ContentBlockTitle>
                            <ContentBlock>
                                <GridRow>
                                    <GridCol width={33}>
                                        <Button openPopup="#popup" onClick={() => this.props.popup(true)}>Popup</Button>
                                    </GridCol>
                                    <GridCol width={33}>
                                        <Button onClick={() => this.props.actions(true)}>Actions</Button>
                                    </GridCol>
                                    <GridCol width={33}>
                                        <Button openLoginScreen="#login-screen">Login Screen</Button>
                                    </GridCol>
                                </GridRow>
                            </ContentBlock>
                            <ContentBlockTitle>Routes</ContentBlockTitle>
                            <List>
                                {routes.map((route, i) => <ListItem key={i} link={route.path} title={route.path}/>)}
                            </List>
                        </Page>
                    </Pages>
                </View>
            </Views>
        );
    }
};

MainViews.contextTypes = {
    framework7AppContext: PropTypes.object
};

MainViews.propTypes = {
    users: PropTypes.object,
    loading: PropTypes.func,
    popup: PropTypes.func,
    actions: PropTypes.func,
};

export default MainViews;