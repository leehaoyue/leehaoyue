import data from './data.js';

export default {
  name: 'basebar',
  data() {
    return {
      name: 'footerEcharts',
      option: data.option,
      style: {
        width: '100vw',
        height: this.$globaldata.container.footer.height
      }
    };
  }
};
