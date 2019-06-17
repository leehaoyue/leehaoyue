import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    routerInfo: {}
  },
  mutations: {
    routerInfo (state, obj) {
      state.routerInfo = obj;
    }
  },
  actions: {

  }
});
