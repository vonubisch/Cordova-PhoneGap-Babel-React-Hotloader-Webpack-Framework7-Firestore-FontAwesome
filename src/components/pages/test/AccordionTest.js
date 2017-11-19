import React from 'react';
import {
    Page,
    Accordion,
    AccordionItem,
    AccordionToggle,
    AccordionContent,
    Navbar
} from 'framework7-react';

export const AccordionTest = () => {
    return (
        <Page>
            <Navbar title="Accordion" backLink="Back" sliding />
            <Accordion>
                <AccordionItem>
                    <AccordionToggle>Item 1</AccordionToggle>
                    <AccordionContent>
                        Item 1 content...
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionToggle>Item 2</AccordionToggle>
                    <AccordionContent>
                        Item 2 content...
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Page>
    );
};