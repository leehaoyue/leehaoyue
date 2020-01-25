import data from './data.js';

export default {
  name: 'travel',
  data() {
    return {
      name: 'travelEcharts',
      option: data.option(),
      content: data.content,
      style: {
        width: '100vw',
        height: '100vh'
      },
      title: '致曾经的工作差旅',
      time: 5
    };
  },
  mounted() {
    // let that = this, time = that.time;

    this.$notify({
      title: '披星戴月',
      message: '即将开启一段新的旅程',
      type: 'success',
      // duration: time*1000
      duration: 3*1000
    });
    // this.count(time);
  },
  methods: {
    count(time) {
      let that = this;

      clearTimeout(that.timer);
      that.timer = setTimeout(() => {
        if (that.time>0) {
          that.time--;
          that.count(time);
        } else {
          that.$router.push({name: 'foreword'});
        }
      }, 1000);
    },
    toMain() {
      this.$router.push({name: 'foreword'});
    }
  }
};
