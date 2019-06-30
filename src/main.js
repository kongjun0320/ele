import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Indicator } from 'mint-ui';
Vue.use(MintUI)


Vue.prototype.$axios = axios
Vue.config.productionTip = false

//拦截器

axios.interceptors.request.use(
  config => {
    Indicator.open()
    return config
  },
  error => {
    return Promise.reject(error);
  }
)
axios.interceptors.response.use(
  response => {
    Indicator.close();
    return response;
  },
  error => {
    return Promise.reject(error);
  }
)

//路由导航钩子
router.beforeEach((to, from, next) => {
  let isLogin = localStorage.getItem('isLogin')
  if (to.path === '/login') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
