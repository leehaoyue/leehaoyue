import Vue from 'vue';

const Mock = require('mockjs');

Vue.prototype.$mock = (info) => {
  return Mock.mock({
    '/foreword/tabPage|1': [{
      title: () => {
        return Mock.Random.ctitle();
      },
      content: () => {
        return Mock.Random.cparagraph(50);
      }
    }]
  })[info];
};
