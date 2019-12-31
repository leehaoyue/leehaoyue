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
        website: 'http://www.huataiinfo.com/',
        project: [{
          banner: '/img/project/metro-banner.jpg',
          title: '上海地铁网络化指挥中心—数据可视化大屏（一期）',
          content: `
            <h5>项目周期：2019年8月-2019年至今</h5>
            <h5>所用技术：Vue、Element、axios/WebSocket、ECharts、公司BI工具等</h5>
            <h5>备注：企业内部项目，无展示地址</h5>
          `,
          qrcode: '',
          link: '',
          introduce: {
            video: ['/img/project/c3screen.mp4']
          }
        }, {
          banner: '/img/project/metro-banner.jpg',
          title: '上海地铁钉钉微应用—任务协作（一期）',
          content: `
            <h5>项目周期：2018年12月-2019年8月</h5>
            <h5>所用技术：Vue、MintUI/Element、axios、dingtalk-jsapi等</h5>
            <h5>备注：企业内部项目，无展示地址</h5>
          `,
          qrcode: '',
          link: ''
        }, {
          banner: '/img/project/metro-banner.jpg',
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
        website: 'http://www.huataiinfo.com/',
        project: [{
          banner: '/img/project/tbs-onestop-banner.jpg',
          title: '中债资信“一站式”分析平台（一期）',
          content: `
            <h5>项目周期：2018年5月-2018年8月</h5>
            <h5>所用技术：Vue、Element、axios、ECharts、UEditor等</h5>
          `,
          qrcode: '/img/project/tbs-onestop.png',
          link: 'http://tbs.chinaratings.com.cn/'
        }, {
          banner: '/img/project/hospital-banner.jpg',
          title: '大医济世、我是大医群公众号',
          content: `
            <h5>项目周期：2018年1月-2018年4月</h5>
            <h5>所用技术：Vue、WeUI/Element、axios、微信JS-SDK等</h5>
            <h5>微信搜索：“大医济世”、“我是大医群”公众号</h5>
          `,
          qrcode: '',
          link: ''
        }, {
          banner: '/img/project/traintravel-banner.png',
          title: '“高铁之旅”APP开发',
          content: `
            <h5>项目周期：2017年10月-2018年1月</h5>
            <h5>所用技术：Vue、AmazeUI/Bootstrap、axios、微信JS-SDK、百度统计Tongji API、百度地图JavaScript API、Mob ShareSDK、UEditor等</h5>
            <h5>应用市场：“高铁之旅”</h5>
          `,
          qrcode: '/img/project/train-travel.png',
          link: 'http://sj.qq.com/myapp/detail.htm?apkName=com.hybt.railtravel'
        }, {
          banner: '/img/project/deer-banner.png',
          title: '套鹿”APP“回音”H5游戏、微信“测试CP值”H5游戏',
          content: `
            <h5>项目周期：2017年7月-2017年9月</h5>
            <h5>所用技术：jQuery、jQuery Mobile/Bootstrap、ajax、JSBridge、微信JS-SDK等</h5>
          `,
          qrcode: '/img/project/deer.png',
          link: 'http://m.downcc.com/d/329321'
        }, {
          banner: '/img/project/hnts-banner.png',
          title: '“华农天时”APP溯源页面',
          content: `
            <h5>项目周期：2016年12月-2017年6月</h5>
            <h5>所用技术：jQuery、jQuery Mobile、Highcharts、ajax、JSBridge等</h5>
          `,
          qrcode: '/img/project/hnts.png',
          link: 'https://m.pc6.com/s/425718'
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
