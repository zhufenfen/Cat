import axios from "../../lib"
export default{
    getGoodOrder({commit}){
        axios({
            method:"post",
            url:"/shopOrder"
        }).then(data=>{
            // console.log(data);
            commit("getGoodOrder", data);
        })
    },
}