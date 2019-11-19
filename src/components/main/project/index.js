import data from './data.js';

export default {
  name: 'project',
  data() {
    return {
      index: 0,
      animals: {
        name: 'projectAnimals',
        animals: data.animals.animals,
        options: data.animals.option,
        style: {
          width: '100vw',
          height: '40vh',
          background: '#fff'
        },
        loop: setTimeout(() => {})
      },
      wordClouds: {
        name: 'projectWordClouds',
        options: data.wordClouds,
        style: {
          width: '100vw',
          height: '40vh',
          background: 'transparent'
        },
        loop: setTimeout(() => {})
      },
      cardList: [],
      qrcodePreview: null
    };
  },
  computed: {
    link() {
      return window.location.href.substring(0, window.location.href.indexOf('#')-1);
    }
  },
  created() {
    this.getCrad();
  },
  mounted() {
    this.drawInitAnimals();
    this.drawInitWordClouds();
  },
  methods: {
    // 动物
    drawInitAnimals() {
      this.animals.options.series[0].symbolSize = 2;
      this.drawLineAnimals();
    },
    drawLineAnimals() {
      let that = this;

      clearTimeout(that.animals.loop);
      that.animals.loop = setTimeout(() => {
        if (that.index === that.animals.animals.length - 1) {
          that.index = 0;
        } else {
          that.index++;
        }
        that.animals.options.series[0].data = that.animals.animals[that.index].nodes;
        that.animals.options.series[0].links = that.animals.animals[that.index].links;
        that.drawLineAnimals();
      }, 3000);
    },
    // 词云
    drawInitWordClouds() {
      this.$axios.getData({
        url: '/project/wordClouds'
      }).then(res => {
        this.wordClouds.options.series[0].data = res.data;
        this.drawLineWordClouds();
      });
    },
    drawLineWordClouds() {
      let that = this;

      clearTimeout(that.wordClouds.loop);
      that.wordClouds.loop = setTimeout(() => {
        that.$axios.getData({
          url: '/project/wordClouds'
        }).then(res => {
          that.wordClouds.options.series[0].data = res.data;
          that.drawLineWordClouds();
        });
      }, 3000);
    },
    getCrad() {
      this.$axios.getData({
        url: '/project/card'
      }).then(res => {
        this.$set(this, 'cardList', res.data);
      });
    },
    qrcodeShow(link) {
      this.qrcodePreview = link;
    },
    pageDetail(link) {
      window.open(link);
    }
  },
  beforeDestroy() {
    clearInterval(this.animals.loop);
    clearInterval(this.wordClouds.loop);
  }
};
