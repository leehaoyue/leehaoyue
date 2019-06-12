import Vue from 'vue';
import { MessageBox, Loading } from 'element-ui';

export default {
  // 获取数据
  getData (url, method, params, baseURL) {
    let methods = 'post';

    if (method) {
      methods = method
    }
    let obj = methods === 'post' ? {
      data: params
    } : {
      params: params
    };

    return new Promise((resolve, reject) => {
      Vue.axios({...obj,
        baseURL: baseURL || process.env.API,
        method: methods,
        url: url
      }).then((res) => {
        if (res.data && (res.data.code===200 || res.data.code==='success')) {
          resolve(res);
        } else {
          Loading.service({customClass: 'pageLoading', background: 'transparent'}).close();
          MessageBox({
            title: '提示',
            message: res.data.msg,
            showCancelButton: true,
            type: 'warning'
          }).then(action => {
            if (action === 'confirm') {
              this.getData(url, methods, params, baseURL)
            }
          })
        }
      }).catch((err) => {
        reject(err);
      })
    });
  },
  // 上传文件
  uploadFile(url, method, params, baseURL) {
    let methods = 'post';

    if (method) {
      methods = method
    }
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      let paramsObj = Object.assign({}, params);

      for (let i in paramsObj) {
        if (paramsObj[i] in paramsObj) {
          delete paramsObj[i];
          break;
        }
      }
      for (let i in paramsObj) {
        if (Array.isArray(paramsObj[i])) {
          for (let j in paramsObj[i]) {
            formData.append(i, paramsObj[i][j], new Date().getTime())
          }
        } else {
          formData.append(i, paramsObj[i])
        }
      }
      let obj = methods === 'post' ? {
        data: formData
      } : {
        params: formData
      };

      Vue.axios({...obj,
        url: url,
        method: methods,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        if (res.data && (res.data.code===200 || res.data.code==='success')) {
          resolve(res);
        } else {
          Loading.service({customClass: 'pageLoading', background: 'transparent'}).close();
          MessageBox({
            title: '提示',
            message: res.data.msg,
            showCancelButton: true,
            type: 'warning'
          }).then(action => {
            if (action === 'confirm') {
              this.uploadFile(url, methods, params, baseURL)
            }
          })
        }
      }).catch((err) => {
        reject(err);
      })
    });
  }
}