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
    }],
    '/project/wordClouds|10-20': [{
      name: () => {
        return Mock.Random.cword(3, 5);
      },
      value: () => {
        return Mock.Random.integer(1, 5);
      }
    }],
    '/project/card|1': [{
      title: () => {
        return Mock.Random.ctitle();
      },
      content: () => {
        return Mock.Random.cparagraph(3);
      }
    }]
  })[info];
};
