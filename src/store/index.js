import Vue from "vue"
import Vuex from "vuex"
import information from "./information"
import home from "./home"
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        information,home
    }
})
export default store;