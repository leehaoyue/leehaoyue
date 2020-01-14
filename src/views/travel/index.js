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
      }
    };
  }
};
