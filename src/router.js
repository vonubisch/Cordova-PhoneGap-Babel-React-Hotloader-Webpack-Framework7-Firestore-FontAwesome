import {About}            from 'components/pages/About';
import {FormTest}         from 'components/pages/test/FormTest';
import {FirebaseTest}     from 'components/pages/test/FirebaseTest';
import {AccordionTest}    from 'components/pages/test/AccordionTest';
import {CardTest}         from 'components/pages/test/CardTest';
import {ContactListTest}  from 'components/pages/test/ContactListTest';
import {PhotoBrowserTest} from 'components/pages/test/PhotoBrowserTest';
import {MessagesTest}     from 'components/pages/test/MessagesTest';
import {RouteTest}        from 'components/pages/test/RouteTest';
import {SearchTest}       from 'components/pages/test/SearchTest';
import {ChipTest}         from 'components/pages/test/ChipTest';

export const routes = [{
    path: '/route/:userId/test/:postId/',
    custom_property: 'Hello world',
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

export const getRoute = (currentRoute) => {
    if (!currentRoute) {
        return null;
    }
    return routes.filter(route => route.path === currentRoute) || null;
};

export const generateURL = (componentName, parameters = {}) => {
    const routeObject = routes.filter(r => r.component.name === componentName) || false;
    if (!routeObject[0]) {
        return '';
    }
    const currentRoute = routeObject[0];
    if (!parameters) {
        return currentRoute.path;
    }
    let url = currentRoute.path;
    Object.keys(parameters).map(r => url = url.replace(`:${r}`, parameters[r]));
    return url;
};