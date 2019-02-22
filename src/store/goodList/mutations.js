export default{
    handleGoodList(state, params){
        state.goodList = [...state.goodList, ...params.data];
        state.pageindex++;
        state.maxPage = params.maxPage;
    }
}