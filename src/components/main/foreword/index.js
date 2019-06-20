import data from './data.js';

export default {
  name: 'foreword',
  data() {
    return {
      sentence: data.sentence,
      article: data.article
    };
  },
  computed: {
    swiper() {
      return this.$refs.forewordSwiper.swiper;
    }
  }
};
