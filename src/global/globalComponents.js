import navbar from '@/components/header/index.vue' // 导航菜单
import basebar from '@/components/footer/index.vue' // 底部信息
import navMenu from '@/components/auxiliary/navMenu/index.vue' // 侧边栏
import basicEcharts from '@/components/auxiliary/echarts/index.vue' // Echarts基础模型

export default (Vue) => {
  Vue.component('navbar', navbar);
  Vue.component('basebar', basebar);
  Vue.component('navMenu', navMenu);
  Vue.component('basicEcharts', basicEcharts);
}