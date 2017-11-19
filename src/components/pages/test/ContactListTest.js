import React from 'react';
import {
    Page,
    List,
    ListGroup,
    ListItem,
    Navbar
} from 'framework7-react';

const contacts = {
    'A': [
        'Aaron',
        'Abbie',
        'Adam',
        'Adele',
        'Agatha',
        'Agnes',
        'Albert',
        'Alexander'
    ],
    'B': [
        'Bailey',
        'Barclay',
        'Bartolo',
        'Bellamy',
        'Belle',
        'Benjamin'
    ],
    'C': [
        'Caiden',
        'Calvin',
        'Candy',
        'Carl',
        'Cherilyn',
        'Chester',
        'Chloe'
    ],
    'V': ['Vladimir']
};

export const ContactListTest = () => (
    <Page>
        <Navbar backLink="Back" title="Contacts" sliding="sliding" />
        <List contacts="contacts">
            {
                Object.keys(contacts).reduce((listGroups, nextGroupName) => {
                    return [
                        ...listGroups,
                        <ListGroup key={nextGroupName}>
                            <ListItem title={nextGroupName} groupTitle="groupTitle"/> {
                                contacts[nextGroupName].map(contactName => {
                                    return <ListItem key={contactName} title={contactName}/>;
                                })
                            }
                        </ListGroup>
                    ];
                }, [])
            }
        </List>
    </Page>
);