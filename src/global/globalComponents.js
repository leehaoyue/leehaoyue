import asideTree from '@/components/auxiliary/asideTree/index.vue' // 树状结构侧边栏
import normalList from '@/components/auxiliary/normalList/index.vue' // 常态任务列表
import typeList from '@/components/auxiliary/typeList/index.vue' // 任务类型列表
import memberList from '@/components/auxiliary/memberList/index.vue' // 人员调配列表
import taskList from '@/components/auxiliary/taskList/index.vue' // 闭环任务列表
import formDetail from '@/components/auxiliary/formDetail/index.vue' // 任务详情
import headerBar from '@/components/header/index.vue' // 顶部导航栏
import collapse from '@/components/auxiliary/collapse/index.vue' // 折叠面板
import bottomLine from '@/components/auxiliary/bottomLine/index.vue' // 底部分割线
import photoPreview from '@/components/auxiliary/photoPreview/index.vue' // 图片预览

export default(Vue) => {
  Vue.component('asideTree', asideTree);
  Vue.component('normalList', normalList);
  Vue.component('typeList', typeList);
  Vue.component('memberList', memberList);
  Vue.component('taskList', taskList);
  Vue.component('formDetail', formDetail);
  Vue.component('headerBar', headerBar);
  Vue.component('collapse', collapse);
  Vue.component('bottomLine', bottomLine);
  Vue.component('photoPreview', photoPreview);
}