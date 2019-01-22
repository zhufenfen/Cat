import Vue from "vue"
import Vuex from "vuex"
import information from "./information"
import home from "./home"
import goodDetail from "./goodDetail"
import shopCart from "./shopCart"
import myMhm from "./my/myMhm"
import dell from "./my/dell"
import it from "./my/it"
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        information,
        home,
        goodDetail,
        shopCart,
        myMhm,
        dell,
        it
    }
})




export default store;