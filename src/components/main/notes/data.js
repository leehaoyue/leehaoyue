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
    }, {
      label: '页面布局',
      index: 'css/2'
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
      index: 'js-6',
      children: [{
        label: '创建对象和原型链',
        index: 'js/oop/0'
      }, {
        label: '类与继承',
        index: 'js/oop/1'
      }]
    }, {
      label: '模块化',
      index: 'js/7'
    }, {
      label: '手写方法',
      index: 'js/8'
    }]
  }, {
    icon: 'fa fa-chrome',
    label: '浏览器',
    index: 'browser-0',
    children: [{
      label: '本地存储',
      index: 'browser/0'
    }, {
      label: '事件渲染通信',
      index: 'browser/1'
    }, {
      label: 'cookie',
      index: 'browser/2'
    }, {
      label: '跨域通信',
      index: 'browser-3',
      children: [{
        label: '基本概念',
        index: 'browser/crossdomain/0'
      }, {
        label: '解决方法',
        index: 'browser/crossdomain/1'
      }]
    }, {
      label: '性能优化',
      index: 'browser-4',
      children: [{
        label: 'SEO',
        index: 'browser/seo/0'
      }, {
        label: '网络与渲染',
        index: 'browser/seo/1'
      }, {
        label: '优化清单',
        index: 'browser/seo/2'
      }]
    }]
  }, {
    icon: 'fa fa-google-plus',
    label: '网络',
    index: 'http',
    children: [{
      label: '基础概念',
      index: 'http/0'
    }, {
      label: '扩展',
      index: 'http/1'
    }, {
      label: 'CSRF与XSS',
      index: 'http/2'
    }, {
      label: 'XML与JSON',
      index: 'http/3'
    }, {
      label: '常见安防原理',
      index: 'http/4'
    }]
  }, {
    icon: 'fa fa-th-list',
    label: '其他',
    index: 'other',
    children: [{
      label: '精简概括',
      index: 'other/0'
    }, {
      label: '交互与结构',
      index: 'other/1'
    }, {
      label: '错误监控',
      index: 'other/2'
    }, {
      label: '计算机基础',
      index: 'other/3'
    }, {
      label: 'Git使用',
      index: 'other/4'
    }, {
      label: 'PS相关',
      index: 'other/5'
    }, {
      label: 'MVC',
      index: 'other/6'
    }, {
      label: 'MVVM',
      index: 'other/7'
    }]
  }, {
    icon: 'fa fa-database',
    label: '数据库',
    index: 'database',
    children: [{
      label: '数据结构',
      index: 'database/0'
    }, {
      label: 'mongoDB与MySQL',
      index: 'database/1'
    }]
  }, {
    icon: 'fa fa-connectdevelop',
    label: '框架',
    index: 'frame',
    children: [{
      label: '相关概念',
      index: 'frame/0'
    }, {
      label: '一些差异',
      index: 'frame/1'
    }, {
      label: 'Vue',
      index: 'frame/2'
    }, {
      label: 'React',
      index: 'frame/3'
    }]
  }]
};
