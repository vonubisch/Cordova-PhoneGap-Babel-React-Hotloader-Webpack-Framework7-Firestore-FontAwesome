import React from 'react';
import {
    Page,
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
        backgroundImage: 'url(http://lorempixel.com/400/200/)'
    }
};

export const CardTest = () => (
    <Page>
        <Navbar backLink="Back" title="Card" sliding="sliding" />
        <ContentBlockTitle>
            Minimal card
        </ContentBlockTitle>
        <Card title="Card Title" content="Card Content" footer="Card Footer" />
        <ContentBlockTitle>
            Custom card
        </ContentBlockTitle>
        <Card>
            <CardHeader>Card header content</CardHeader>
            <CardContent>Card content</CardContent>
            <CardFooter>Card footer content</CardFooter>
        </Card>
        <ContentBlockTitle>
            Card with header
        </ContentBlockTitle>
        <Card>
            <CardHeader valign="bottom" className="card-header color-white no-border" style={styles.header}>Card header content</CardHeader>
            <CardContent>Card content</CardContent>
            <CardFooter>Card footer content</CardFooter>
        </Card>
    </Page>
);