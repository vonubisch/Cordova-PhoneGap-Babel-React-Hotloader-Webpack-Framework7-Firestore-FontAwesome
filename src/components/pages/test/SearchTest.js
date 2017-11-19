import React from 'react';
import {
    List,
    ListItem,
    Searchbar,
    Page,
    Navbar,
} from 'framework7-react';

export const SearchTest = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Search" sliding="sliding"/>
            <Searchbar
                cancelLink="Cancel"
                searchList="#search-list"
                // onSearchbarSearch={onSearchFunction}
                // onSearchbarEnable={onEnableFunction}
                // onSearchbarDisable={onDisableFunction}
                // onSearchbarClear={onClearFunction}
            />
            <List className="searchbar-not-found">
                <ListItem title="Nothing found"/>
            </List>
            <List className="searchbar-found" id="search-list">
                {
                    Array.apply(null, Array(100)).map((item, index) => {
                        return (<ListItem key={index} title={`Item ${index + 1}`}/>);
                    })
                }
            </List>
        </Page>
    );
};