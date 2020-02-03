export default {
  option: {
    background: 'none',
    tooltip: {
      triggerOn: 'click',
      formatter: e => {
        return e.value === 0.5 ? `${e.name}：有疑似病例` : `${e.seriesName}<br />${e.name}：${e.value}`;
      }
    },
    dataRange: {
      left: 0,
      bottom: 20,
      splitList: [
        { start: 1000, label: '> 1000 人', color: '#76171C' },
        { start: 500, end: 1000, label: '500 - 1000 人', color: '#C93130' },
        { start: 100, end: 499, label: '100 - 499 人', color: '#E16554' },
        { start: 10, end: 99, label: '10 - 99 人', color: '#F1A88B' },
        { start: 1, end: 9, label: '1 - 9 人', color: '#FCEED3' },
        { end: 5, label: '0 人', color: '#F2F6FC' }
      ]
    },
    geo3D: {
      map: 'china',
      roam: true,
      itemStyle: {
        areaColor: 'rgb(5, 101, 123)',
        opacity: 1,
        borderWidth: 0.8,
        borderColor: 'rgb(62, 215, 213)'
      },
      label: {
        show: true,
        textStyle: {
          color: '#fff', //地图初始化区域字体颜色
          fontSize: 16,
          opacity: 1,
          backgroundColor: 'rgba(0, 0, 0, 0)'
          //backgroundColor: 'rgba(53,171,199,0)'
        }
      },
      emphasis: { //当鼠标放上去  地区区域是否显示名称
        label: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: 16,
            backgroundColor: 'rgba(0, 23, 11, 0)'
          }
        }
      },
      shading: 'lambert',
      light: { //光照阴影
        main: {
          color: '#fff', //光照颜色
          intensity: 1.2, //光照强度
          shadowQuality: 'high', //阴影亮度
          shadow: false, //是否显示阴影
          alpha: 55,
          beta: 10
        },
        ambient: {
          intensity: 0.3
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