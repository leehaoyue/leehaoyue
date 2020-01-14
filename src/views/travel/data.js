export default {
  option: () => {
    let geoCoordMap = {
        '沈阳': [123.1238, 42.1216],
        '北京': [116.4551, 40.2539],
        '昭通': [103.72, 27.33],
        '天津': [117.4219, 39.4189],
        '上海': [121.4648, 31.2891],
        '西安': [107.40, 33.39],
        '苏州': [120.62, 31.32],
        '杭州': [120.12, 30.16]
      },
      travel = [{
        'start_city': '沈阳',
        'end_city': '北京'
      }, {
        'start_city': '昭通',
        'end_city': '北京'
      }, {
        'start_city': '天津',
        'end_city': '北京'
      }, {
        'start_city': '北京',
        'end_city': '上海'
      }, {
        'start_city': '西安',
        'end_city': '上海'
      }, {
        'start_city': '苏州',
        'end_city': '上海'
      }, {
        'start_city': '杭州',
        'end_city': '上海'
      }],
      planePath = 'image://img/travel/plane.png',
      trainPath = 'image://img/travel/train.png',
      trainPlace = ['天津', '苏州', '杭州'],
      convertData = function(data) {
        let res = [], dataItem, fromCoord, toCoord;

        for (let i = 0; i < data.length; i++) {
          dataItem = data[i];
          fromCoord = geoCoordMap[dataItem[0].name];
          toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord]
            });
          }
        }
        return res;
      },
      handleData = function(data) {
        let obj = {},

          arr = [];

        for (let i = 0, len1 = data.length; i < len1; i++) {
          if (arr.indexOf(data[i].start_city) === -1) {
            arr.push(data[i].start_city);
          }
          for (let j = 0, len2 = arr.length; j < len2; j++) {
            obj[arr[j]] = [];
          }
        }
        for (let i = 0, len = data.length; i < len; i++) {
          obj[data[i].start_city].push([{
            'name': data[i].start_city
          },
          {
            'name': data[i].end_city
          }]);
        }
        return obj;
      },
      color = ['#a6c84c', '#ffa022', '#46bee9', '#f569ef5', '#f7545f', '#ffa500', '#97ffff'],
      series = [],
      data = handleData(travel),
      tempArr = [],
      option = null;

    for (let k in data) {
      tempArr.push([k, data[k]]);
    }

    tempArr.forEach((item, i) => {
      series.push({
        name: item[0],
        type: 'lines',
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: '#fff',
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            curveness: 0.2,
            type: 'solid'
          }
        },
        data: convertData(item[1])
      }, {
        name: item[0],
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 12,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: trainPlace.indexOf(item[0])>=0 ? trainPath : planePath,
          symbolSize: 30
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      }, {
        name: item[0],
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'fill'
        },
        label: {
          normal: {
            show: true,
            position: 'top',
            formatter: '{b}',
            color: color[i],
            fontSize: 14
          }
        },
        symbolSize: 4,
        itemStyle: {
          normal: {
            color: color[i]
          }
        },
        data: item[1].map(function(dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name]
          };
        })
      }, {
        name: item[0],
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'fill'
        },
        label: {
          normal: {
            show: true,
            color: color[i],
            position: 'top',
            formatter: '{b}',
            fontSize: 14
          }
        },
        symbolSize: 8,
        itemStyle: {
          normal: {
            color: color[i]
          }
        },
        data: [{
          name: item[0],
          value: geoCoordMap[item[0]]
        }]
      });
    });

    option = {
      background: 'none',
      geo: {
        show: true,
        map: 'china',
        roam: true,
        zoom: 1,
        label: {
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            borderColor: 'rgba(147, 235, 248, 1)',
            borderWidth: 1,
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [{
                offset: 0,
                color: 'rgba(147, 235, 248, 0)'
              }, {
                offset: 1,
                color: 'rgba(147, 235, 248, 0.2)'
              }],
              globalCoord: false
            },
            shadowColor: 'rgba(128, 217, 248, 1)',
            shadowOffsetX: -2,
            shadowOffsetY: 2,
            shadowBlur: 10
          },
          emphasis: {
            areaColor: '#389BB7',
            borderWidth: 0
          }
        }
      },
      series: series
    };
    return option;
  }
};