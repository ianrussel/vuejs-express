import './bootstrap.js';

<<<<<<< HEAD
import store from './store/store.js';
import router from './router/index.js';
=======
import VueRouterTransition from 'vue-router-transition';
import VueRouter from 'vue-router';
import store from './store/store.js';
>>>>>>> df42bc28df6e66b12b0dfca331d7fb9a552f9987

import navbar from './components/navbar';
import sidebar from './components/sidebar';
import contents from './components/content';
import footerComponent from './components/footer';
import ThemeColor from './components/themeColor';

<<<<<<< HEAD
=======
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

>>>>>>> df42bc28df6e66b12b0dfca331d7fb9a552f9987

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
