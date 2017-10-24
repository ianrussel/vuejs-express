import VueRouter from 'vue-router';

import AddVue from '../components/code/addVue';
import Code from '../components/code/Code';
import Home from '../components/code/Home';
import Google from '../components/code/Google';
Vue.use(VueRouter);

const NotFound = { template: '<div>Ariba Ariba Ariba Not Found</div>' }
//const Google = { template: '<div> <h1>Google </h1></div>'}
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/addVue',
        component: AddVue
        //beforeEnter: Auth.requireAuth
    },
    {
        path: '/puta/:name',
        component: Code
    },
    {
        path: '/google',
        component: Google
    },
    {
        path: '/*',
        component: NotFound
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
