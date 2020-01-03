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
            <h5>所用技术：Vue/vue-cli3/Vuex、Element、axios/WebSocket、Less、ECharts、公司BI工具等</h5>
            <h5>备注：企业内部项目，无展示地址</h5>
          `,
          qrcode: '/img/project/c3screen.png',
          link: '',
          introduce: {
            video: ['/img/project/c3screen.mp4'],
            article: `
              <p><strong>备注：</strong>本视频已在朋友圈及公司公众号中传开</p>
              <p><a href="https://mp.weixin.qq.com/s/tKN4OHPSOPlZEiNnqGJ-MQ" target="_blank"><strong>点击查看公众号原文</strong><a></p>
            `
          }
        }, {
          banner: '/img/project/metro-banner.jpg',
          title: '上海地铁钉钉微应用—任务协作（一期）',
          content: `
            <h5>项目周期：2018年12月-2019年8月</h5>
            <h5>所用技术：Vue/vue-cli2/Vuex、MintUI/Element、axios、Less、dingtalk-jsapi等</h5>
            <h5>备注：企业内部项目，无展示地址</h5>
          `,
          qrcode: '',
          link: '',
          introduce: {
            article: `
              <h4>该项目分为移动端、PC端：</h4>
              <p>主要功能是帮助管理者、执行者工作留痕，任务按劳分配等，为效能分析平台做部分数据支撑。</p>
              <p><strong>移动端：</strong>运行于手机钉钉APP中，使用Vue-cli+MintUI的方式构建，主要涉及到的钉钉功能有免登、发钉等；</p>
              <p><strong>PC端（分为两部分）：</strong>一、运行于PC桌面钉钉应用中，使用Vue-cli+Element的方式构建，是移动端的PC适配；<br/>二、运行于PC端浏览器，使用Vue-cli+Element的方式构建，是该项目的管理平台，对数采的展示及修改等，主要涉及到的钉钉功能有扫码登录等；</p>
            `
          }
        }, {
          banner: '/img/project/metro-banner.jpg',
          title: '上海地铁人员效能分析平台（一期）',
          content: `
            <h5>项目周期：2018年9月-2019年5月</h5>
            <h5>所用技术：Vue/vue-cli2/Vuex、iView、axios、Less、ECharts、Mock.js等</h5>
            <h5>备注：企业内部项目，无展示地址</h5>
          `,
          qrcode: '',
          link: '',
          introduce: {
            article: `
              <h4>该项目运行于PC端浏览器（Google Chrome 62.0.3202.62 以上）：</h4>
              <p>主要功能是帮助企业查看各个层级的管理水平和组织概况, 为各个层级的管理者提供关键信息，辅助他们的决策。为上海地铁申通集团实行“一岗一薪”政策的落地，做数据支撑。</p>
            `
          }
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
            <h5>所用技术：Vue/vue-cli2、Element、axios、Less、ECharts、UEditor等</h5>
          `,
          qrcode: '/img/project/tbs-onestop.png',
          link: 'http://tbs.chinaratings.com.cn/'
        }, {
          banner: '/img/project/hospital-banner.jpg',
          title: '大医济世、我是大医群公众号',
          content: `
            <h5>项目周期：2018年1月-2018年4月</h5>
            <h5>所用技术：Vue/vue-cli2、WeUI/Element、axios、微信JS-SDK等</h5>
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
      '/blog/card': [{
        period: '弱冠而立',
        children: [{
          img: Mock.Random.dataImage('200x80', ''),
          'icon|1': fontawesome,
          iconColor: Mock.Random.color(),
          title: '落叶归根',
          content: `
              <h5>牢记使命，不忘初心</h5>
            `,
          qrcode: '',
          link: ''
        }]
      }, {
        period: '童言稚语',
        children: [{
          img: Mock.Random.dataImage('200x80', ''),
          'icon|1': fontawesome,
          iconColor: Mock.Random.color(),
          title: '鸟择良木',
          content: `
              <h5>只争朝夕，不负韶华</h5>
            `,
          qrcode: '',
          link: ''
        }]
      }, {
        period: '蹒跚学步',
        children: [{
          img: Mock.Random.dataImage('200x80', ''),
          icon: 'fa fa-line-chart',
          iconColor: Mock.Random.color(),
          title: '数据可视化（CMS管理平台）',
          content: `
              <h5>所用技术：React/create-react-app/React-Redux、antd、axios、Mockjs、Less、Highcharts等</h5>
            `,
          qrcode: '/img/blog/vue+threejs.png',
          link: 'https://leehaoyue.github.io/leehaoyue/EMP/react-antd/'
        }, {
          img: Mock.Random.dataImage('200x80', ''),
          icon: 'fa fa-slideshare',
          iconColor: Mock.Random.color(),
          title: '立体图形化（3D模型操作）',
          content: `
              <h5>所用技术：Vue/vue-cli3/Vuex、Element、Threejs、Mockjs、Less等</h5>
            `,
          qrcode: '/img/blog/vue+threejs.png',
          link: 'https://leehaoyue.github.io/leehaoyue/EMP/react-antd/'
        }]
      }, {
        period: '咿呀学语',
        children: [{
          img: Mock.Random.dataImage('200x80', ''),
          icon: 'fa fa-weixin',
          iconColor: Mock.Random.color(),
          title: '微信小游戏',
          content: `
              <h4>皮艾no</h4>
              <h5>开发工具：微信小游戏制作工具</h5>
              <h5><strong>备注：</strong>：个人无资质，因此未发布上线
            `,
          qrcode: '/img/blog/piano.png',
          link: '',
          introduce: {
            video: ['/img/blog/piano.mp4']
          }
        }, {
          img: Mock.Random.dataImage('200x80', ''),
          icon: 'fa fa-weixin',
          iconColor: Mock.Random.color(),
          title: '微信小程序',
          content: `
              <h4>喔咖喱唝</h4>
              <h5>所用技术：WXML/WXS（小程序原生语言） 、weui等</h5>
            `,
          qrcode: '/img/blog/wogaligong.png',
          link: 'https://mp.weixin.qq.com/s/cqy2K6lpYqyX3GTi5k33VA'
        }]
      }, {
        period: '呱呱坠地',
        children: [{
          img: Mock.Random.dataImage('200x80', ''),
          icon: 'fa fa-mobile',
          iconColor: Mock.Random.color(),
          title: '三个手机APP',
          content: `
              <h4>新闻天气资讯、音乐播放器、机器人记事本</h4>
              <h5>所用技术：jQuery、jQuery Mobile、ajax、图灵api、聚合api等</h5>
            `,
          qrcode: '/img/blog/bugapp.png',
          link: 'https://mp.weixin.qq.com/s/mSO8viw9W5CPRSlRkhOt-w'
        }, {
          img: Mock.Random.dataImage('200x80', ''),
          icon: 'fa fa-mobile',
          iconColor: Mock.Random.color(),
          title: 'PC钢琴游戏',
          content: `
              <h4>PC钢琴游戏</h4>
              <h5><strong>要用电脑打开</strong>
              <h5>所用技术：jQuery、Bootstrap等</h5>
            `,
          qrcode: '',
          link: 'https://draculablood.gitee.io/leehaoyue/myhome/project/game/html/game.html'
        }, {
          img: Mock.Random.dataImage('200x80', ''),
          icon: 'fa fa-mobile',
          iconColor: Mock.Random.color(),
          title: '初试总结',
          content: `
              <h4>实践学习记录</h4>
              <h5><strong>年代久远，文件可能缺失</strong></h5>
              <h5>所用技术：jQuery、Bootstrap、ajax等</h5>
            `,
          qrcode: '/img/blog/myhome.png',
          link: 'https://draculablood.gitee.io/leehaoyue/myhome/Lee/html/Lee.html'
        }]
      }]
    })[info];
  };

export default data;
