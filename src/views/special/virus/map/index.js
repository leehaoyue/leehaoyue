// import chartdata from './data.js';
import chartdata from './data_1.js';

export default {
  name: 'virus-map',
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
    mapData() {
      let arr = [], obj = this.$lodash.cloneDeep(chartdata);

      this.countData.forEach(item => {
        arr.push({
          name: item.name,
          value: item[this.countPart[0]]
        });
      });
      console.log(arr);
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
