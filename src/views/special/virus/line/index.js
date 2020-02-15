import chartdata from './data.js';

export default {
  name: 'virus-line',
  props: {
    chartName: '',
    chartStyle: '',
    countData: ''
  },
  data() {
    return {
      label: ['全国确诊', '疑似', '死亡', '治愈', '湖北确诊'],
      color: ['#F56C6C', '#F75A05', '#909399', '#67C23A', '#FA90F7']
    };
  },
  computed: {
    lineData() {
      let obj = this.$lodash.cloneDeep(chartdata),
        arr = this.countData.reverse(),
        xAxis = [],
        yAxis = [[], [], [], [], []],
        label = ['sure_cnt', 'like_cnt', 'die_cnt', 'cure_cnt', 'hubei_sure_cnt'];

      if (!this.$globalmethod.isEmpty(arr)) {
        obj.option.series = [];
        arr.forEach(item => {
          xAxis.push(`${item.day.substring(4, 6)}/${item.day.substring(6)}`);
          label.forEach((data, index) => {
            yAxis[index].push(item[data]);
          });
        });
        yAxis.forEach((item, index) => {
          obj.option.series.push({
            name: this.label[index],
            type: 'line',
            symbol: 'none',
            data: item,
            smooth: true,
            itemStyle: {
              normal: {
                color: this.color[index],
                lineStyle: {
                  color: this.color[index]
                }
              }
            }
          });
        });
      }
      obj.option.xAxis.data = xAxis;
      obj.option.legend.data = this.label;
      obj.option.legend.color = this.color;
      return obj.option;
    },
    datadetail() {
      return this.options;
    }
  },
  mounted() {},
  methods: {}
};
