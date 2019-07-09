const animals = [{
  nodes: [{
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
  }],
  links: [{
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
  }]
}, { // oryx,
  nodes: [{
    x: 381,
    y: 36,
    name: 's0'
  },
  {
    x: 502,
    y: 15,
    name: 's1'
  },
  {
    x: 536,
    y: 23,
    name: 's2'
  },
  {
    x: 683,
    y: 37,
    name: 's3'
  },
  {
    x: 691,
    y: 57,
    name: 's4'
  },
  {
    x: 752,
    y: 129,
    name: 's5'
  },
  {
    x: 788,
    y: 97,
    name: 's6'
  },
  {
    x: 733,
    y: 147,
    name: 's7'
  },
  {
    x: 704,
    y: 110,
    name: 's8'
  },
  {
    x: 711,
    y: 151,
    name: 's9'
  },
  {
    x: 701,
    y: 152,
    name: 's10'
  },
  {
    x: 742,
    y: 147,
    name: 's11'
  },
  {
    x: 759,
    y: 144,
    name: 's12'
  },
  {
    x: 803,
    y: 185,
    name: 's13'
  },
  {
    x: 856,
    y: 231,
    name: 's14'
  },
  {
    x: 850,
    y: 259,
    name: 's15'
  },
  {
    x: 766,
    y: 217,
    name: 's16'
  },
  {
    x: 741,
    y: 237,
    name: 's17'
  },
  {
    x: 843,
    y: 256,
    name: 's18'
  },
  {
    x: 769,
    y: 242,
    name: 's19'
  },
  {
    x: 664,
    y: 421,
    name: 's20'
  },
  {
    x: 611,
    y: 245,
    name: 's21'
  },
  {
    x: 608,
    y: 440,
    name: 's22'
  },
  {
    x: 636,
    y: 431,
    name: 's23'
  },
  {
    x: 612,
    y: 605,
    name: 's24'
  },
  {
    x: 605,
    y: 530,
    name: 's25'
  },
  {
    x: 590,
    y: 608,
    name: 's26'
  },
  {
    x: 582,
    y: 493,
    name: 's27'
  },
  {
    x: 500,
    y: 363,
    name: 's28'
  },
  {
    x: 463,
    y: 245,
    name: 's29'
  },
  {
    x: 542,
    y: 221,
    name: 's30'
  },
  {
    x: 302,
    y: 225,
    name: 's31'
  },
  {
    x: 218,
    y: 296,
    name: 's32'
  },
  {
    x: 339,
    y: 400,
    name: 's33'
  },
  {
    x: 355,
    y: 381,
    name: 's34'
  },
  {
    x: 411,
    y: 468,
    name: 's35'
  },
  {
    x: 318,
    y: 418,
    name: 's36'
  },
  {
    x: 285,
    y: 607,
    name: 's37'
  },
  {
    x: 268,
    y: 477,
    name: 's38'
  },
  {
    x: 274,
    y: 452,
    name: 's39'
  },
  {
    x: 233,
    y: 605,
    name: 's40'
  },
  {
    x: 208,
    y: 505,
    name: 's41'
  },
  {
    x: 219,
    y: 388,
    name: 's42'
  },
  {
    x: 555,
    y: 451,
    name: 's43'
  },
  {
    x: 608,
    y: 390,
    name: 's44'
  }],
  links: [{
    source: 's0',
    target: 's1'
  },
  {
    source: 's0',
    target: 's2'
  },
  {
    source: 's1',
    target: 's3'
  },
  {
    source: 's1',
    target: 's4'
  },
  {
    source: 's3',
    target: 's5'
  },
  {
    source: 's3',
    target: 's7'
  },
  {
    source: 's6',
    target: 's12'
  },
  {
    source: 's6',
    target: 's7'
  },
  {
    source: 's7',
    target: 's8'
  },
  {
    source: 's8',
    target: 's9'
  },
  {
    source: 's10',
    target: 's12'
  },
  {
    source: 's10',
    target: 's17'
  },
  {
    source: 's10',
    target: 's21'
  },
  {
    source: 's11',
    target: 's17'
  },
  {
    source: 's12',
    target: 's13'
  },
  {
    source: 's13',
    target: 's14'
  },
  {
    source: 's13',
    target: 's17'
  },
  {
    source: 's14',
    target: 's15'
  },
  {
    source: 's14',
    target: 's16'
  },
  {
    source: 's15',
    target: 's16'
  },
  {
    source: 's17',
    target: 's18'
  },
  {
    source: 's17',
    target: 's20'
  },
  {
    source: 's17',
    target: 's21'
  },
  {
    source: 's19',
    target: 's20'
  },
  {
    source: 's20',
    target: 's21'
  },
  {
    source: 's20',
    target: 's22'
  },
  {
    source: 's21',
    target: 's25'
  },
  {
    source: 's21',
    target: 's28'
  },
  {
    source: 's21',
    target: 's29'
  },
  {
    source: 's21',
    target: 's30'
  },
  {
    source: 's23',
    target: 's24'
  },
  {
    source: 's24',
    target: 's25'
  },
  {
    source: 's25',
    target: 's26'
  },
  {
    source: 's25',
    target: 's28'
  },
  {
    source: 's26',
    target: 's27'
  },
  {
    source: 's28',
    target: 's29'
  },
  {
    source: 's28',
    target: 's34'
  },
  {
    source: 's28',
    target: 's35'
  },
  {
    source: 's29',
    target: 's30'
  },
  {
    source: 's29',
    target: 's31'
  },
  {
    source: 's29',
    target: 's32'
  },
  {
    source: 's29',
    target: 's33'
  },
  {
    source: 's31',
    target: 's32'
  },
  {
    source: 's32',
    target: 's33'
  },
  {
    source: 's32',
    target: 's42'
  },
  {
    source: 's33',
    target: 's41'
  },
  {
    source: 's33',
    target: 's42'
  },
  {
    source: 's34',
    target: 's35'
  },
  {
    source: 's35',
    target: 's36'
  },
  {
    source: 's35',
    target: 's43'
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
    source: 's39',
    target: 's40'
  },
  {
    source: 's40',
    target: 's41'
  },
  {
    source: 's41',
    target: 's42'
  },
  {
    source: 's44',
    target: 's28'
  }]
}, { // vaquita
  nodes: [{
    x: 453,
    y: 104,
    name: 's0'
  },
  {
    x: 329,
    y: 202,
    name: 's1'
  },
  {
    x: 447,
    y: 210,
    name: 's2'
  },
  {
    x: 448,
    y: 194,
    name: 's3'
  },
  {
    x: 853,
    y: 265,
    name: 's4'
  },
  {
    x: 829,
    y: 260,
    name: 's5'
  },
  {
    x: 888,
    y: 239,
    name: 's6'
  },
  {
    x: 994,
    y: 244,
    name: 's7'
  },
  {
    x: 918,
    y: 283,
    name: 's8'
  },
  {
    x: 840,
    y: 274,
    name: 's9'
  },
  {
    x: 765,
    y: 318,
    name: 's10'
  },
  {
    x: 572,
    y: 216,
    name: 's11'
  },
  {
    x: 590,
    y: 343,
    name: 's12'
  },
  {
    x: 540,
    y: 429,
    name: 's13'
  },
  {
    x: 541,
    y: 258,
    name: 's14'
  },
  {
    x: 336,
    y: 248,
    name: 's15'
  },
  {
    x: 296,
    y: 319,
    name: 's16'
  },
  {
    x: 365,
    y: 425,
    name: 's17'
  },
  {
    x: 360,
    y: 408,
    name: 's18'
  },
  {
    x: 284,
    y: 390,
    name: 's19'
  },
  {
    x: 224,
    y: 380,
    name: 's20'
  },
  {
    x: 371,
    y: 464,
    name: 's21'
  },
  {
    x: 426,
    y: 524,
    name: 's22'
  },
  {
    x: 274,
    y: 425,
    name: 's23'
  },
  {
    x: 333,
    y: 492,
    name: 's24'
  },
  {
    x: 214,
    y: 427,
    name: 's25'
  },
  {
    x: 49,
    y: 432,
    name: 's26'
  },
  {
    x: 66,
    y: 404,
    name: 's27'
  },
  {
    x: 93,
    y: 406,
    name: 's28'
  },
  {
    x: 117,
    y: 380,
    name: 's29'
  },
  {
    x: 82,
    y: 370,
    name: 's30'
  },
  {
    x: 20,
    y: 421,
    name: 's31'
  },
  {
    x: 20,
    y: 405,
    name: 's32'
  },
  {
    x: 117,
    y: 300,
    name: 's33'
  },
  {
    x: 78,
    y: 294,
    name: 's34'
  },
  {
    x: 23,
    y: 218,
    name: 's35'
  },
  {
    x: 42,
    y: 218,
    name: 's36'
  },
  {
    x: 35,
    y: 204,
    name: 's37'
  },
  {
    x: 68,
    y: 130,
    name: 's38'
  },
  {
    x: 85,
    y: 116,
    name: 's39'
  },
  {
    x: 70,
    y: 108,
    name: 's40'
  },
  {
    x: 286,
    y: 425,
    name: 's41'
  }],
  links: [{
    source: 's0',
    target: 's1'
  },
  {
    source: 's0',
    target: 's2'
  },
  {
    source: 's1',
    target: 's2'
  },
  {
    source: 's3',
    target: 's4'
  },
  {
    source: 's4',
    target: 's7'
  },
  {
    source: 's4',
    target: 's10'
  },
  {
    source: 's5',
    target: 's6'
  },
  {
    source: 's6',
    target: 's7'
  },
  {
    source: 's7',
    target: 's8'
  },
  {
    source: 's8',
    target: 's9'
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
    source: 's10',
    target: 's13'
  },
  {
    source: 's11',
    target: 's12'
  },
  {
    source: 's11',
    target: 's14'
  },
  {
    source: 's11',
    target: 's15'
  },
  {
    source: 's12',
    target: 's14'
  },
  {
    source: 's12',
    target: 's15'
  },
  {
    source: 's12',
    target: 's16'
  },
  {
    source: 's12',
    target: 's13'
  },
  {
    source: 's13',
    target: 's16'
  },
  {
    source: 's13',
    target: 's17'
  },
  {
    source: 's14',
    target: 's15'
  },
  {
    source: 's15',
    target: 's16'
  },
  {
    source: 's15',
    target: 's29'
  },
  {
    source: 's15',
    target: 's33'
  },
  {
    source: 's16',
    target: 's19'
  },
  {
    source: 's16',
    target: 's29'
  },
  {
    source: 's18',
    target: 's20'
  },
  {
    source: 's18',
    target: 's21'
  },
  {
    source: 's20',
    target: 's21'
  },
  {
    source: 's20',
    target: 's22'
  },
  {
    source: 's21',
    target: 's22'
  },
  {
    source: 's23',
    target: 's24'
  },
  {
    source: 's23',
    target: 's41'
  },
  {
    source: 's23',
    target: 's26'
  },
  {
    source: 's23',
    target: 's27'
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
    target: 's31'
  },
  {
    source: 's27',
    target: 's29'
  },
  {
    source: 's27',
    target: 's30'
  },
  {
    source: 's27',
    target: 's31'
  },
  {
    source: 's27',
    target: 's32'
  },
  {
    source: 's28',
    target: 's29'
  },
  {
    source: 's29',
    target: 's23'
  },
  {
    source: 's29',
    target: 's30'
  },
  {
    source: 's29',
    target: 's33'
  },
  {
    source: 's30',
    target: 's33'
  },
  {
    source: 's31',
    target: 's32'
  },
  {
    source: 's32',
    target: 's33'
  },
  {
    source: 's32',
    target: 's34'
  },
  {
    source: 's33',
    target: 's1'
  },
  {
    source: 's34',
    target: 's1'
  },
  {
    source: 's35',
    target: 's36'
  },
  {
    source: 's35',
    target: 's37'
  },
  {
    source: 's36',
    target: 's37'
  },
  {
    source: 's38',
    target: 's39'
  },
  {
    source: 's38',
    target: 's40'
  },
  {
    source: 's39',
    target: 's40'
  }]
}, { // camel
  nodes: [{
    x: 310,
    y: 104,
    name: 's0'
  },
  {
    x: 371,
    y: 70,
    name: 's1'
  },
  {
    x: 432,
    y: 137,
    name: 's2'
  },
  {
    x: 510,
    y: 104,
    name: 's3'
  },
  {
    x: 617,
    y: 215,
    name: 's4'
  },
  {
    x: 656,
    y: 162,
    name: 's5'
  },
  {
    x: 683,
    y: 111,
    name: 's6'
  },
  {
    x: 700,
    y: 122,
    name: 's7'
  },
  {
    x: 702,
    y: 107,
    name: 's8'
  },
  {
    x: 754,
    y: 152,
    name: 's9'
  },
  {
    x: 698,
    y: 158,
    name: 's10'
  },
  {
    x: 783,
    y: 151,
    name: 's11'
  },
  {
    x: 812,
    y: 184,
    name: 's12'
  },
  {
    x: 704,
    y: 192,
    name: 's13'
  },
  {
    x: 753,
    y: 215,
    name: 's14'
  },
  {
    x: 765,
    y: 340,
    name: 's15'
  },
  {
    x: 757,
    y: 323,
    name: 's16'
  },
  {
    x: 714,
    y: 400,
    name: 's17'
  },
  {
    x: 708,
    y: 283,
    name: 's18'
  },
  {
    x: 713,
    y: 390,
    name: 's19'
  },
  {
    x: 626,
    y: 431,
    name: 's20'
  },
  {
    x: 631,
    y: 422,
    name: 's21'
  },
  {
    x: 614,
    y: 358,
    name: 's22'
  },
  {
    x: 605,
    y: 365,
    name: 's23'
  },
  {
    x: 605,
    y: 351,
    name: 's24'
  },
  {
    x: 486,
    y: 279,
    name: 's25'
  },
  {
    x: 562,
    y: 325,
    name: 's26'
  },
  {
    x: 553,
    y: 435,
    name: 's27'
  },
  {
    x: 545,
    y: 420,
    name: 's28'
  },
  {
    x: 531,
    y: 571,
    name: 's29'
  },
  {
    x: 511,
    y: 432,
    name: 's30'
  },
  {
    x: 493,
    y: 572,
    name: 's31'
  },
  {
    x: 477,
    y: 444,
    name: 's32'
  },
  {
    x: 433,
    y: 341,
    name: 's33'
  },
  {
    x: 379,
    y: 236,
    name: 's34'
  },
  {
    x: 298,
    y: 345,
    name: 's35'
  },
  {
    x: 245,
    y: 486,
    name: 's36'
  },
  {
    x: 310,
    y: 569,
    name: 's37'
  },
  {
    x: 262,
    y: 444,
    name: 's38'
  },
  {
    x: 263,
    y: 512,
    name: 's39'
  },
  {
    x: 277,
    y: 571,
    name: 's40'
  },
  {
    x: 224,
    y: 487,
    name: 's41'
  },
  {
    x: 234,
    y: 423,
    name: 's42'
  },
  {
    x: 208,
    y: 278,
    name: 's43'
  },
  {
    x: 246,
    y: 185,
    name: 's44'
  },
  {
    x: 237,
    y: 181,
    name: 's45'
  }],
  links: [{
    source: 's0',
    target: 's1'
  },
  {
    source: 's0',
    target: 's2'
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
    target: 's4'
  },
  {
    source: 's2',
    target: 's25'
  },
  {
    source: 's2',
    target: 's45'
  },
  {
    source: 's4',
    target: 's3'
  },
  {
    source: 's4',
    target: 's5'
  },
  {
    source: 's4',
    target: 's13'
  },
  {
    source: 's4',
    target: 's18'
  },
  {
    source: 's4',
    target: 's23'
  },
  {
    source: 's4',
    target: 's25'
  },
  {
    source: 's5',
    target: 's6'
  },
  {
    source: 's5',
    target: 's11'
  },
  {
    source: 's5',
    target: 's13'
  },
  {
    source: 's6',
    target: 's7'
  },
  {
    source: 's8',
    target: 's9'
  },
  {
    source: 's8',
    target: 's10'
  },
  {
    source: 's11',
    target: 's12'
  },
  {
    source: 's11',
    target: 's13'
  },
  {
    source: 's12',
    target: 's13'
  },
  {
    source: 's12',
    target: 's14'
  },
  {
    source: 's13',
    target: 's14'
  },
  {
    source: 's13',
    target: 's15'
  },
  {
    source: 's13',
    target: 's17'
  },
  {
    source: 's14',
    target: 's15'
  },
  {
    source: 's16',
    target: 's17'
  },
  {
    source: 's18',
    target: 's20'
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
    source: 's21',
    target: 's22'
  },
  {
    source: 's24',
    target: 's25'
  },
  {
    source: 's25',
    target: 's27'
  },
  {
    source: 's25',
    target: 's32'
  },
  {
    source: 's25',
    target: 's33'
  },
  {
    source: 's25',
    target: 's45'
  },
  {
    source: 's26',
    target: 's27'
  },
  {
    source: 's28',
    target: 's29'
  },
  {
    source: 's28',
    target: 's32'
  },
  {
    source: 's29',
    target: 's30'
  },
  {
    source: 's31',
    target: 's30'
  },
  {
    source: 's31',
    target: 's32'
  },
  {
    source: 's33',
    target: 's32'
  },
  {
    source: 's33',
    target: 's34'
  },
  {
    source: 's33',
    target: 's35'
  },
  {
    source: 's34',
    target: 's35'
  },
  {
    source: 's35',
    target: 's36'
  },
  {
    source: 's35',
    target: 's43'
  },
  {
    source: 's35',
    target: 's44'
  },
  {
    source: 's36',
    target: 's37'
  },
  {
    source: 's36',
    target: 's43'
  },
  {
    source: 's38',
    target: 's37'
  },
  {
    source: 's39',
    target: 's40'
  },
  {
    source: 's41',
    target: 's40'
  },
  {
    source: 's41',
    target: 's42'
  },
  {
    source: 's43',
    target: 's44'
  },
  {
    source: 's45',
    target: 's0'
  }]
}, { //ostrich
  nodes: [{
    x: 500,
    y: 144,
    name: 's0'
  },
  {
    x: 596,
    y: 155,
    name: 's1'
  },
  {
    x: 704,
    y: 237,
    name: 's2'
  },
  {
    x: 764,
    y: 188,
    name: 's3'
  },
  {
    x: 745,
    y: 202,
    name: 's4'
  },
  {
    x: 716,
    y: 125,
    name: 's5'
  },
  {
    x: 730,
    y: 83,
    name: 's6'
  },
  {
    x: 710,
    y: 82,
    name: 's7'
  },
  {
    x: 741,
    y: 47,
    name: 's8'
  },
  {
    x: 727,
    y: 24,
    name: 's9'
  },
  {
    x: 720,
    y: 24,
    name: 's10'
  },
  {
    x: 722,
    y: 12,
    name: 's11'
  },
  {
    x: 761,
    y: 22,
    name: 's12'
  },
  {
    x: 791,
    y: 39,
    name: 's13'
  },
  {
    x: 779,
    y: 252,
    name: 's14'
  },
  {
    x: 742,
    y: 307,
    name: 's15'
  },
  {
    x: 663,
    y: 340,
    name: 's16'
  },
  {
    x: 641,
    y: 397,
    name: 's17'
  },
  {
    x: 552,
    y: 255,
    name: 's18'
  },
  {
    x: 570,
    y: 291,
    name: 's19'
  },
  {
    x: 533,
    y: 342,
    name: 's20'
  },
  {
    x: 514,
    y: 272,
    name: 's21'
  },
  {
    x: 514,
    y: 350,
    name: 's22'
  },
  {
    x: 369,
    y: 407,
    name: 's23'
  },
  {
    x: 455,
    y: 497,
    name: 's24'
  },
  {
    x: 472,
    y: 366,
    name: 's25'
  },
  {
    x: 474,
    y: 450,
    name: 's26'
  },
  {
    x: 505,
    y: 644,
    name: 's27'
  },
  {
    x: 473,
    y: 551,
    name: 's28'
  },
  {
    x: 431,
    y: 653,
    name: 's29'
  },
  {
    x: 423,
    y: 585,
    name: 's30'
  },
  {
    x: 447,
    y: 569,
    name: 's31'
  },
  {
    x: 394,
    y: 399,
    name: 's32'
  },
  {
    x: 452,
    y: 329,
    name: 's33'
  },
  {
    x: 319,
    y: 281,
    name: 's34'
  },
  {
    x: 399,
    y: 205,
    name: 's35'
  },
  {
    x: 464,
    y: 225,
    name: 's36'
  },
  {
    x: 435,
    y: 173,
    name: 's37'
  },
  {
    x: 425,
    y: 154,
    name: 's38'
  },
  {
    x: 309,
    y: 188,
    name: 's39'
  },
  {
    x: 282,
    y: 243,
    name: 's40'
  },
  {
    x: 233,
    y: 234,
    name: 's41'
  },
  {
    x: 220,
    y: 144,
    name: 's42'
  }],
  links: [{
    source: 's0',
    target: 's1'
  },
  {
    source: 's0',
    target: 's2'
  },
  {
    source: 's0',
    target: 's18'
  },
  {
    source: 's0',
    target: 's38'
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
    target: 's14'
  },
  {
    source: 's2',
    target: 's15'
  },
  {
    source: 's2',
    target: 's17'
  },
  {
    source: 's2',
    target: 's18'
  },
  {
    source: 's3',
    target: 's5'
  },
  {
    source: 's3',
    target: 's6'
  },
  {
    source: 's4',
    target: 's5'
  },
  {
    source: 's5',
    target: 's7'
  },
  {
    source: 's5',
    target: 's8'
  },
  {
    source: 's7',
    target: 's8'
  },
  {
    source: 's7',
    target: 's9'
  },
  {
    source: 's7',
    target: 's11'
  },
  {
    source: 's8',
    target: 's12'
  },
  {
    source: 's8',
    target: 's13'
  },
  {
    source: 's10',
    target: 's12'
  },
  {
    source: 's11',
    target: 's12'
  },
  {
    source: 's12',
    target: 's13'
  },
  {
    source: 's14',
    target: 's3'
  },
  {
    source: 's14',
    target: 's15'
  },
  {
    source: 's15',
    target: 's16'
  },
  {
    source: 's17',
    target: 's18'
  },
  {
    source: 's17',
    target: 's18'
  },
  {
    source: 's17',
    target: 's22'
  },
  {
    source: 's18',
    target: 's34'
  },
  {
    source: 's18',
    target: 's35'
  },
  {
    source: 's18',
    target: 's38'
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
    source: 's20',
    target: 's21'
  },
  {
    source: 's20',
    target: 's23'
  },
  {
    source: 's21',
    target: 's23'
  },
  {
    source: 's22',
    target: 's24'
  },
  {
    source: 's23',
    target: 's28'
  },
  {
    source: 's23',
    target: 's31'
  },
  {
    source: 's24',
    target: 's25'
  },
  {
    source: 's24',
    target: 's27'
  },
  {
    source: 's26',
    target: 's27'
  },
  {
    source: 's28',
    target: 's29'
  },
  {
    source: 's28',
    target: 's30'
  },
  {
    source: 's29',
    target: 's30'
  },
  {
    source: 's32',
    target: 's28'
  },
  {
    source: 's33',
    target: 's34'
  },
  {
    source: 's34',
    target: 's35'
  },
  {
    source: 's34',
    target: 's39'
  },
  {
    source: 's34',
    target: 's40'
  },
  {
    source: 's36',
    target: 's38'
  },
  {
    source: 's37',
    target: 's39'
  },
  {
    source: 's39',
    target: 's40'
  },
  {
    source: 's39',
    target: 's41'
  },
  {
    source: 's39',
    target: 's42'
  },
  {
    source: 's40',
    target: 's41'
  },
  {
    source: 's41',
    target: 's42'
  }]
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
