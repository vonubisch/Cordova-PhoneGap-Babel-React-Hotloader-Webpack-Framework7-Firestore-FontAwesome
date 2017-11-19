import React     from 'react';
import PropTypes from 'prop-types';
import {
    Panel,
    View,
    Navbar,
    Pages,
    Page,
    ContentBlock,
    ContentBlockTitle,
    List,
    ListItem,
} from 'framework7-react';


const RightPanel = (props, context) => {
    return (
        <Panel right="right" cover="cover">
            <View id="right-panel-view" navbarThrough="navbarThrough" dynamicNavbar={true}>
                {context.framework7AppContext.theme.ios ? <Navbar title="Right Panel" sliding="sliding"/> : null}
                <Pages>
                    <Page key={1}>
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
};

RightPanel.contextTypes = {
    framework7AppContext: PropTypes.object
};

export default RightPanel;