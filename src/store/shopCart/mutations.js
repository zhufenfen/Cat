export default{
    getShopCart(state, params){
        state.shopList = params;
    },
    handleCheck(state, index){
        state.shopList[index].flag = !state.shopList[index].flag;
        let flag = true;
        state.shopList.map((item) => {
            if(!item.flag){
                flag = false;
            }
        })
        state.checkAll = flag;
    },
    handleCheckAll(state, index){
        state.checkAll = !state.checkAll;
        state.shopList.map((item) => {
            item.flag = state.checkAll;
        })
    },
    handleAdd(state, index){
        state.shopList[index].num++;
    },
    handleReduce(state, index){
        if(state.shopList[index].num <= 1){
            state.shopList[index].num = 1
        }else{
            state.shopList[index].num--
        }
    }
}