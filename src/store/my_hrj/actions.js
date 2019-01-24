import axios from "axios";
export default {
    handle({commit}){
        axios({
          method:"post",
          url:"/miaoquan/mock/5c370dccf93efc493ce9c79b/example/article"
        }).then((data)=>{
            commit("handle",data.data);
        })
    },
    collect({commit}){
        axios({
            method:"post",
            url:"/miaoquan/mock/5c370dccf93efc493ce9c79b/example/collect"
        }).then((data)=>{
            commit("collect",data.data);
        })
    }
}