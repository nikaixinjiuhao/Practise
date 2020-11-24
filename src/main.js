import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from './store/store'

Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
