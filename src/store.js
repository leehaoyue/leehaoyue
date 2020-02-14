import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    routerInfo: {},
    sureIE: false,
    weappid: 'wx1cb01d8e53e54960'
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
