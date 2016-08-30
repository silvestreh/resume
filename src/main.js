import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import routes from 'router/routes-map';

Vue.use(VueRouter);

const router = new VueRouter();

router.map(routes);

router.start(App, '#app');
