import Vue from "vue"
import Vuex from "vuex"
import information from "./information"
import goodDetail from "./goodDetail"
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        information,
        goodDetail
    }
})
export default store;