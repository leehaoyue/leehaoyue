export default {
  name: 'virus-local',
  data() {
    return {
      cityList: [],
      location: ''
    };
  },
  mounted() {
    this.refresh();
  },
  methods: {
    // 数据刷新
    refresh() {
      this.getCountData();
    },
    // 获取详细数据
    getCountData() {
      this.$message({
        showClose: true,
        customClass: 'refreshMSG',
        message: '正在更新数据'
      });
      this.$axios.getData({
        baseURL: process.env.VUE_APP_WJWVIRUSCOUNT,
        url: '/api/getPositionNew',
        method: 'get'
      }).then(res => {
        this.$set(this, 'cityList', this.treeDeal(res.data.position));
      });
    },
    treeDeal(res) {
      let arr = [];

      if (this.$globalmethod.isEmpty(res)) {
        return null;
      }
      for (let i in res) {
        if (this.$globalmethod.isEmpty(res[i])) {
          arr.push({
            value: i,
            label: i
          });
        } else {
          arr.push({
            value: i,
            label: i,
            children: this.treeDeal(res[i])
          });
        }
      }
      return arr;
    }
  }
};
