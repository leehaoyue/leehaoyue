export default {
  navList: [{
    icon: 'fa fa-html5',
    label: 'HTML',
    index: 'html/0'
  }, {
    icon: 'fa fa-css3',
    label: 'CSS',
    index: 'css',
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
    index: 'js',
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
    }, {
      label: '面向对象',
      index: 'js-7',
      children: [{
        label: '创建对象和原型链',
        index: 'js/6'
      }, {
        label: '类与继承',
        index: 'js/7'
      }]
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
    }, {
      label: '其他',
      index: 'browser/2'
    }]
  }, {
    icon: 'fa fa-google-plus',
    label: 'HTTP',
    index: 'http',
    children: [{
      label: '基础概念',
      index: 'http/0'
    }, {
      label: '扩展',
      index: 'http/1'
    }, {
      label: '安全',
      index: 'http/3'
    }]
  }, {
    icon: 'fa fa-th-list',
    label: '其他',
    index: 'other',
    children: [{
      label: '精简概括',
      index: 'other/0'
    }]
  }]
};
