import axios from 'axios';
import Qs from 'qs';
import $server from './interfaceList.js';
import { Message, MessageBox, Loading } from 'element-ui';

const $instance = axios.create({
  transformRequest: [data => { // 请求数据处理（防止后端接收不到参数）
    return Qs.stringify(data);
  }],
  transformResponse: [data => { // ie兼容性（解决无返回数据问题）
    if (Boolean(window.ActiveXObject) || 'ActiveXObject' in window || navigator.userAgent.indexOf('MSIE') >= 0) {
      return JSON.parse(data);
    }
    return data;
  }],
  baseURL: process.env.API,
  responseType: 'json',
  timeout: 5000, // 超时定时器
  cancelToken: axios.CancelToken.source().token, // 取消请求（防止一个接口请求多次）
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

// 自定义拦截器
$instance.interceptors.request.use(res => {
  return res;
}, () => {
  // 请求失败
  Loading.service({customClass: 'pageLoading', background: 'transparent'}).close();
  Message.warning('请求失败，请重试！');
});

$instance.interceptors.response.use(res => {
  // 响应成功
  return res;
}, () => {
  // 响应失败
  Loading.service({customClass: 'pageLoading', background: 'transparent'}).close();
  Message.error('响应失败，请重试！');
});

axios.jsonp = ({url, name, callback}) => {
  let callbackName = name, callbackFC = callback;

  return new Promise((resolve, reject) => {
    let JSONP = document.createElement('script');

    JSONP.type = 'text/javascript';
    JSONP.src = `${url}?${callbackName}=${callbackFC}`;
    document.getElementsByTagName('head')[0].appendChild(JSONP);
    window[callbackName] = (res) => {
      resolve(res);
    }
    setTimeout(() => {
      document.getElementsByTagName('head')[0].removeChild(JSONP);
    }, 500)
  })
}


export default {
  getData({url, method, params, baseURL, responseType}) {
    return new Promise((resolve, reject) => {
      if ($server[url] && $server[url].isMock) {
        let res = {
          data: $server[url].data()
        };

        resolve(res);
        return;
      }
      Loading.service({customClass: 'pageLoading', background: 'transparent'});
      let methods = 'post', obj = null;

      if (method) {
        methods = method;
      }
      obj = methods === 'post' ? {
        data: params
      } : {
        params: params
      };
      axios({...obj,
        baseURL: baseURL || process.env.API,
        responseType: responseType || 'json',
        method: methods,
        url: url
      }).then((res) => {
        resolve(res);
        Loading.service({customClass: 'pageLoading', background: 'transparent'}).close();
        // if (res.data && res.data.code===200) {
        //   resolve(res);
        // } else {
        //   Loading.service({customClass: 'pageLoading', background: 'transparent'}).close();
        //   MessageBox({
        //     title: '提示',
        //     // message: res.data.msg,
        //     message: $server[url] ? $server[url].errmsg : '请求错误',
        //     showCancelButton: true,
        //     type: 'warning'
        //   }).then(action => {
        //     if (action === 'confirm') {
        //       this.getData({url, methods, params, baseURL, responseType});
        //     }
        //   });
        // }
      }).catch(err => {
        Loading.service({customClass: 'pageLoading', background: 'transparent'}).close();
        reject(err);
      });
    });
  },
  jsonp(url, index) {
    return axios.jsonp(url, index);
  }
};
