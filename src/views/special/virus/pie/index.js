import chartdata from './data.js';

export default {
  name: 'virus-pie',
  props: {
    chartName: '',
    chartStyle: '',
    countData: '',
    countPart: '',
    pieces: ''
  },
  data() {
    return {
      piecesColor: {
        pieces_c: ['#FFE4E1', '#8B0000'],
        pieces_d: ['#D3D3D3', '#000000'],
        pieces_h: ['#7FFFAA', '#006400']
      }
    };
  },
  computed: {
    pieData() {
      let obj = this.$lodash.cloneDeep(chartdata), arr = this.countData, min = 0, max = 0;

      if (!this.$globalmethod.isEmpty(arr)) {
        arr = arr.sort((a, b) => {
          return b.value - a.value;
        });
        min = arr[0].value;
        max = arr[arr.length-1].value;
      }
      obj.option.visualMap = {
        min: min,
        max: max,
        show: false,
        inRange: {
          calculable: true,
          color: this.piecesColor[this.pieces]
        }
      };
      obj.option.series[0].data = this.countData;
      return obj.option;
    },
    datadetail() {
      return this.options;
    }
  },
  mounted() {},
  methods: {}
};
