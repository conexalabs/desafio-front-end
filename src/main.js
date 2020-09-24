import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/dist/carousel'
import $ from 'jquery'
import store from './store'

Vue.config.productionTip = false

const vm = new Vue({
  router,
  $,
  store,
  render: h => h(App)
}).$mount('#app')

export { vm }
