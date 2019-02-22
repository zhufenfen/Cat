import axios from "../../lib"
export default {
    handleGoodList({ commit, state }, params) {
        if (state.pageindex <= state.maxPage) {
            axios({
                method: "post",
                url: "/getShop",
                data: {
                    classifyId: params,
                    page: state.pageindex
                }
            }).then(data => {
                commit("handleGoodList", data);
            })
        }
    },
    handleGoodUpdate({ dispatch }, params) {
        dispatch("handleGoodList", params);
    }
}