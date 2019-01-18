import Vue from "vue"
import Vuex from "vuex"
<<<<<<< HEAD
import information from "./information"
import goodDetail from "./goodDetail"
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        information,
        goodDetail
=======
import myMhm from "./my/myMhm"
import dell from "./my/dell"
import it from "./my/it"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        namespaced:true,
        myMhm,
        dell,
        it
>>>>>>> mhm
    }
})

export default store;