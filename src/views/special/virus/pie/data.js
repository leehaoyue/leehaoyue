export default {
  option: {
    background: 'none',
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    visualMap: '',
    series: [{
      name: '确诊病例',
      type: 'pie',
      label: {
        color: 'rgba(0,0,0,0.7)'
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(0,0,0,0.7)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      minAngle: 90,
      radius: '50%',
      center: ['50%', '50%'],
      data: ''
    }]
  }
};