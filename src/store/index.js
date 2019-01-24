import Vue from "vue"
import Vuex from "vuex"
import information from "./information"
import goodDetail from "./goodDetail"
import shopCart from "./shopCart"
import myMhm from "./my/myMhm"
import dell from "./my/dell"
import it from "./my/it"
import home from "./home"
import articleCollect from "./my_hrj"
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        information,
        goodDetail,
        shopCart,
        myMhm,
        dell,
        it,
        home,
        articleCollect,
    }
})
export default store;