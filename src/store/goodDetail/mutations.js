export default{
    handleGoodDetail(state, params){
        state.goodDetail = params;
    },
    handleGoodColor(state, params){
        state.goodDetail.colorFlag = params;
    },
    handleGoodSize(state, params){
        state.goodDetail.sizeFlag = params;
    },
    handleGoodReduce(state){
        if(state.goodDetail.num >= 2){
            state.goodDetail.num--;
        }else{
            state.goodDetail.num = 1;
        }
    },
    handleGoodAdd(state){
        state.goodDetail.num++;
    }
}