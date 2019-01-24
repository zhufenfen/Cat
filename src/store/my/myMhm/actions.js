import axios from "../../../lib";
export default{
    handlegetFans({commit}){
        axios.post("/getFans")
        .then((data)=>{
            commit("handlegetFans",data); 
        })
     },
    handlePostId({commit},params){
        //将id传给后端
        axios.post("/getIt", {
            myId:params
        })//接收后端返回的数据
        .then((data) => {
            commit("handleGetIt", data); 
        })      
    },
    handleGetIt(){
    },
   

     handleFans({commit}){
         axios.post("/getFans", {

         })
             .then((data) => {
                 commit("handleFans", data)
             })
     }
}
