import React from 'react';
import PropTypes from 'prop-types';
import {
    Chip,
    ContentBlock,
    ContentBlockTitle,
    Page,
    Navbar,
} from 'framework7-react';

export const ChipTest = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Chips" sliding="sliding" />
            <ContentBlockTitle>
                Chips
            </ContentBlockTitle>
            <ContentBlock>
                <Chip text="Example Chip" />
            </ContentBlock>
            <ContentBlockTitle>
                Colored chip
            </ContentBlockTitle>
            <ContentBlock>
                <Chip text="Another Chip" bg="red" color="white" />
            </ContentBlock>
            <ContentBlockTitle>
                Media chip
            </ContentBlockTitle>
            <ContentBlock>
                <Chip text="Jane Doe" media='<img src="http://lorempixel.com/100/100/people/9/">' />
            </ContentBlock>
            <ContentBlockTitle>
                Deletable chip
            </ContentBlockTitle>
            <ContentBlock>
                <Chip text="Another Chip" deleteable onDelete={() => {}} />
            </ContentBlock>
            <ContentBlockTitle>
                Deletable chip
            </ContentBlockTitle>
            <ContentBlock>
                <Chip text="Jane Doe" media='<img src="http://lorempixel.com/100/100/people/9/">' media-bg="red" deleteable onDelete={() => {}} />
            </ContentBlock>
        </Page>
    );
};

ChipTest.propTypes = {
    userId: PropTypes.string,
    postId: PropTypes.string,
};