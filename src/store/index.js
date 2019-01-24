import Vue from "vue"
import Vuex from "vuex"
import information from "./information"
import goodDetail from "./goodDetail"
import myMhm from "./my/myMhm"
import dell from "./my/dell"
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        information,
        goodDetail,
        myMhm,
        dell,
    }
})




export default store;