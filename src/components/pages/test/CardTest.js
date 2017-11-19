import React from 'react';
import {
    Page,
    Button,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    ContentBlockTitle,
    Navbar
} from 'framework7-react';

const styles = {
    header: {
        height: '40vw',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(http://lorempixel.com/800/800/)',
    }
};

export const CardTest = () => (
    <Page>
        <Navbar backLink="Back" title="Card" sliding="sliding" />
        <ContentBlockTitle>
            Minimal card
        </ContentBlockTitle>
        <Card content="Card Content" />
        <ContentBlockTitle>
            Card with header and fouter
        </ContentBlockTitle>
        <Card>
            <CardHeader>Card header content</CardHeader>
            <CardContent>Card content</CardContent>
            <CardFooter>Card footer content</CardFooter>
        </Card>
        <ContentBlockTitle>
            Card with image header and actions
        </ContentBlockTitle>
        <Card>
            <CardHeader verticalAlign="bottom" className="card-header color-white no-border" style={styles.header}>
                Card header content
            </CardHeader>
            <CardContent>Card content</CardContent>
            <CardFooter>
                <Button color="blue">Like</Button>
                <Button color="gray">Comments</Button>
                <Button color="gray">Subscribe</Button>
            </CardFooter>
        </Card>
    </Page>
);