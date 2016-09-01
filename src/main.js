import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from 'src/app';
import routes from 'routes/routes-map';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    linkActiveClass: 'navigation__nav__item--active',
});

router.map(routes);
router.beforeEach(() => {
    router.app.$refs.menu.hideMenu();
});
router.redirect({
    '/home': '/',
});

router.start(App, '#app');
