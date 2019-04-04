// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入默认样式
Vue.config.productionTip = false
// 引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入axios
import {get, post} from './utils/axios.js'
Vue.prototype.$post=post;
Vue.prototype.$get=get;
import '../static/css/default.css'
//引入vuex
import store from './store/index'
/* eslint-disable no-new */
export const vue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
