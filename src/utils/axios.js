import axios from 'axios';
import router from '../router'
import { Message } from 'element-ui';
import { Loading } from 'element-ui';
import store from '../store/';

axios.defaults.timeout = 200000;
// axios.defaults.baseURL ='/firm';
axios.defaults.baseURL ='http://120.92.76.237:8888/firm/'

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
    store.commit("setStatus",0) //设置请求状态
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
    store.commit("setStatus",1)
    return Promise.reject(error);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    loading.close()
    if(response.data.status == 40301){//token失效,过期
      Message.error("登录已过期，请重新登录")
      router.replace('/login')
    }else if (response.data.status == 40307) { //token即将失效
      sessionStorage.setItem("SHANGJIAOSUOUSERTOKEN",response.data.data.token)
      // console.log("response 重新请求参数",response.config);
      //重新请求
      return axios(response.config)
    }else {
      store.commit("setStatus",1)
      return response;
    }
  },
  error => {
    loading.close()
    store.commit("setStatus",1)
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