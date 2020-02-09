import virusMap from './map/index.vue';

export default {
  name: 'virus',
  data() {
    return {
      name: 'virusEcharts',
      chartStyle: {
        width: '100%',
        height: '50vh'
      },
      updateTime: '',
      countData: [],
      countTotal: {},
      countProps: {
        children: 'children',
        label: 'name'
      },
      countPart: ['confirm', 'suspect', 'dead', 'heal'],
      newsList: [],
      newsdrawer: false,
      newsDetialShow: false,
      newsTitle: '',
      newsLink: ''
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

        console.log(arr);
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
    virusMap
  }
};
