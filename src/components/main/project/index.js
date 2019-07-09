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
      }
    };
  },
  computed: {
    cardList() {
      return data.card.map(item => {
        return Object.assign({}, item, this.$service.getData('/project/card'));
      });
    }
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
      this.wordClouds.options.series[0].data = this.$service.getData('/project/wordClouds');
      this.drawLineWordClouds();
    },
    drawLineWordClouds() {
      let that = this;

      clearTimeout(that.wordClouds.loop);
      that.wordClouds.loop = setTimeout(() => {
        that.wordClouds.options.series[0].data = that.$service.getData('/project/wordClouds');
        that.drawLineWordClouds();
      }, 3000);
    }
  },
  beforeDestroy() {
    clearInterval(this.animals.loop);
    clearInterval(this.wordClouds.loop);
  }
};
