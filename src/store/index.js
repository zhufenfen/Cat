import Vue from "vue"
import Vuex from "vuex"
import articleCollect from "./my_hrj"
Vue.use(Vuex)

const store = new Vuex.Store({
     modules:{
        articleCollect,
     }
})
export default store;