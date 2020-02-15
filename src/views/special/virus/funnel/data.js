export default {
  option: {
    background: 'none',
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    visualMap: {},
    series: [{
      name: '确诊病例',
      type: 'funnel',
      left: '10%',
      top: 0,
      bottom: 0,
      width: '70%',
      min: 0,
      max: 1000,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending',
      gap: 2,
      data: ''
    }]
  },
  visualMap: {
    confirm: {
      min: 0,
      max: 1000,
      left: 0,
      bottom: 20,
      showLabel: true,
      pieces: [{
        gte: 1000,
        label: '> 1000 人',
        color: '#76171C'
      }, {
        gt: 500,
        lte: 1000,
        label: '500 - 1000 人',
        color: '#C93130'
      }, {
        gte: 100,
        lte: 499,
        label: '100 - 499 人',
        color: '#E16554'
      }, {
        gte: 10,
        lte: 99,
        label: '10 - 99 人',
        color: '#F1A88B'
      }, {
        gte: 1,
        lte: 9,
        label: '1 - 9 人',
        color: '#FCEED3'
      }, {
        value: 0,
        label: '0 人',
        color: '#F2F6FC'
      }],
      show: true
    },
    suspect: {
      min: 0,
      max: 1000,
      left: 0,
      bottom: 20,
      showLabel: true,
      pieces: [{
        gte: 1000,
        label: '> 1000 人',
        color: '#DAA520'
      }, {
        gt: 500,
        lte: 1000,
        label: '500 - 1000 人',
        color: '#FFD700'
      }, {
        gte: 100,
        lte: 499,
        label: '100 - 499 人',
        color: '#FFFF00'
      }, {
        gte: 10,
        lte: 99,
        label: '10 - 99 人',
        color: '#F0E68C'
      }, {
        gte: 1,
        lte: 9,
        label: '1 - 9 人',
        color: '#EEE8AA'
      }, {
        value: 0,
        label: '0 人',
        color: '#FFFACD'
      }],
      show: true
    },
    dead: {
      min: 0,
      max: 1000,
      left: 0,
      bottom: 20,
      showLabel: true,
      pieces: [{
        gte: 1000,
        label: '> 1000 人',
        color: '#000000'
      }, {
        gt: 500,
        lte: 1000,
        label: '500 - 1000 人',
        color: '#696969'
      }, {
        gte: 100,
        lte: 499,
        label: '100 - 499 人',
        color: '#A9A9A9'
      }, {
        gte: 10,
        lte: 99,
        label: '10 - 99 人',
        color: '#C0C0C0'
      }, {
        gte: 1,
        lte: 9,
        label: '1 - 9 人',
        color: '#D3D3D3'
      }, {
        value: 0,
        label: '0 人',
        color: '#DCDCDC'
      }],
      show: true
    },
    heal: {
      min: 0,
      max: 1000,
      left: 0,
      bottom: 20,
      showLabel: true,
      pieces: [{
        gte: 1000,
        label: '> 1000 人',
        color: '#006400'
      }, {
        gt: 500,
        lte: 1000,
        label: '500 - 1000 人',
        color: '#008000'
      }, {
        gte: 100,
        lte: 499,
        label: '100 - 499 人',
        color: '#32CD32'
      }, {
        gte: 10,
        lte: 99,
        label: '10 - 99 人',
        color: '#00FF00'
      }, {
        gte: 1,
        lte: 9,
        label: '1 - 9 人',
        color: '#00FF00'
      }, {
        value: 0,
        label: '0 人',
        color: '#98FB98'
      }],
      show: true
    }
  }
};