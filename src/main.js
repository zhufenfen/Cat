// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from "./store"
import "./mock/shop"
import "./mock/my"
import "./mock/login"
import "./mock/address"
import "./mock/register"
import "../node_modules/swiper/dist/css/swiper.min.css"
import "./common/css/reset.css"
import "./common/js/flexble"
import Observer from "./utils/observer"
Vue.prototype.Observer = Observer
import axios from "./lib"
Vue.prototype.$axios = axios
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
