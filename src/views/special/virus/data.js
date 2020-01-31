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
      left: 26,
      bottom: 40,
      showLabel: true,
      text: ['高', '低'],
      pieces: [{
        gt: 100,
        label: '> 100 人',
        color: '#7f1100'
      }, {
        gte: 10,
        lte: 100,
        label: '10 - 100 人',
        color: '#ff5428'
      }, {
        gte: 1,
        lt: 10,
        label: '1 - 9 人',
        color: '#ff8c71'
      }, {
        gt: 0,
        lt: 1,
        label: '疑似',
        color: '#ffd768'
      }, {
        value: 0,
        color: '#ffffff'
      }],
      show: true
    },
    geo: {
      show: true,
      map: 'china',
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