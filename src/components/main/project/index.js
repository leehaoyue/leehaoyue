import data from './data.js';

export default {
  name: 'project',
  data() {
    return {
      index: 0,
      animals: data.animals,
      options: data.option,
      chartStyle: {
        width: '100vw',
        height: '40vh',
        background: '#fff'
      },
      myChart: '',
      loop: () => {}
    };
  },
  mounted() {
    clearInterval(this.loop);
    this.drawLine();
    window.addEventListener('resize', () => {
      this.myChart.resize();
    });
  },
  methods: {
    drawLine() {
      let that = this;

      that.myChart = that.$echarts.init(that.$refs.myChart);
      that.myChart.setOption(that.options);
      that.options.series[0].symbolSize = 6;
      this.loop = setInterval(() => {
        if (that.index === that.animals.length - 1) {
          that.index = 0;
        } else if (that.index === 0) {
          that.index = that.animals.length - 1;
        } else {
          that.index++;
        }
        that.options.series[0].data = that.animals[that.index].nodes;
        //两种过渡效果
        if (Math.random() > 0.5) {
          that.options.series[0].links = that.animals[that.index].links;
          that.myChart.setOption(that.options);
          that.options.series[0].symbolSize = 2;
          that.myChart.setOption(that.options);
        } else {
          that.options.series[0].links = [];
          that.myChart.setOption(that.options);
          that.options.series[0].links = that.animals[that.index].links;
          that.options.series[0].symbolSize = 2;
          that.myChart.setOption(that.options);
        }
      }, 3000);
    }
  },
  beforeDestroy() {
    clearInterval(this.loop);
  }
};
