export default {
  option: {
    background: 'none',
    tooltip: {
      triggerOn: 'click',
      formatter: e => {
        return e.value === 0.5 ? `${e.name}：有疑似病例` : `${e.seriesName}<br />${e.name}：${e.value}`;
      }
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
    geo: {
      show: true,
      roam: true,
      scaleLimit: {
        min: 1,
        max: 2
      },
      zoom: 1.15,
      top: 20,
      label: {
        normal: {
          show: true,
          fontSize: '14',
          color: 'rgba(0,0,0,0.7)'
        }
      },
      itemStyle: {
        normal: {
          shadowBlur: 50,
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          borderColor: 'rgba(0, 0, 0, 0.2)'
        },
        emphasis: {
          areaColor: '#f2d5ad',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          borderWidth: 0
        }
      }
    },
    series: [{
      name: '确诊病例',
      type: 'map',
      geoIndex: 0,
      data: {}
    }]
  }
};