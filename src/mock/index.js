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
        company: '上海德拓信息技术股份有限公司',
        period: '2018年9月-至今',
        address: '上海(魔都)',
        website: 'http://www.huataiinfo.com/',
        project: [{
          img: '',
          title: '上海地铁网络化指挥中心—数据可视化大屏（一期）',
          content: `
            <h5>项目周期：2019年8月-2019年至今</h5>
            <h5>所用技术：Vue、Element、axios、ECharts、公司BI工具等</h5>
            <h5>备注：企业内部项目，无展示地址</h5>
          `,
          qrcode: '',
          link: ''
        }, {
          img: '',
          title: '上海地铁钉钉微应用—任务协作（一期）',
          content: `
            <h5>项目周期：2018年12月-2019年8月</h5>
            <h5>所用技术：Vue、MintUI/Element、axios、dingtalk-jsapi等</h5>
            <h5>备注：企业内部项目，无展示地址</h5>
          `,
          qrcode: '',
          link: ''
        }, {
          img: '',
          title: '上海地铁人员效能分析平台（一期）',
          content: `
            <h5>项目周期：2018年9月-2019年5月</h5>
            <h5>所用技术：Vue、iView、axios、ECharts、Mock.js等</h5>
            <h5>备注：企业内部项目，无展示地址</h5>
          `,
          qrcode: '',
          link: ''
        }]
      }, {
        company: '北京华泰科信科技有限公司',
        period: '2016年12月-2018年9月',
        address: '北京(首堵)',
        website: 'http://www.huataiinfo.com/',
        project: [{
          img: '',
          title: '中债资信“一站式”分析平台（一期）',
          content: `
            <h5>项目周期：2018年5月-2018年8月</h5>
            <h5>所用技术：Vue、Element、axios、ECharts、UEditor等</h5>
            <h5>备注：企业内部项目，无展示地址</h5>
          `,
          qrcode: '',
          link: ''
        }]
      }],
      '/blog/list': [{
        icon: 'fa fa-line-chart',
        title: '数据可视化（CMS管理平台）',
        content: '所用技术：React、Ant Design、Highcharts、Mock.js、axios等',
        qrcode: '/img/blog/vue+threejs.png',
        link: 'https://leehaoyue.github.io/leehaoyue/EMP/react-antd/'
      }, {
        icon: 'fa fa-slideshare',
        title: '立体图形化（3D模型操作）',
        content: '所用技术：Vue、Element、three.js、Mock.js、axios等',
        qrcode: '/img/blog/react+antd.png',
        link: 'https://leehaoyue.github.io/leehaoyue/EMP/vue-threejs/'
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
