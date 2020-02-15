import chartdata from './data.js';

export default {
  name: 'virus-funnel',
  props: {
    chartName: '',
    chartStyle: '',
    countData: '',
    countPart: ''
  },
  data() {
    return {
      label: ['确诊病例', '疑似病例', '死亡病例', '治愈病例']
    };
  },
  computed: {
    funnelData() {
      let obj = this.$lodash.cloneDeep(chartdata), arr = [];

      this.countData.forEach(item => {
        arr.push({
          name: item.name,
          value: item[this.countPart[0]]
        });
      });
      obj.option.visualMap = obj.visualMap[this.countPart[0]];
      obj.option.series[0].data = arr;
      obj.option.series[0].name = this.label[this.countPart[1]];
      return obj.option;
    },
    datadetail() {
      return this.options;
    }
  },
  mounted() {},
  methods: {}
};
