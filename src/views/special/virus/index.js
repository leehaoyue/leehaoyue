import virusMap from './map/index.vue';
import virusFunnel from './funnel/index.vue';
import virusLocal from './local/index.vue';

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
        }
      },
      activePart: 'table', // 选中选项卡
      partList: [{
        label: '数据表统计',
        name: 'table'
      }, {
        label: '天梯图统计',
        name: 'funnel'
      }], // 选项卡
      updateTime: '', // 数据更新时间
      countData: [], // 图表数据
      countTotal: {}, // 总计数据
      countProps: { // 树形图配置
        children: 'children',
        label: 'name'
      },
      countPart: ['confirm', 'suspect', 'dead', 'heal'], // 确诊、疑似、死亡、治愈（字段名）
      newsList: [], // 新闻列表
      newsdrawer: false, // 显示新闻列表
      newsDetialShow: false, // 显示新闻详情
      newsTitle: '', // 新闻标题
      newsLink: '', // 新闻链接
      localShow: true // 是否显示附近小区
    };
  },
  mounted() {
    this.refresh();
  },
  methods: {
    // 数据刷新
    refresh() {
      this.getCountData();
      this.getNewsData();
      if (this.$refs.virus) {
        this.$refs.virus.$el.scrollTop = 0;
      }
      if (this.$refs.news) {
        this.$refs.news.$el.scrollTop = 0;
      }
    },
    // 打开新闻列表
    openNewsList() {
      this.newsdrawer = true;
    },
    // 获取新闻数据
    getNewsData() {
      this.$axios.jsonp({
        url: 'https://news.163.com/special/00018IRU/virus_report_data.js',
        name: 'callback',
        callback: 'callback'
      }).then(res => {
        this.$set(this, 'newsList', res);
      });
    },
    // 查看新闻详情
    newsDetial(info) {
      this.newsTitle = info.title;
      this.newsLink = info.link;
      this.newsDetialShow = true;
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
        url: '/ug/api/wuhan/app/index/feiyan-data-list?t=' + new Date().getTime(),
        method: 'get'
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
    virusLocal
  }
};
