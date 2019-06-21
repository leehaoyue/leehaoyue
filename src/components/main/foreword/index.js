import data from './data.js';

export default {
  name: 'foreword',
  data() {
    return {
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
      }
    };
  }
};
