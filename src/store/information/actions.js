import axios from "axios"

export default{
    informationData({commit}){
        axios({
            method:"post",
            url:"/miaoquan/mock/5c35a4f7ce7b4303bd93fc09/example/photo",
        }).then((data)=>{
            commit("informationData",data.data)
            
        })
    }
}