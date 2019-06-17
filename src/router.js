import Vue from 'vue';
import Router from 'vue-router';
import container from '@/views/container/index.vue';
Vue.use(Router);

// const container = () => import(/* webpackChunkName: "container" */ '@/views/container/index.vue'),
const router = new Router({
  'routes': [{
    'path': '',
    'redirect': 'container'
  }, {
    'path': '*',
    'name': 'container',
    'component': container
  }, {
    'path': '/container',
    'name': 'container',
    'component': container
  }]
});

export default router;