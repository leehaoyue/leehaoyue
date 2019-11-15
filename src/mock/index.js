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
      '/project/card': [{
        icon: 'fa fa-line-chart',
        title: '数据可视化（CMS管理平台）',
        content: '所用技术：React、Ant Design、Highcharts、Mock.js、axios等',
        qrcode: '/img/project/vue+threejs.png',
        link: 'https://leehaoyue.github.io/leehaoyue/EMP/vue-threejs/'
      }, {
        icon: 'fa fa-slideshare',
        title: '立体图形化（3D模型操作）',
        content: '所用技术：Vue、Element、three.js、Mock.js、axios等',
        qrcode: '/img/project/react+antd.png',
        link: 'https://leehaoyue.github.io/leehaoyue/EMP/react-antd/'
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
