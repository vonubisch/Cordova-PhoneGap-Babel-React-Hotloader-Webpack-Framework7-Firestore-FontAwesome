import {About} from 'components/pages/About';
import {FormTest}  from 'components/pages/test/FormTest';
import {FirebaseTest}  from 'components/pages/test/FirebaseTest';
import {AccordionTest}  from 'components/pages/test/AccordionTest';
import {CardTest}  from 'components/pages/test/CardTest';
import {ContactListTest}  from 'components/pages/test/ContactListTest';
import {PhotoBrowserTest}  from 'components/pages/test/PhotoBrowserTest';
import {MessagesTest}  from 'components/pages/test/MessagesTest';
import {RouteTest}  from 'components/pages/test/RouteTest';
import {SearchTest} from 'components/pages/test/SearchTest';
import {ChipTest} from 'components/pages/test/ChipTest';

export const routes = [{
    path: '/route/:userId/test/:postId/',
    component: RouteTest
}, {
    path: '/about/',
    component: About
}, {
    path: '/form/',
    component: FormTest
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
}, {
    path: '/test/search/',
    component: SearchTest
}, {
    path: '/test/chip/',
    component: ChipTest
}];