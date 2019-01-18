import axios from "axios"
export default{
    handleGoodDetail({commit}, params){
        axios.post("/goodDetail", {
            shopId:params
        }).then(data=>{
            commit("handleGoodDetail", data);
        })
    }
}