import {About} from 'components/pages/About';
import {Form}  from 'components/pages/Form';
import {FirebaseTest}  from 'components/pages/test/FirebaseTest';
import {AccordionTest}  from 'components/pages/test/AccordionTest';
import {CardTest}  from 'components/pages/test/CardTest';
import {ContactListTest}  from 'components/pages/test/ContactListTest';
import {PhotoBrowserTest}  from 'components/pages/test/PhotoBrowserTest';
import {MessagesTest}  from 'components/pages/test/MessagesTest';
import {RouteTest}  from 'components/pages/test/RouteTest';

export const routes = [{
    path: '/route/:userId/test/:postId/',
    component: RouteTest
}, {
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
    path: '/test/card/',
    component: CardTest
}, {
    path: '/test/contactlist/',
    component: ContactListTest
}, {
    path: '/test/photobrowser/',
    component: PhotoBrowserTest
}, {
    path: '/test/messages/',
    component: MessagesTest
}];