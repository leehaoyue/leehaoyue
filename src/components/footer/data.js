const waves = [{
  value: 0.47,
  valueSine: 0.1,
  period: 10000,
  amplitude: 120,
  amplitudeSine: 100,
  waveLength: '50%'
}, {
  value: 0.468,
  valueSine: 0.1,
  period: 10000,
  amplitude: 120,
  amplitudeSine: 100,
  waveLength: '40%'
}, {
  value: 0.466,
  valueSine: 0.1,
  period: 10000,
  amplitude: 120,
  amplitudeSine: 100,
  waveLength: '30%'
}, {
  value: 0.462,
  valueSine: 0.1,
  period: 10000,
  amplitude: 120,
  amplitudeSine: 100,
  waveLength: '20%'
}];

export default {
  option: {
    series: [{
      radius: '5000%',
      type: 'liquidFill',
      data: waves,
      shape: 'rect',
      backgroundStyle: {
        color: 'transparent'
      },
      outline: {
        show: false
      },
      label: {
        normal: {
          textStyle: {
            fontSize: 14,
            color: '#67C23A'
          },
          formatter: () => {
            return 'Copyright © forever Lee. All rights reserved.';
          }
        }
      }
    }]
  }
};
