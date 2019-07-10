import data from './data.js';

export default {
  name: 'foreword',
  data() {
    return {
      // 轮播
      sentence: data.sentence,
      article: data.article,
      swiperOption: {
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        autoplay: {
          delay: 3000
        }
      },
      // 标签页
      activeName: 'first',
      tabPage: [{
        name: 'first',
        label: '愚公移山',
        labelicon: 'fa fa-angle-right',
        dividericon: 'fa fa-leaf',
        content: ''
      }, {
        name: 'second',
        label: '草木皆兵',
        labelicon: 'fa fa-angle-right',
        dividericon: 'fa fa-envira',
        content: ''
      }]
    };
  },
  created() {
    for (let i in this.tabPage) {
      this.getTabPage(i);
    }
  },
  methods: {
    getTabPage(n) {
      this.$service.getData('/foreword/tabPage').then(res => {
        this.tabPage[n].content = res.data;
      });
    }
  }
};
