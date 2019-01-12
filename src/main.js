// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import "../node_modules/swiper/dist/css/swiper.min.css"
import MintUI from "mint-ui"
import axios from "axios"
import "mint-ui/lib/style.css"
import "./common/css/reset.css"
import "./common/js/flexble"
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
