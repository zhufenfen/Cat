import Vue from "vue"
import Vuex from "vuex"
import information from "./information"
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        information
    }
})
export default store;