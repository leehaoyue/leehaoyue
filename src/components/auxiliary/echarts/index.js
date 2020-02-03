require('echarts-wordcloud');
require('echarts-liquidfill');
require('echarts/map/js/china');
require('echarts-gl');

export default {
  name: 'echarts',
  props: {
    chartName: null,
    options: null,
    chartStyle: null
  },
  data() {
    return {
      echartsModel: null
    };
  },
  watch: {
    options: {
      handler() {
        this.drawInit();
      },
      deep: true
    }
  },
  mounted() {
    window.addEventListener('resize', this.drawResize, 20);
    this.drawInit();
  },
  methods: {
    drawInit() {
      this.echartsModel = this.$echarts.init(this.$refs[this.chartName]);
      this.echartsModel.clear();
      this.echartsModel.setOption(this.options);
    },
    drawResize() {
      if (!this.$globalmethod.isEmpty(this.echartsModel)) {
        this.echartsModel.resize();
      }
    }
  },
  beforeDestroy() {
    this.echartsModel.dispose();
    window.removeEventListener('resize', this.drawResize, 20);
  }
};
