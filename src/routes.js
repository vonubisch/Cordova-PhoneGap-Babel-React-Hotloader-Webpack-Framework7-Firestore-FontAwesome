import {About} from 'components/pages/About';
import {Form}  from 'components/pages/Form';
import {FirebaseTest}  from 'components/pages/test/FirebaseTest';
import {AccordionTest}  from 'components/pages/test/AccordionTest';
import {ContactListTest}  from 'components/pages/test/ContactListTest';

export const routes = [{
    path: '/about/',
    component: About
}, {
    path: '/form/',
    component: Form
}, {
    path: '/test/firebase/',
    component: FirebaseTest
}, {
    path: '/test/accordion/',
    component: AccordionTest
}, {
    path: '/test/contactlist/',
    component: ContactListTest
}];