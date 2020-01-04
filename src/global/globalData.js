import Vue from 'vue'

const $globaldata = {
  container: { // 容器样式
    header: {
      height: '60px'
    },
    footer: {
      height: '60px'
    }
  },
  imgUpload: { // 图片上传、删除
    serviceUpload: '/api/upload', // 上传图片地址
    serviceDelete: '/api/delete', // 删除图片地址
    url: '[imgPath]', // 图片服务器地址
    hash: '[imgHash]' // 随机字符串，用于删除文件
  },
  // 浏览器检测提示
  browser: {
    title: '微软都放弃IE了，您还不放弃吗？！',
    content: '请更换其他浏览器（推荐谷歌），双核浏览器请切换为谷歌内核（如360：急速模式）',
    sure: '识时务者为俊杰，通机变者为英豪！',
    cancel: '你若一意孤行坚决不换，我便坐等海枯石烂！',
    noChange: '下了决心，就要付诸于行动！若是不换选择“誓死不从”！'
  }
};

Vue.prototype.$globaldata = $globaldata;
export default $globaldata;
