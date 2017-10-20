import VueRouter from 'vue-router';

import AddVue from '../components/code/addVue';
import Code from '../components/code/Code';
import Home from '../components/code/Home';
import Login from '../components/code/login';
import Callback from '../components/code/callback';
//import VueRouterTransition from 'vue-router-transition';

Vue.use(VueRouter);

const NotFound = { template: '<div>Ariba Ariba Ariba Not Found</div>' }
//const Login = { template: '<div> <h1>Login </h1></div>'}
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/addVue',
        component: AddVue
    },
    {
        path: '/:name',
        component: Code
    },
    // {
    //     path: '*',
    //     redirect: '/'
    // },
    {
        path: '/users/login',
        component: Login
    },
    {
        path: '/github/callback',
        name: 'Callback',
        //redirect: { name: 'Home'}
        component: Callback
    },
    // {
    //     path: '/callback',
    //     name: 'Callback',
    //     //redirect: { name: 'Home'}
    //     component: Callback
    // }
]
const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
