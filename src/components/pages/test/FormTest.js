import React from 'react';
import {
    Page,
    Navbar,
    ContentBlockTitle,
    List,
    ListItem,
    FormLabel,
    FormInput,
    Button,
    GridCol,
    GridRow,
    ContentBlock,
    ButtonsSegmented
} from 'framework7-react';

const onChangeHandler = () => {
    //console.log('change');
};

const pStyle = {
    margin: '1em 0'
};

export class FormTest extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            form: {
                name: '',
            },
            birthDate: '2014-04-30',
            radioSelected: 1
        };
    }

    onRadioChange(value) {
        this.setState({
           radioSelected: value
        });
    }

    change(event, field) {
        this.setState({form: {[field]: event.target.value}});
    }
    value(field) {
        return this.state.form[field] || '';
    }

    render() {
        return (
            <Page>
                <Navbar backLink="Back" title="Forms" sliding="sliding"/>

                <ContentBlockTitle>Form</ContentBlockTitle>
                <List form="form">
                    <ListItem>
                        <FormLabel>Name</FormLabel>
                        <FormInput type="text" placeholder="Name" value={this.value('name')} onChange={e => this.change(e, 'name')}/>
                    </ListItem>
                    <ListItem>
                        <FormLabel>Password</FormLabel>
                        <FormInput type="password" placeholder="Password"/>
                    </ListItem>
                    <ListItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormInput type="email" placeholder="E-mail"/>
                    </ListItem>
                    <ListItem>
                        <FormLabel>URL</FormLabel>
                        <FormInput type="url" placeholder="URL"/>
                    </ListItem>
                    <ListItem>
                        <FormLabel>Phone</FormLabel>
                        <FormInput type="tel" placeholder="Phone"/>
                    </ListItem>
                    <ListItem>
                        <FormLabel>Birth date</FormLabel>
                        <FormInput type="date" placeholder="Birth date" value={this.state.birthDate}/>
                    </ListItem>
                    <ListItem>
                        <FormLabel>Date time</FormLabel>
                        <FormInput type="datetime-local"/>
                    </ListItem>
                    <ListItem>
                        <FormLabel>Switch</FormLabel>
                        <FormInput type="switch" onChange={onChangeHandler}/>
                    </ListItem>
                    <ListItem>
                        <FormLabel>Range</FormLabel>
                        <FormInput type="range" min="0" max="100" step="1" value="90"/>
                    </ListItem>
                    <ListItem>
                        <FormLabel>Textarea</FormLabel>
                        <FormInput type="textarea" placeholder="Textarea"/>
                    </ListItem>
                </List>

                <ContentBlockTitle>Form With Floating Labels</ContentBlockTitle>
                <List form="form">
                    <ListItem>
                        <FormLabel floating="floating">Name</FormLabel>
                        <FormInput type="text" placeholder="Name"/>
                    </ListItem>
                    <ListItem>
                        <FormLabel floating="floating">Password</FormLabel>
                        <FormInput type="password" placeholder="Password"/>
                    </ListItem>
                    <ListItem>
                        <FormLabel floating="floating">E-mail</FormLabel>
                        <FormInput type="email" placeholder="E-mail"/>
                    </ListItem>
                </List>

                <ContentBlockTitle>Form Without Labels</ContentBlockTitle>
                <List form="form">
                    <ListItem>
                        <FormInput type="text" placeholder="Name"/>
                    </ListItem>
                    <ListItem>
                        <FormInput type="password" placeholder="Password"/>
                    </ListItem>
                    <ListItem>
                        <FormInput type="email" placeholder="E-mail"/>
                    </ListItem>
                </List>

                <ContentBlockTitle>Checkboxes</ContentBlockTitle>
                <List form="form">
                    {
                        [1, 2, 3].map(n => {
                            return (<ListItem checkbox="checkbox" key={n} name="my-checkbox" value={n} title={`Checkbox ${n}`}/>);
                        })
                    }
                </List>

                <ContentBlockTitle>Radios</ContentBlockTitle>
                <List form="form">
                    {
                        [1, 2, 3].map(n => {
                            return (
                                <ListItem
                                    radio="radio"
                                    key={n}
                                    name="my-radio"
                                    value={this.state.radioSelected}
                                    title={`Radio ${n}`}
                                    onChange={() => {
                                        this.onRadioChange(n);
                                    }}
                                />
                        );
                        })
                    }
                </List>

                <ContentBlockTitle>Buttons</ContentBlockTitle>
                <ContentBlock inner="inner">
                    <Button style={pStyle}>Button</Button>
                    <Button round="round" style={pStyle}>Button Round</Button>
                    <Button fill="fill" style={pStyle}>Button Fill</Button>
                    <ButtonsSegmented style={pStyle}>
                        <Button round="round" active="active">Button 1</Button>
                        <Button round="round">Button 2</Button>
                        <Button round="round">Button 3</Button>
                    </ButtonsSegmented>
                    <ButtonsSegmented color="orange" style={pStyle}>
                        <Button round="round" big="big">Button 1</Button>
                        <Button round="round" big="big" active="active">Button 2</Button>
                        <Button round="round" big="big">Button 3</Button>
                    </ButtonsSegmented>
                    <GridRow style={pStyle}>
                        <GridCol>
                            <Button big="big" fill="fill" color="green">Send</Button>
                        </GridCol>
                        <GridCol>
                            <Button big="big" fill="fill" color="red">Delete</Button>
                        </GridCol>
                    </GridRow>
                    <GridRow style={pStyle}>
                        <GridCol>
                            <Button fill="fill" raised="raised" color="green">Raised</Button>
                        </GridCol>
                        <GridCol>
                            <Button raised="raised" color="red">Raised</Button>
                        </GridCol>
                        <GridCol>
                            <Button fill="fill" raised="raised" color="pink">Raised</Button>
                        </GridCol>
                    </GridRow>
                </ContentBlock>
            </Page>
        );
    }
};