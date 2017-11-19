import React from 'react';
import PropTypes from 'prop-types';
import {
    Page,
    Link,
    Navbar
} from 'framework7-react';
// import {getFramework7} from 'components/App';

const photos = [
    {
        url: 'http://lorempixel.com/400/400/nature/1/',
        caption: 'Ants on grass'
    },
    'http://lorempixel.com/600/600/nature/5',
    'http://lorempixel.com/400/400/nature/2/', {
        url: 'http://lorempixel.com/400/400/nature/3/',
        caption: 'Beautiful mountains in Zhangjiajie, China'
    }, {
        url: 'http://lorempixel.com/400/400/nature/4/',
        caption: 'Trees in the Fall'
    }
];

const photoStyle = {
    height: "20vw",
    width: "20%"
};

export class PhotoBrowserTest extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            photos
        };
        context.framework7AppContext.getFramework7(f7 => this.fw7 = f7);
    }

    openPhotoBrowser(index) {
        this.fw7.photoBrowser({
            photos: this.state.photos,
            theme: "light",
            onOpen: this.onOpen,
            onClose: this.onClose
        }).open(index);
    }

    onOpen(index) {
        console.log('Photo Browser opened', index); // eslint-disable-line no-console
    }

    onClose(index) {
        console.log('Photo Browser closed', index); // eslint-disable-line no-console
    }

    getImage(photo) {
        if (typeof photo === 'string') {
            return <img src={photo} style={photoStyle}/>;
        } else if (typeof photo === 'object') {
            return <img src={photo.url} style={photoStyle}/>;
        }
    }

    render() {
        return (
            <Page>
                <Navbar backLink="Back" title="Photo Browser" sliding="sliding"/>
                {this.state.photos.map((photo, index) => {
                    return (
                        <Link key={index} onClick={() => this.openPhotoBrowser(index)}>
                            {this.getImage(photo, index)}
                        </Link>
                    );
                })}
            </Page>
        );
    }
}

PhotoBrowserTest.contextTypes = {
    framework7AppContext: PropTypes.object
};