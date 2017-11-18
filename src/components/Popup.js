import React from 'react';
import {
    View,
    Navbar,
    Pages,
    Page,
    ContentBlock,
    Link,
    NavRight,
    Popup,
} from 'framework7-react';

const AppPopup = () => (
    <Popup id="popup">
        <View navbarFixed="navbarFixed">
            <Pages>
                <Page>
                    <Navbar title="Popup">
                        <NavRight>
                            <Link closePopup="closePopup">Close</Link>
                        </NavRight>
                    </Navbar>
                    <ContentBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</ContentBlock>
                </Page>
            </Pages>
        </View>
    </Popup>
);

export default AppPopup;