import navbar from '@/components/header/index.vue' // 导航菜单
import basebar from '@/components/footer/index.vue' // 导航菜单

export default (Vue) => {
  Vue.component('navbar', navbar);
  Vue.component('basebar', basebar);
}