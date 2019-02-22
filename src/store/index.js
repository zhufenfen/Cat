import Vue from "vue"
import Vuex from "vuex"
import information from "./information"
import goodDetail from "./goodDetail"
import shopCart from "./shopCart"
import goodOrder from "./goodOrder"
import myMhm from "./my/myMhm"
import dell from "./my/dell"
import home from "./home"
import login from "./login"
import articleCollect from "./my_hrj"
import goodList from "./goodList"
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        information,
        home,
        goodDetail,
        shopCart,
        goodOrder,
        myMhm,
        dell,
        articleCollect,
        login,
        goodList
    }
})
export default store;