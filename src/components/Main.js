import React           from 'react';
import PropTypes       from 'prop-types';
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
                            <ContentBlockTitle>Navigation</ContentBlockTitle>
                            <List>
                                <ListItem link="/about/" title="About"/>
                                <ListItem link="/form/" title="Form"/>
                                <ListItem link="/firebase-test/" title="Firebase test"/>
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
                                        <Button openPopup="#popup" onClick={() => this.props.popup(true)}>Popup</Button>
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
    }
};

MainViews.contextTypes = {
    framework7AppContext: PropTypes.object
};

MainViews.propTypes = {
    users: PropTypes.object,
    loading: PropTypes.func,
    popup: PropTypes.func,
};

export default MainViews;