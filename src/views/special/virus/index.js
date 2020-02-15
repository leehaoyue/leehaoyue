import virusMap from './map/index.vue';
import virusFunnel from './funnel/index.vue';
import virusLocal from './local/index.vue';
import virusLine from './line/index.vue';

export default {
  name: 'virus',
  data() {
    return {
      chartInfo: { // 图表配置
        virusMap: { // 地图
          name: 'virusEchartsMap',
          width: '100%',
          height: '50vh'
        },
        virusFunnel: { // 漏斗图
          name: 'virusEchartsFunnel',
          width: '80vw',
          height: '100vh'
        },
        virusTrend: {
          name: 'virusEchartsTrend',
          width: '90vw',
          height: '40vh'
        }
      },
      wxposition: '', // 当前位置
      ystdata: {}, // 昨日数据
      trendData: [], // 趋势数据
      activePart: 'table', // 选中选项卡
      partList: [{
        label: '国内数据统计',
        name: 'table'
      }, {
        label: '国外数据统计',
        name: 'tableForeign'
      }, {
        label: '天梯图统计',
        name: 'funnel'
      }], // 选项卡
      updateTime: '', // 数据更新时间
      countData: [], // 图表数据(国内)
      countDataForeign: {
        list: [],
        total: {}
      }, // 图表数据(国外)
      countTotal: {}, // 总计数据
      countProps: { // 树形图配置
        children: 'children',
        label: 'name'
      },
      countPart: ['confirm', 'suspect', 'dead', 'heal'], // 确诊、疑似、死亡、治愈（字段名）
      isNews: true, // 新闻true、医院false
      newsHospitalList: {}, // 新闻医院列表
      newsHospitalDrawer: false, // 显示新闻医院列表
      newsHospitalDetialShow: false, // 显示新闻医院详情
      newsHospitalTitle: '', // 新闻医院标题
      newsHospitalLink: '', // 新闻医院链接
      localShow: false, // 是否显示附近小区,
      swiperOption: { // 轮播配置
        loop: false,
        effect: 'coverflow',
        fadeEffect: {
          slideShadows: true,
          shadow: true
        },
        initialSlide: 0,
        autoplay: false,
        observer: true,
        observeParents: true,
        autoplayDisableOnInteraction: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    };
  },
  computed: {
    NHList() { // 新闻、医院列表
      return this.isNews ? this.newsHospitalList.list : this.newsHospitalList.hospital;
    }
  },
  created() {
    this.weShare();
  },
  mounted() {
    this.refresh();
  },
  methods: {
    // 微信分享
    weShare() {
      this.$axios.getData({
        baseURL: process.env.VUE_APP_CROSSDOMAIN,
        url: '/wxconfig',
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          url: encodeURIComponent(window.location.href.split('#')[0])
        }
      }).then(res => {
        this.$globalmethod.weShare({...res.data,
          appId: this.$store.state.weappid,
          appMessage: {
            title: '疫情数据汇总',
            desc: 'Author | 今遇凉猿(LeeHaoyue)',
            link: window.location.href,
            imgUrl: 'http://leehaoyue.com/home/img/logo.png'
          },
          timeLine: {
            title: '疫情数据汇总',
            link: window.location.href,
            imgUrl: 'http://leehaoyue.com/home/img/logo.png'
          },
          shareWeibo: {
            title: '疫情数据汇总',
            desc: 'Author | 今遇凉猿(LeeHaoyue)',
            link: window.location.href,
            imgUrl: 'http://leehaoyue.com/home/img/logo.png'
          }
        }).then(wxres => {
          this.wxposition = wxres;
        });
      });
    },
    // 数据刷新
    refresh() {
      // this.getCountData();
      this.getNewsHospitalData();
      this.getTableDat();
      if (this.$refs.virus) {
        this.$refs.virus.$el.scrollTop = 0;
      }
      if (this.$refs.newsHospital) {
        this.$refs.newsHospital.$el.scrollTop = 0;
      }
    },
    // 获取表格数据
    getTableDat() {
      this.$axios.getData({
        baseURL: process.env.VUE_APP_KKVIRUSCOUNT,
        url: '/rest',
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          format: 'json',
          method: 'Huoshenshan.healingCity',
          mapType: 1
        }
      }).then(res => {
        let count = {}, arr = [], arrForeign = [];

        this.countPart.forEach(item => {
          count[item] = 0;
        });
        arr = this.tableDeal({
          source: res.data.list,
          count: count,
          mapList: ['sure_cnt', 'like_cnt', 'die_cnt', 'cure_cnt']
        });
        this.$set(this, 'countData', arr.list);
        this.$set(this, 'countTotal', arr.total);
        arrForeign = this.tableDeal({
          source: res.data.foreign.list,
          count: count,
          mapList: ['sure_cnt', 'like_cnt', 'die_cnt', 'cure_cnt'],
          name: 'country'
        });
        this.updateTime = this.$globalmethod.timeFilter(res.data.timestamp, 'yyyy-mm-dd/hh:mm');
        this.$set(this, 'countDataForeign', {
          total: {
            confirm: res.data.foreign.info.sure_cnt,
            suspect: res.data.foreign.info.like_cnt,
            dead: res.data.foreign.info.die_cnt,
            heal: res.data.foreign.info.cure_cnt
          },
          list: arrForeign.list
        });
        this.$set(this, 'ystdata', {
          ystconfirm: res.data.yst_sure_cnt,
          ystsuspect: res.data.yst_like_cnt,
          ystdead: res.data.yst_die_cnt,
          ystheal: res.data.yst_cure_cnt
        });
        this.$set(this, 'trendData', res.data.trend);
        this.$message.closeAll();
        this.$message({
          showClose: true,
          customClass: 'refreshMSG',
          message: '更新成功',
          type: 'success'
        });
      });
    },
    // 表格数据处理
    tableDeal({source, count, mapList, name}) {
      let temp = this.$lodash.cloneDeep(source),
        total = count,
        list = [],
        node = {};

      if (Array.isArray(temp)) {
        temp.forEach(item => {
          if (!this.$globalmethod.isEmpty(item.info)) {
            mapList.forEach((data, index) => {
              total[this.countPart[index]] += isNaN(item.info[data])?0:item.info[data];
              node[this.countPart[index]] = isNaN(item.info[data])?0:item.info[data];
            });
            list.push({...node,
              name: item[name||'province'].replace(/省|中国|市|壮族|回族|维吾尔|自治区/g, ''),
              children: this.tableDeal({
                source: item.list,
                count: total,
                mapList: mapList
              })['list']
            });
          } else {
            mapList.forEach((data, index) => {
              node[this.countPart[index]] = isNaN(item[data])?0:item[data];
            });
            list.push({...node,
              name: item[name||'city']
            });
          }
        });
      }
      return { list, total };
    },
    // 打开新闻列表
    openNewsList() {
      this.isNews = true;
      this.newsHospitalDrawer = true;
    },
    // 打开医院列表
    openHospitalList() {
      this.isNews = false;
      this.newsHospitalDrawer = true;
    },
    // 获取新闻医院数据
    getNewsHospitalData() {
      this.$axios.jsonp({
        url: 'https://news.163.com/special/00018IRU/virus_report_data.js',
        name: 'callback',
        callback: 'callback'
      }).then(res => {
        this.$set(this, 'newsHospitalList', res);
      });
    },
    // 查看新闻医院详情
    newsHospitalDetial(info) {
      this.newsHospitalTitle = info.title;
      this.newsHospitalLink = info.link;
      this.newsHospitalDetialShow = true;
    },
    // 打开附近详情
    openLocalMap() {
      this.localShow = true;
    },
    // 获取详细数据
    getCountData() {
      this.$message({
        showClose: true,
        customClass: 'refreshMSG',
        message: '正在更新数据'
      });
      this.$axios.getData({
        baseURL: process.env.VUE_APP_WYVIRUSCOUNT,
        url: '/ug/api/wuhan/app/index/feiyan-data-list',
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          t: new Date().getTime()
        }
      }).then(res => {
        let arr = this.setTreeData({
          source: res.data.data.list,
          id: 'name',
          parentId: 'province',
          children: 'children',
          count: this.countPart
        });

        this.updateTime = this.$globalmethod.timeFilter(res.data.timestamp, 'yyyy-mm-dd/hh:mm');
        this.$set(this, 'countData', arr.list);
        this.$set(this, 'countTotal', arr.total);
        this.$message.closeAll();
        this.$message({
          showClose: true,
          customClass: 'refreshMSG',
          message: '更新成功',
          type: 'success'
        });
      });
    },
    // 详细数据链转树
    setTreeData({source, id, parentId, children, count}) {
      let temp = this.$lodash.cloneDeep(source), list = [], reDuplication = {}, total= {};

      temp.filter(father => {
        let childArr = temp.filter(child => father[parentId] === child[parentId]),
          obj = {}, sum = 0,
          arr = this.$globalmethod.reDuplication(childArr, count[0]).reverse();

        if (!reDuplication[father[parentId]]) {
          count.forEach(item => {
            sum = 0;
            arr.map(val => {
              sum += val[item];
            });
            obj[item] = sum;
          });
          obj[id] = father[parentId];
          obj[children] = arr;
          list.push(obj);
          reDuplication[father[parentId]] = true;
        }
      });
      list = this.$globalmethod.reDuplication(list, count[0]).reverse();
      count.forEach(item => {
        total[item] = 0;
        list.map(val => {
          total[item] += val[item];
        });
      });
      return { list, total };
    }
  },
  components: {
    virusMap,
    virusFunnel,
    virusLocal,
    virusLine
  }
};
