export default {
  navList: [{
    icon: 'fa fa-html5',
    label: 'HTML',
    index: 'html/0'
  }, {
    icon: 'fa fa-css3',
    label: 'CSS',
    index: 'css-0',
    children: [{
      label: '盒模型',
      index: 'css/0'
    }, {
      label: '基础概念',
      index: 'css/1'
    }]
  }, {
    icon: 'fa fa-jsfiddle',
    label: 'JS',
    index: 'js-0',
    children: [{
      label: '基础概念',
      index: 'js/0'
    }, {
      label: 'ES6',
      index: 'js/2'
    }, {
      label: 'Ajax',
      index: 'js/3'
    }, {
      label: 'JQuery',
      index: 'js/4'
    }, {
      label: 'DOM事件',
      index: 'js/5'
    }]
  }, {
    icon: 'fa fa-chrome',
    label: '浏览器',
    index: 'browser-0',
    children: [{
      label: 'SEO优化',
      index: 'browser/0'
    }, {
      label: '本地存储',
      index: 'browser/1'
    }]
  }]
};
