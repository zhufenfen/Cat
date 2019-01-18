import axios from "../../lib"
export default{
    getShopCart({commit}){
        axios({
            method:"post",
            url:"/shopCart"
        }).then(data=>{
            // console.log(data);
            commit("getShopCart", data);
        })
    },
    /* handleDel({dispatch}, index){
        axios({
            method:"delete",
            url:"/miaoquan/delShopCart"
        }).then(() => {
            dispatch("handleGoodsList");
        })
    } */
}