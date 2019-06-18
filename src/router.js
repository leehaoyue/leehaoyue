import Vue from 'vue';
import Router from 'vue-router';
import $store from './store';
import $globaldata from '@/global/globalData';
import $globalmethod from '@/global/globalMethod';
// import container from '@/views/container/index.vue';
Vue.use(Router);

const container = () => import(
  /*webpackPrefetch: true*/
  /* webpackChunkName: 'container' */
  '@/views/container/index.vue'),
  router = new Router({
    routes: [{
      path: '/',
      redirect: `/${$globaldata.routerDefault.name}`
    }, {
      path: '*',
      name: $globaldata.routerDefault.name,
      component: container
    }, {
      path: '/container/:main',
      component: container,
      children: [{
        path: 'foreword',
        component: () => import(
          /* webpackPrefetch: true */
          /* webpackChunkName: 'foreword' */
          '@/components/main/foreword/index.vue')
      }, {
        path: 'project',
        component: () => import(
          /* webpackChunkName: 'project' */
          '@/components/main/project/index.vue')
      }, {
        path: 'blog',
        component: () => import(
          /* webpackChunkName: 'blog' */
          '@/components/main/blog/index.vue')
      }, {
        path: 'notes',
        component: () => import(
          /* webpackChunkName: 'notes' */
          '@/components/main/notes/index.vue')
      }]
    }]
  });

router.beforeEach((to, from, next) => {
  if ($globalmethod.isEmpty(from.name) && to.name === $globaldata.routerDefault.name) {
    return next({ path: `/${$globaldata.routerDefault.name}/${$globaldata.routerDefault.params}` });
  }
  $store.commit('routerInfo', {
    name: to.fullPath.split('/')[1],
    params: to.fullPath.split('/')[2]
  });
  next();
});

export default router;