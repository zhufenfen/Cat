const Mock = require("mockjs");
let data = Mock.mock({
    "success": true,
    "data|20":[{
        "photo": "@image('160x180','@color()','#000', 'photo')",
        "title": "@cword(5,15)",
        "content": "@cparagraph",
        "name": "@cword(2,4)",
        "Number|1-100": 100,
        "id|+1": 1,
        "pet": "@image('694x505','@color()','#000', 'photo')"
    }]
})
const getHome =(config)=>{
    console.log(config.url)
    // var list = JSON.parse(config.body)
    // console.log(list)
    return data
}
export default {getHome}