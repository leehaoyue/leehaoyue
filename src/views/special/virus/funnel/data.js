export default {
  option: {
    background: 'none',
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    visualMap: {
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
  }
};