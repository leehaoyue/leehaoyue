import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const container = () => import(/* webpackChunkName: "container" */ './views/container/index.vue'),

  router = new Router({
    mode: 'hash',
    routes: [
      {
        path: '',
        redirect: 'container'
      },
      {
        path: '*',
        name: 'container',
        component: container
      },
      {
        path: '/container',
        name: 'container',
        component: container
      }
    ]
  });

export default router