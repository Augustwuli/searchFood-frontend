// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入 API 文件
import api from './api'
// 引入公共函数文件
import utils from './utils'
import 'lib-flexible/flexible'

// 将 api 方法绑定到全局
Vue.prototype.$api = api
Vue.prototype.$utils = utils
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
