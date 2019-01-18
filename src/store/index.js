import Vue from "vue"
import Vuex from "vuex"
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
    }
})

export default store;