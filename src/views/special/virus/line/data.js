export default {
  option: {
    background: 'none',
    legend: {
      color: [],
      data: [],
      left: 'left',
      top: 'top'
    },
    grid: {
      left: '16%',
      right: '10%',
      top: '20%',
      bottom: '25%'
    },
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    dataZoom:[{
      type: 'slider',
      show: true,
      realtime: true,
      start: 50,
      end: 100
    }],
    series: []
  }
};