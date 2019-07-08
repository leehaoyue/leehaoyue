import data from './data.js';

export default {
  name: 'blog',
  data() {
    return {
      chartData: {
        small: {
          style: {
            width: '50vw',
            height: '50vw',
            margin: 'auto'
          },
          name: 'blogSmall'
        },
        large: {
          style: {
            width: '20vw',
            height: '20vw',
            margin: 'auto'
          },
          name: 'blogLarge'
        },
        option: data.option
      }
    };
  }
};
