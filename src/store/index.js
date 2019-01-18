import Vue from "vue"
import Vuex from "vuex"
import information from "./information"
import goodDetail from "./goodDetail"
import shopCart from "./shopCart"
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        information,
        goodDetail,
        shopCart
    }
})
export default store;