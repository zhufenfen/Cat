import axios from "../../../lib";
export default{
     handleGoods({commit}){
        axios({
            method:"post",
            url:"/api/mock/5c383f1a29ea8d24177b81ae/api/api",
        })
        .then((data)=>{
            commit("handleGoods",data.goods);
        })
     }
}