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
        content: this.$mock('/foreword/tabPage')
      }, {
        name: 'second',
        label: '草木皆兵',
        labelicon: 'fa fa-angle-right',
        dividericon: 'fa fa-envira',
        content: this.$mock('/foreword/tabPage')
      }]
    };
  }
};
