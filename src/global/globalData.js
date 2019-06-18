import Vue from 'vue'

const $globaldata = {
  imgUpload: { // 图片上传、删除
    serviceUpload: '/api/upload', // 上传图片地址
    serviceDelete: '/api/delete', // 删除图片地址
    url: '[imgPath]', // 图片服务器地址
    hash: '[imgHash]' // 随机字符串，用于删除文件
  },
  interfaceMapping: (key) => { // 接口映射（错误提示）
    return {
      '/admin/org/all': '获取所有用户 - 失败'
    }[key] || '服务器错误，请重试！'
  }
};

Vue.prototype.$globaldata = $globaldata;
export default $globaldata;
