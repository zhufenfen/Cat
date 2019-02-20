const Mock = require("mockjs");
let data = Mock.mock({
    "success": true,
    "data|10": [{
      "catId|+1": 1,
      "catPortrait": "@image('32*32', '#50B347', '#FFF', 'Mock.js')",
      "catName": "@cname",
      "number|1-99": 100,
      "catDate": "@date('yyyy-MM-dd')",
      "catTime": "@date('yyyy-MM-dd')",
      "catPhoto": "@Image('160x160','#0f86f7', '#ffffff', 'meowCircle')",
      "catContent": "@ctitle(10,15)",
      "reviewCount|1-100": 100,
      "reviewList|2": [{
        "reviewPer": "@cname",
        "reviewCon": "@ctitle(8,15)"
      }]
    }]
  })

const getCat = (config) => {
    return data
}
const getCatDetails = (config) => {
  var cat = JSON.parse(config.body);
  // console.log(cat);
  
  return data.data.find(v => v.catId === cat.catId);
}
export default{
    getCat,
    getCatDetails
}
