import Vue from 'vue';
import Router from 'vue-router';
import $store from './store';
// import container from '@/views/container/index.vue';
import foreword from '@/components/main/foreword/index.vue';
import project from '@/components/main/project/index.vue';
import blog from '@/components/main/blog/index.vue';
import notes from '@/components/main/notes/index.vue';
Vue.use(Router);

const container = () => import(/* webpackPrefetch: true */ /* webpackChunkName: 'container' */ '@/views/container/index.vue'),
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
        component: foreword
        // component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: 'main' */ '@/components/main/foreword/index.vue')
      }, {
        path: 'project',
        name: 'project',
        component: project
        // component: () => import(/* webpackChunkName: 'main' */ '@/components/main/project/index.vue')
      }, {
        path: 'blog',
        name: 'blog',
        component: blog
        // component: () => import(/* webpackChunkName: 'main' */ '@/components/main/blog/index.vue')
      }, {
        path: 'notes',
        name: 'notes',
        component: notes
        // component: () => import(/* webpackChunkName: 'main' */ '@/components/main/notes/index.vue')
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