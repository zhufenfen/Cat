import Vue from "vue"
import Vuex from "vuex"
import axios from "../../lib"
import { getCookie } from "../../utils/auth"
Vue.use(Vuex);
let state = {
    token: getCookie(),
    userName: getCookie("user")
}
let mutations = {
    handleUserLogin(state, params) {
        if (params.status == 0) {
            state.token = getCookie(),
                state.userName = getCookie("user")
        }
    }
}
let actions = {
    handleUserLogin({ commit }, params) {
        /* axios({
            method:"post",
            url:"/getLogin",
            data:params
        }).then((data) => {
            commit("handleUserLogin",data)
        }) */
        axios.post("/getLogin", params).then((data) => {
            commit("handleUserLogin", data)
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}