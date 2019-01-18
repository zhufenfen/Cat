import {UrlParse} from "../../utils/urlParse"
const Mock = require("mockjs");
let data = Mock.mock({
    "data|100":[{
        "classifyId|0-3":2,
        "shopId|+1":0,
        "shopTitle|2-4":"1",
        "shopImg":"@Image('340x280','#666', '#ffffff', 'Hello World')",
        "goodImage":"@Image('750x480','#666', '#ffffff', 'shopDetail')",
        "goodPrice|1-200":88,
        "goodColor":["黑色", "红色"],
        "goodSize":["S号（1-3斤）", "M号（4-5.5斤）", "L号（适合6-8斤）"],
        "goodTitle":"@csentence(3, 8)",
        "colorFlag":0,
        "sizeFlag":0,
        "num":1
    }]
})
const getShop = (config) => {
    var obj = JSON.parse(config.body);
    var arr = data.data.filter((item, index) => {
        return item.classifyId == Number(obj.classifyId);
    })
    return arr;
}
const goodDetail = (config) => {
    var obj = JSON.parse(config.body);
    var shopItem = data.data.filter((item, index) => {
        return item.shopId == Number(obj.shopId);
    })
    return shopItem[0];
}
export default{
    getShop,
    goodDetail
}
