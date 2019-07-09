import Vue from 'vue';
import fontawesome from './fontawesome.js';

const Mock = require('mockjs'),
  data = (info) => {
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
          return Mock.Random.csentence();
        }
      }],
      '/blog/card|8': [{
        img: () => {
          return Mock.Random.dataImage('200x80', Mock.Random.cword());
        },
        'icon|1': fontawesome,
        iconColor: () => {
          return Mock.Random.color();
        },
        title: () => {
          return Mock.Random.cword(3, 5);
        },
        content: () => {
          return Mock.Random.cparagraph();
        }
      }]
    })[info];
  };

export default data;
Vue.prototype.$mock = data;
