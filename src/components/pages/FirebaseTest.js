import React           from 'react';
import PropTypes       from 'prop-types';
import createContainer from 'firestore-react';
import {
    Page,
    Navbar,
    ContentBlockTitle,
    ContentBlock,
    Progressbar,
    Badge,
} from 'framework7-react';

import {loading} from '../../utils';

export class FirebaseTestBase extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: false,
        };
    }

    componentWillMount() {
        if (this.props.test) {
            loading(this, this.props.test.loading);
        }
    }

    componentWillReceiveProps(props) {
        if (props.test && !props.test.loading) {
            loading(this, props.test.loading);
            props.test.snapshot.forEach(doc => {
                console.log(doc.data()); // eslint-disable-line no-console
            });
        }
    }

    // loading(isLoading) {
    //     this.setState({loading: isLoading || false});
    // }

    render() {
        const {state, props} = this;
        console.log(state, props); // eslint-disable-line no-console
        return (
            <Page>
                {(state.loading) ? <Progressbar infinite color="blue" /> : null}
                <Navbar backLink="Back" title="Firebase Test" sliding="sliding"/>
                <ContentBlockTitle>A simple test of the Firestore/Firebase</ContentBlockTitle>
                <ContentBlock>
                    Configure your <Badge>src/config/firebase.config.js</Badge>.
                </ContentBlock>
                <ContentBlock>
                    In the <Badge>Firebase Console</Badge> create a collection <Badge>test</Badge> and fill it with data.
                </ContentBlock>
                <ContentBlock>
                    Check your console and see live updates of your collection.
                </ContentBlock>
            </Page>
        );
    }
};

FirebaseTestBase.propTypes = {
    test: PropTypes.object,
};

export const FirebaseTest = createContainer(FirebaseTestBase, (db) => {
    return {
        test: db.collection('test')
    };
});

export default FirebaseTest;