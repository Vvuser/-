import axios from 'axios';
import router from 'vue-router'
import { Message } from 'element-ui';
import { Loading } from 'element-ui';

axios.defaults.timeout = 10000;
axios.defaults.baseURL ='http://192.168.18.29:30500';
let loading
//http request 拦截器
axios.interceptors.request.use(
  config => {
    loading = Loading.service({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.3)'
    });
    const token =  sessionStorage.getItem("SHANGJIAOSUOUSERTOKEN")
    // config.data = JSON.stringify(config.data);
    if(token != null){
      config.headers['token'] = token
    }
    config.headers['Content-Type'] = 'application/json'
    return config;
  },
  error => {
    loading.close()
    Message.error("加载失败")
    return Promise.reject(error);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    loading.close()
    if (response.data.data != "" && response.data.data != null && response.data.data != undefined) {
      if(response.data.data.hasOwnProperty("token")){
        sessionStorage.setItem("SHANGJIAOSUOUSERTOKEN",response.data.data.token)
      }
    }
    // 登录失效
    // if(response.data.errCode == 2){
    //   router.push({
    //     path:"/login",
    //     querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
    //   })
    // }
    return response;
  },
  error => {
    loading.close()
    Message.error("加载失败")
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }