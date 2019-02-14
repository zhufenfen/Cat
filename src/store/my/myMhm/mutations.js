export default{
    handlegetFans(state,params){
       state.goodsList=params;
    },
    handleFans(state,params){
        state.fansNum=params.length
    },
    handlePostId(state,params){

    },
    handleAdd(state) {
        if(state.flag==true){
            state.fansNums++
            state.uword= "已关注"
            state.flag=false
        }else{
            state.fansNums--
            state.flag = true
            state.uword = "关注"
        }
        
    },
    handleGetIt(state,params){
        state.itList=params;
    }
}