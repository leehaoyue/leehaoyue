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
  }
};

Vue.prototype.$globaldata = $globaldata;
export default $globaldata;
