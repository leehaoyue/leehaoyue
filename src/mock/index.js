import Vue from 'vue';

const Mock = require('mockjs');

Vue.prototype.$mock = () => {
  return Mock.mock();
};
