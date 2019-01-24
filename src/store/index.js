import Vue from "vue"
import Vuex from "vuex"
import information from "./information"
<<<<<<< HEAD
=======
import home from "./home"
>>>>>>> lijipeng
import goodDetail from "./goodDetail"
import shopCart from "./shopCart"
import myMhm from "./my/myMhm"
import dell from "./my/dell"
<<<<<<< HEAD
import home from "./home"
import articleCollect from "./my_hrj"
=======
import it from "./my/it"
>>>>>>> lijipeng
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        information,
        home,
        goodDetail,
        shopCart,
        myMhm,
        dell,
<<<<<<< HEAD
        home,
        articleCollect,
=======
        it
>>>>>>> lijipeng
    }
})
export default store;