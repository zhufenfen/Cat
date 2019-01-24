import axios from "../../lib"

export default{
    handleGetData({commit},userInfo){
        axios.post("/api/api/login",userInfo)
        .then((data)=>{
            commit("handleGetData",data)
        })
    }
}