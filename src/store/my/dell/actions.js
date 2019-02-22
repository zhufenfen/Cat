import axios from "../../../lib";


export default {
    handleDell({ commit }) {
        axios.post("/getDell")
            .then((data) => {
                commit("handleDell", data);
            })
    }
}