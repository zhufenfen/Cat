const Mock = require("mockjs");
let data = Mock.mock({
    "data|3":[{
        "classifyId|0-3":2,
        "shopId|+1":0,
        "goodImage":"@Image('160x160','#666', '#ffffff', 'shopOrder')",
        "goodPrice|30-200":99,
        "goodColor":"红色",
        "goodSize":"S号",
        "goodTitle":"@csentence(3, 8)",
        "num":1,
    }]
})
const shopOrder = (config) => {
    return data.data;
}
export default{
    shopOrder
}