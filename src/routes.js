import {About} from './components/pages/About';
import {Form}  from './components/pages/Form';
import {FirebaseTest}  from './components/pages/FirebaseTest';

export const routes = [{
    path: '/about/',
    component: About
}, {
    path: '/form/',
    component: Form
}, {
    path: '/firebase-test/',
    component: FirebaseTest
}];