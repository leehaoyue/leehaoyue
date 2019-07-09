import Vue from 'vue';
import App from './App.vue';
// 路由管理器
import router from './router';
// vuex-状态管理
import store from './store';
// 资源缓存
import './registerServiceWorker';

// promise兼容性处理（ie、火狐）
import promise from 'es6-promise';
// axios-HTTP库
import axios from 'axios';
import '@/axios/index';
// CryptoJS-加密生成数字签名
import CryptoJS from 'crypto-js';
// Mock-随机数据
import '@/mock/index.js';
// lodash-实用工具库
import lodash from 'lodash';
// formCreate-表单生成器
import formCreate from 'form-create/element';
// Element-桌面端组件库
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
// ECharts-数据可视化
import echarts from 'echarts';
// swiper-轮播
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
// font-awesome-矢量图标
import 'font-awesome/css/font-awesome.css';
// 全局变量
import '@/global/globalData';
// 全局方法
import globalmethod from '@/global/globalMethod';
// 全局组件
import components from '@/global/globalComponents';

Vue.use(formCreate);
Vue.use(Element);
Vue.use(VueAwesomeSwiper);
Vue.use(components);

promise.polyfill();

Vue.prototype.$axios = axios;
Vue.prototype.$globalmethod = globalmethod;
Vue.prototype.$CryptoJS = CryptoJS;
Vue.prototype.$lodash = lodash;
Vue.prototype.$echarts = echarts;

// 取消vue所有的日志与警告
Vue.config.silent = true;
// 阻止vue在启动时生成生产提示
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  mounted() {
    this.$globalmethod.defaultConsole();
  },
  render: h => h(App)
}).$mount('#app');
