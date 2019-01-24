import axios from "axios"
export default{
    homeData({commit}){
        axios({
            method:"post",
            url:"/miaoquan/mock/5c35a4f7ce7b4303bd93fc09/example/home"
        }).then((data)=>{
            commit("homeData",data.data)
        })
    }
}