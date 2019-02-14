const Mock = require("mockjs");
let data = Mock.mock({
    "data|9":[{
        "classifyId|0-3":2,
        "shopId|+1":0,
        "goodImage":"@Image('160x160','#666', '#ffffff', 'shopDetail')",
        "goodPrice|1-200":88,
        "goodColor":"深红",
        "goodSize":"S号（1-3斤）",
        "goodTitle":"@csentence(3, 8)",
        "num|1-3":2,
        "flag":true,
    }]
})
const shopCart = (config) => {
    return data.data;
}
export default{
    shopCart
}