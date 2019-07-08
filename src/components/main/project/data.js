const animals = [{
  nodes: [
    {
      x: 249,
      y: 105,
      name: 's0'
    },
    {
      x: 285,
      y: 136,
      name: 's1'
    },
    {
      x: 314,
      y: 122,
      name: 's2'
    },
    {
      x: 283,
      y: 66,
      name: 's3'
    },
    {
      x: 338,
      y: 10,
      name: 's4'
    },
    {
      x: 394,
      y: 2,
      name: 's5'
    },
    {
      x: 366,
      y: 77,
      name: 's6'
    },
    {
      x: 392,
      y: 122,
      name: 's7'
    },
    {
      x: 511,
      y: 52,
      name: 's8'
    },
    {
      x: 488,
      y: 90,
      name: 's9'
    },
    {
      x: 599,
      y: 125,
      name: 's10'
    },
    {
      x: 477,
      y: 130,
      name: 's11'
    },
    {
      x: 506,
      y: 59,
      name: 's12'
    },
    {
      x: 591,
      y: 127,
      name: 's13'
    },
    {
      x: 623,
      y: 201,
      name: 's14'
    },
    {
      x: 617,
      y: 200,
      name: 's15'
    },
    {
      x: 612,
      y: 317,
      name: 's16'
    },
    {
      x: 614,
      y: 296,
      name: 's17'
    },
    {
      x: 632,
      y: 362,
      name: 's18'
    },
    {
      x: 614,
      y: 528,
      name: 's19'
    },
    {
      x: 616,
      y: 667,
      name: 's20'
    },
    {
      x: 570,
      y: 668,
      name: 's21'
    },
    {
      x: 587,
      y: 610,
      name: 's22'
    },
    {
      x: 522,
      y: 478,
      name: 's23'
    },
    {
      x: 536,
      y: 508,
      name: 's24'
    },
    {
      x: 443,
      y: 568,
      name: 's25'
    },
    {
      x: 468,
      y: 652,
      name: 's26'
    },
    {
      x: 412,
      y: 655,
      name: 's27'
    },
    {
      x: 411,
      y: 463,
      name: 's28'
    },
    {
      x: 439,
      y: 350,
      name: 's29'
    },
    {
      x: 548,
      y: 369,
      name: 's30'
    },
    {
      x: 455,
      y: 446,
      name: 's31'
    },
    {
      x: 485,
      y: 421,
      name: 's32'
    },
    {
      x: 477,
      y: 408,
      name: 's33'
    },
    {
      x: 530,
      y: 315,
      name: 's34'
    },
    {
      x: 430,
      y: 309,
      name: 's35'
    },
    {
      x: 370,
      y: 336,
      name: 's36'
    },
    {
      x: 353,
      y: 405,
      name: 's37'
    },
    {
      x: 325,
      y: 336,
      name: 's38'
    },
    {
      x: 385,
      y: 278,
      name: 's39'
    },
    {
      x: 408,
      y: 205,
      name: 's40'
    },
    {
      x: 454,
      y: 207,
      name: 's41'
    },
    {
      x: 437,
      y: 149,
      name: 's42'
    },
    {
      x: 405,
      y: 140,
      name: 's43'
    }
  ],
  links: [
    {
      source: 's0',
      target: 's1'
    },
    {
      source: 's0',
      target: 's2'
    },
    {
      source: 's0',
      target: 's3'
    },
    {
      source: 's1',
      target: 's2'
    },
    {
      source: 's2',
      target: 's3'
    },
    {
      source: 's2',
      target: 's6'
    },
    {
      source: 's2',
      target: 's7'
    },
    {
      source: 's3',
      target: 's6'
    },
    {
      source: 's3',
      target: 's4'
    },
    {
      source: 's4',
      target: 's5'
    },
    {
      source: 's4',
      target: 's6'
    },
    {
      source: 's5',
      target: 's6'
    },
    {
      source: 's5',
      target: 's8'
    },
    {
      source: 's5',
      target: 's9'
    },
    {
      source: 's6',
      target: 's7'
    },
    {
      source: 's6',
      target: 's9'
    },
    {
      source: 's7',
      target: 's9'
    },
    {
      source: 's8',
      target: 's9'
    },
    {
      source: 's9',
      target: 's11'
    },
    {
      source: 's10',
      target: 's11'
    },
    {
      source: 's10',
      target: 's12'
    },
    {
      source: 's11',
      target: 's42'
    },
    {
      source: 's11',
      target: 's14'
    },
    {
      source: 's11',
      target: 's16'
    },
    {
      source: 's11',
      target: 's34'
    },
    {
      source: 's11',
      target: 's41'
    },
    {
      source: 's11',
      target: 's42'
    },
    {
      source: 's13',
      target: 's14'
    },
    {
      source: 's15',
      target: 's16'
    },
    {
      source: 's16',
      target: 's34'
    },
    {
      source: 's16',
      target: 's31'
    },
    {
      source: 's17',
      target: 's18'
    },
    {
      source: 's18',
      target: 's19'
    },
    {
      source: 's18',
      target: 's23'
    },
    {
      source: 's19',
      target: 's20'
    },
    {
      source: 's19',
      target: 's21'
    },
    {
      source: 's19',
      target: 's23'
    },
    {
      source: 's20',
      target: 's21'
    },
    {
      source: 's23',
      target: 's22'
    },
    {
      source: 's23',
      target: 's25'
    },
    {
      source: 's23',
      target: 's30'
    },
    {
      source: 's23',
      target: 's32'
    },
    {
      source: 's24',
      target: 's25'
    },
    {
      source: 's26',
      target: 's27'
    },
    {
      source: 's26',
      target: 's28'
    },
    {
      source: 's27',
      target: 's28'
    },
    {
      source: 's28',
      target: 's29'
    },
    {
      source: 's29',
      target: 's33'
    },
    {
      source: 's29',
      target: 's34'
    },
    {
      source: 's29',
      target: 's7'
    },
    {
      source: 's31',
      target: 's34'
    },
    {
      source: 's34',
      target: 's7'
    },
    {
      source: 's35',
      target: 's36'
    },
    {
      source: 's36',
      target: 's40'
    },
    {
      source: 's36',
      target: 's37'
    },
    {
      source: 's37',
      target: 's38'
    },
    {
      source: 's38',
      target: 's39'
    },
    {
      source: 's41',
      target: 's42'
    },
    {
      source: 's42',
      target: 's43'
    }
  ]
}];

export default {
  animals: {
    animals: animals,
    option: {
      series: [
        {
          name: 'animals',
          type: 'graph',
          data: animals[0].nodes,
          links: animals[0].links,
          lineStyle: {
            normal: {
              width: 2,
              curveness: 0,
              color: '#409EFF'
            }
          },
          itemStyle: {
            normal: {
              color: '#409EFF'
            }
          },
          silent: true,
          symbolSize: 1
        }
      ],
      animationDuration: 1500,
      animationDurationUpdate: 1500
    }
  },
  wordClouds: {
    tooltip: {
      show: false
    },
    series: [{
      type: 'wordCloud',
      gridSize: 20,
      sizeRange: [12, 50],
      rotationRange: [0, 0],
      shape: 'circle',
      textStyle: {
        normal: {
          color: () => {
            return 'rgb(' + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(',') + ')';
          }
        }
      },
      data: []
    }]
  },
  card: [{
    icon: 'fa fa-bicycle'
  }, {
    icon: 'fa fa-car'
  }, {
    icon: 'fa fa-map-signs'
  }, {
    icon: 'fa fa-modx'
  }, {
    icon: 'fa fa-futbol-o'
  }, {
    icon: 'fa fa-picture-o'
  }, {
    icon: 'fa fa-gamepad'
  }, {
    icon: 'fa fa-flag'
  }]
};
