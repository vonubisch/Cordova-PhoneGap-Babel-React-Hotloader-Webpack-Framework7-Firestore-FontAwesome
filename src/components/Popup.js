import React     from 'react';
import PropTypes from 'prop-types';
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

const AppPopup = (props) => (
    <Popup id="popup" opened={props.opened}>
        <View navbarFixed="navbarFixed">
            <Pages>
                <Page>
                    <Navbar title="Popup">
                        <NavRight>
                            <Link closePopup="closePopup" onClick={() => props.popup(false)}>Close</Link>
                        </NavRight>
                    </Navbar>
                    <ContentBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</ContentBlock>
                </Page>
            </Pages>
        </View>
    </Popup>
);

AppPopup.propTypes = {
    opened: PropTypes.bool,
    popup: PropTypes.func,
};

export default AppPopup;