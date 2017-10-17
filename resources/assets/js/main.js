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

Vue.use(VueRouter, VueRouterTransition);

const Home = { template: '<div>Ariba Ariba Ariba</div>' }
const routes = [
    { path: '/', component: Home },
    { path: '/addVue', component: AddVue },
    { path: '/:name', component: Code},
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
