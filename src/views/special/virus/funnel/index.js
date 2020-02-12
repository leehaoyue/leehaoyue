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
    return {};
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
      obj.option.series[0].data = arr;
      return obj.option;
    },
    datadetail() {
      return this.options;
    }
  },
  mounted() {},
  methods: {}
};
