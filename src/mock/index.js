import fontawesome from './fontawesome.js';

const Mock = require('mockjs'),
  data = (info) => {
    return Mock.mock({
      '/foreword/tabPage': [{
        title: '坚持不懈-全靠鸡汤',
        content: `
          <h4>1、作为一个真正的程序员，首先应该尊重编程，热爱你所写下的程序，他是你的伙伴，而不是工具。</h4>
          <h4>2、程序员可以让步，却不可以退缩，可以羞涩，却不可以软弱，总之，程序员必须是勇敢的。</h4>
          <h4>3、编程是一种单调的生活，因此程序员比普通人需要更多的关怀，更多的友情。</h4>
          <h4>4、程序不是年轻的专利，但是，他属于年轻。</h4>
          <h4>5、没有情调，不懂浪漫，也许这是程序员的一面，但拥有朴实无华的爱是他们的另一面。</h4>
          <h4>6、一个好汉三个帮，程序员同样如此。</h4>
          <h4>7、一个100行的代码调试都可能会让程序员遇到很多挫折，所以，面对挫折，我们永远不能低头。</h4>
          <h4>8、调试完一个动态连接函数，固然值得兴奋，但真正的成功远还在无数个函数之后。</h4>
          <h4>9、程序是我的生命，但我相信爱她甚过爱我的生命。</h4>
          <h4>10、信念和目标，必须永远洋溢在程序员内心。</h4>
          <h4>11、就算我们站在群山之颠，也别忘记雄鹰依旧能从我们头顶飞过。</h4>
          <h4>12、这句话不是很文雅，彻底鄙视那些害怕别人超越自己而拒绝回答别人问题的程序员。</h4>
          <h4>13、如果调试一个程序让你很苦恼，千万不要放弃，成功永远在拐角之后，除非你走到拐角，否则你永远不知道你离他多远，所以，请记住，坚持不懈，直到成功。</h4>
          <h4>14、最累的时候，家人是你最好的归宿。</h4>
          <h4>15、退一步海阔天空，这是一种应有的心境。</h4>
          <h4>16、如果你喜欢底层开发，千万不要勉强自己去搞VC，找到你最真实的想法，程序员最不能忍受的就是万精油。</h4>
          <h4>17、IF（BOOL 学习= =FALSE）BOOL 落后=TRUE；不断的学习，我们才能不断的前进。</h4>
          <h4>18、你的一个程序有时正常有时不正常，而你已经完全遵循编程的规则，为什么？事实上我认为相信只要遵循别人所说就能得到想当然的结果的人其实是个傻瓜。</h4>
          <h4>19、编程中我们会遇到多少挫折？表放弃，沙漠尽头必是绿洲。</h4>
          <h4>20、非优秀的程序员常常把空间和时间消耗殆尽，优秀的程序员则总是有足够的空间和时间去完成编程任务，而且配合近乎完美。</h4>
          <h4>21、我们应该重视团队的精神，一个人作用再大，也不过是一碗水中比较大的一粒水珠而已。</h4>
          <h4>22、无私奉献不是天方夜谭，有时候，我们也可以做到。</h4>
          <h4>23、程序员是值得尊敬的，程序员的双手是魔术师的双手，他们把枯燥无味的代码变成了丰富多彩的软件。</h4>
          <h4>24、你比他好一点，他不会承认你，反而会嫉妒你，只有你比他好很多，他才会承认你，然后还会很崇拜你，所以要做，就一定要比别人做得好很多。</h4>
          <h4>25、对程序员来说大部分的快乐是从解决问题，特别是独立解决问题中获得，而不是从这个CASE有多大，奖金有多少中获得。</h4>
          <h4>26、人呐，眼光放得长远一些，看到的东西也会多一些，生活也就会过得更有意义一点。</h4>
          <h4>27、程序员，他们想的是什么？他们想的永远都是技术，他们崇尚的也永远都是技术。</h4>
          <h4>28、其实你找不到错误不代表错误不存在，同样你看不到技术比你牛的人并不代表世界上没有技术比你牛的人。</h4>
          <h4>29、一个人静静坐在电脑面前写代码的感觉，那是什么感觉？那是武林高手闭关修炼的感觉。</h4>
          <h4>30、程序员中的前辈在谈到一个人学写程序有没有前途时，总是会说：“学程序不光要能吃苦能用功，还得看有没有sense，没sense的人，就是再怎么学，再怎么给他讲效果都不好。”</h4>
          <h4>31、为什么很多人都想成功，但成功的人只是极少数？不是因为成功有多困难，其实成功简单得很，只要你一开始都有计划，并且能一直做下去，总会成功的。关键是如何面对成功，你失败了，起码还有人同情你，而成功了，连得到同情的机会都没有。</h4>
          <h4>32、一匹真正的好马，即使在鞭子的影子下，也能飞奔。</h4>
          <h4>33、如果你没有把握做到，最好就不要承诺，你什么也不承诺，至少别人不会看不起你。</h4>
          <h4>34、一本好书，就像高级武功秘籍一样，哪怕只是从里面领悟到个一招半势，功力提升起来都是惊人的。</h4>
          <h4>35、永不放弃，永不放弃又有两个原则，第一个原则是永不放弃，第二个原则就是：当你想放弃时回头看第一个原则。</h4>
          <h4>36、疯狂的程序员决不是靠狂妄和拼命的程序员，而是能够脚踏实地，持续努力的程序员，一个程序员真正做到这两点，技术上去后，唯一能限制他的只有想象力，到那个时候才算“疯狂的程序员”，这种程序员，才能令对手无比恐惧。</h4>
          <h4>37、硬的怕横的，横的怕不要命的，疯子都是不要命的，所以疯子力量大，程序员只有一种，疯狂的程序员。</h4>
          <h4>38、要么做第一个，要么做最好的一个。</h4>
          <h4>39、理想如果不向现实做一点点屈服，那么理想也将归于尘土。</h4>
          <h4>40、每一个问题都是一把锁，你要相信世界上一定有一把钥匙能打开这把锁，你也能找到这把钥匙。</h4>
          <h4>41、所有的道理都是相通的，我们所做的并非是创造性的工作，所有的问题前人都曾经解决，所以我们更是无所畏惧，更何况我们不只有书店，而且有互联网，动动手脚就能找到需要的资料，我们只要认真研究就够了。所以当遇到困难时，请静下心来慢慢研究，因为只要用心，没有学不会的东西。</h4>
          <h4>42、完美主义者常常因试图努力把一件事做好而放弃对新领域的尝试，从而使做事的机会成本增加，有时回头一看才发现，自己在某件事上，已经花了太多时间，而实际上，暂时的妥协可能并不会影响到最终完美结果的呈现，因为不但知识需要积累，事情之间也总是有关联的。</h4>
          <h4>43、调试完一个动态连接函数，固然值得兴奋，但真正的成功远还在无数个函数之后。</h4>
          <h4>44、“设计是一个发现、问题、而不是发现解决方案的过程” —— Leslie Chicoine</h4>
          <h4>45、“功能说明书里不存在可操作性” —— 37 Signals</h4>
          <h4>46、“过去的代码都是未经测试的代码” —— Michael Feathers</h4>
          <h4>47、“任何傻瓜都能写出计算机可以理解的代码。好的程序员能写出人能读懂的代码” —— Martin Fowler</h4>
          <h4>48、“测试是来表明bug的存在而不是不存在” —— Edsger Dijkstra</h4>
          <h4>49、“简单不先于复杂，而是在复杂之后” —— Alan Perlis</h4>
          <h4>50、“Real developers ship” —— Jeff Attwood</h4>
          <h4>51、“没有绝世神功” —— Frederick Brooks</h4>
          <h4>52、“过去的33年里，我每天早上看着镜子问自己：“今天是我生命的最后一天吗？我是否要去做今天该做的事？”一天一天太多次是“不是”，我知道这需要改变…所有的事情——所有身外的期望，所有的骄傲，所有的对困难和失败的恐惧——这些东西在死亡面前立刻消失的无影无踪，只剩下真正重要的东西。想着自己即将死去，这是让我避免落入担心失去什么的陷阱里的最好的方法。” —— Steve Jobs</h4>
        `
      }, {
        title: '眷恋工作-因为贫穷',
        content: `
          <h3>凿壁偷光（záo bì tōu guāng）</h3>
          <p>《西京杂记》卷二：“匡衡字稚圭，勤学而无烛，邻舍有烛而不逮。衡乃穿壁引其光，以书映光而读之。”</p>
          <h3>囊萤映雪（náng yíng yìng xuě）</h3>
          <p>元·贾仲名《萧淑兰》第一折：“虽无汗马眠霜苦，曾受囊萤映雪劳。”</p>
          <h3>划粥断齑（huà zhōu duàn jī）</h3>
          <p>宋·魏泰《东轩笔录》：“惟煮粟米二升，作粥一器，经宿遂凝，以刀画为四块，早晚取二块，断齑数十茎，酢汁半盂，入少盐，暖而啖之。” </p>
        `
      }],
      '/project/wordClouds|10-20': [{
        'name|1': ['花好约猿', '自猿其说', '开猿节流', '破镜难猿', '功成猿满', '心火燎猿', '左右逢猿', '三朝猿老', '事与猿违', '码首是瞻', '格格不入', '才智非凡-_-||', '魅力超群-_-||', '术业专攻-_-||', '积极主动-_-||', ' 成熟稳重-_-||', '实用主义-_-||', '通力协作-_-||', '善于沟通-_-||', ' 潜力无限-_-||', '远见卓识-_-||'],
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
              <h5>未完待续~</h5>
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
              <h5>未完待续~</h5>
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
              <h5><strong>备注：</strong>个人无资质，因此未发布上线</h5>
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
          icon: 'fa fa-desktop',
          iconColor: Mock.Random.color(),
          title: 'PC钢琴游戏',
          content: `
              <h4>PC钢琴游戏</h4>
              <h5><strong>要用电脑打开</strong>
              <h5>所用技术：jQuery、Bootstrap等</h5>
            `,
          qrcode: '/img/blog/pianogame.png',
          link: 'https://draculablood.gitee.io/leehaoyue/myhome/project/game/html/game.html'
        }, {
          img: Mock.Random.dataImage('200x80', ''),
          icon: 'fa fa-pencil',
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
