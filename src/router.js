import Vue from 'vue';
import Router from 'vue-router';
import $store from './store';
Vue.use(Router);

const container = () => import(
  /* webpackPrefetch: true */
  /* webpackChunkName: 'container' */
  '@/views/container/index.vue'),
  router = new Router({
    routes: [{
      path: '*',
      redirect: '/container/foreword'
    }, {
      path: '/container',
      name: 'container',
      component: container,
      children: [{
        path: 'foreword',
        name: 'foreword',
        component: () => import(
          /* webpackChunkName: 'foreword' */
          '@/components/main/foreword/index.vue')
      }, {
        path: 'project',
        name: 'project',
        component: () => import(
          /* webpackChunkName: 'project' */
          '@/components/main/project/index.vue')
      }, {
        path: 'blog',
        name: 'blog',
        component: () => import(
          /* webpackChunkName: 'blog' */
          '@/components/main/blog/index.vue')
      }, {
        path: 'notes',
        name: 'notes',
        component: () => import(
          /* webpackChunkName: 'notes' */
          '@/components/main/notes/index.vue')
      }]
    }]
  });

router.beforeEach((to, from, next) => {
  $store.commit('routerInfo', {
    name: to.name,
    path: to.path
  });
  next();
});

export default router;