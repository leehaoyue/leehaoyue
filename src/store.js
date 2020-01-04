import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    routerInfo: {},
    sureIE: false
  },
  mutations: {
    routerInfo (state, obj) {
      state.routerInfo = obj;
    },
    sureIE (state, key) {
      state.sureIE = key;
    }
  },
  actions: {

  }
});
