export default {
  navList: [{
    icon: 'fa fa-html5',
    label: 'HTML',
    index: 'html/0'
  }, {
    icon: 'fa fa-css3',
    label: 'CSS',
    index: 'css/0'
  }, {
    icon: 'fa fa-jsfiddle',
    label: 'JS',
    index: 'js/0',
    children: [{
      icon: 'fa fa-bandcamp',
      label: '简介',
      index: 'js/1',
      children: [{
        icon: '',
        label: '背景',
        index: 'js/1-1'
      }, {
        icon: '',
        label: '引用',
        index: 'js/1-2'
      }]
    }, {
      icon: 'fa fa-quora',
      label: '变量',
      index: 'js/2',
      children: [{
        icon: '',
        label: '隐式转换',
        index: 'js/2-1'
      }]
    }, {
      icon: 'fa fa-h-square',
      label: '函数',
      index: 'js/3'
    }, {
      icon: 'fa fa-window-restore',
      label: '作用域',
      index: 'js/4'
    }, {
      icon: 'fa fa-circle-o',
      label: '面向对象',
      index: 'js/5',
      children: [{
        icon: '',
        label: '原型链',
        index: 'js/5-1'
      }, {
        icon: '',
        label: '继承',
        index: 'js/5-2'
      }, {
        icon: '',
        label: 'this',
        index: 'js/5-3'
      }]
    }, {
      icon: 'fa fa-compass',
      label: 'ES6',
      index: 'js/es6/1'
    }]
  }]
};
