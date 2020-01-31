import chartdata from './data.js';

export default {
  name: 'virus',
  data() {
    return {
      name: 'virusEcharts',
      chartStyle: {
        width: '100%',
        height: '50vh'
      },
      countData: [],
      countTotal: {},
      countProps: {
        children: 'children',
        label: 'name'
      },
      countPart: ['confirm', 'suspect', 'dead', 'heal']
    };
  },
  computed: {
    mapData() {
      let arr = [], obj = this.$lodash.cloneDeep(chartdata);

      this.countData.forEach(item => {
        arr.push({
          name: item.name,
          value: item[this.countPart[0]]
        });
      });
      obj.option.series[0].data = arr;
      return obj.option;
    }
  },
  mounted() {
    this.getCountData();
    // this.getNewsData();
  },
  methods: {
    // 数据刷新
    refresh() {
      this.getCountData();
    },
    // 获取新闻数据
    getNewsData() {
      this.$axios.getData({
        baseURL: process.env.VUE_APP_WYVIRUSNEWS,
        url: '/special/00018IRU/virus_report_data.js?callback=callback',
        method: 'get'
      }).then(res => {
        console.log(res);
      });
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
  }
};
