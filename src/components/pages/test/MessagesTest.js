import React from 'react';
import {
    Page,
    Message,
    Messages,
    Messagebar,
    Navbar,
} from 'framework7-react';

const data = {
    name: 'Vladimir',
    messages: [
        {
            day: 'Wendesday',
            time: '13:34'
        }, {
            name: 'Vladimir',
            text: 'How are you?',
            label: 'Sent in good mood :)',
            avatar: 'http://lorempixel.com/100/100/people/3',
            date: 'Yesterday 13:34'
        }, {
            name: 'Jane',
            text: 'I\'m good, thank you!',
            type: 'received',
            avatar: 'http://lorempixel.com/100/100/people/9',
            date: 'Yesterday at 13:50'
        }
    ]
};

export class MessagesTest extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: data.name,
            messages: data.messages
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(text, clear) {
        if (text.trim().length === 0)
            return;
        this.setState({
            messages: [{
                name: this.state.name,
                avatar: 'http://lorempixel.com/100/100/people/3',
                text: text,
                date: 'date'
            }]
        });
        clear();
    }


    render() {
        return (
            <Page toolbarFixed="toolbarFixed">
                <Navbar backLink="Back" title="Messages" sliding="sliding"/>
                <Messages>
                    {this.state.messages.map((message, index) => (<Message {...message} key={index} />))}
                </Messages>
                {/* <Messagebar placeholder="Message" sendLink="Send" /> */}
            </Page>
        );
    }
};