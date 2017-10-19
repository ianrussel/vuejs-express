import './bootstrap.js';

import VueRouterTransition from 'vue-router-transition';
import VueRouter from 'vue-router';
import store from './store/store.js';

import navbar from './components/navbar';
import sidebar from './components/sidebar';
import contents from './components/content';
import footerComponent from './components/footer';
import ThemeColor from './components/themeColor';

import AddVue from './components/code/addVue';
import Code from './components/code/Code';
import Home from './components/code/Home';
import Login from './components/code/login';

/**********************************
social login
**********************************/
//import VueAuthenticate from 'vue-authenticate';

// Vue.use(VueAuthenticate, {
//     baseUrl: 'http://localhost:9000', // Your API domain
//
//     providers: {
//     github: {
//       clientId: '0f99c06fee87610778ef',
//       redirectUri: 'http://localhost:9000/auth/callback' // Your client app URL
//     }
//   }
// })
Vue.use(VueRouter, VueRouterTransition);

const NotFound = { template: '<div>Ariba Ariba Ariba Not Found</div>' }
//const Login = { template: '<div> <h1>Login </h1></div>'}
const routes = [
    { path: '/', component: Home },
    { path: '/addVue', component: AddVue },
    { path: '/:name', component: Code},
    { path: '*', component: NotFound },
    { path: '/users/login', component: Login }
]
const router = new VueRouter({
    mode: 'history',
    routes
});


const vm = new Vue({
    delimiters: ['<tai','tai>'],
    el: "#app",
    router,
    store,
    components: {
		navbar,
		sidebar,
		contents,
		footerComponent,
		ThemeColor
	},
})
console.log(vm, "vm")
