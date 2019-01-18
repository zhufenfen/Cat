export default{
    result(state){
        let sumPrice = 0;
        state.shopList.map((item) => {
            if(item.flag){
                sumPrice += item.num * item.goodPrice;
            }
        })
        return{
            sumPrice
        }
    }
}