// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'

import '@/permission'

import 'es6-promise/auto'

import store from './store'

Vue.config.productionTip = false

let vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
Vue.use(vue)
