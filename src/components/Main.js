import React     from 'react';
import PropTypes from 'prop-types';
import {
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
} from 'framework7-react';


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
                    <Page key={0}>
                        {
                            context.framework7AppContext.theme.material
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
                            <Icon fa="home"/>
                            Welcome to my App
                        </ContentBlockTitle>
                        <ContentBlock inner="inner">

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

export default MainViews;
