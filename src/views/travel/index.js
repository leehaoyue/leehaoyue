import data from './data.js';

export default {
  name: 'travel',
  data() {
    return {
      name: 'travelEcharts',
      option: data.option(),
      style: {
        width: '100vw',
        height: '100vh'
      },
      title: '工作+生活=游祖国'
    };
  },
  mounted() {
    let that = this;

    this.$notify({
      title: '披星戴月',
      message: '即将开启一段新的旅程',
      type: 'success',
      duration: 5000
    });
    setTimeout(()=>{
      that.$router.push({name: 'foreword'});
    }, 5000);
  }
};
