const Mock = require("mockjs");
let data = Mock.mock({
  "success": true,
  "data|3": [{
    "catDetId|+1": 1,
    "catDetTime": "@date('yyyy-MM-dd')",
    "catDetContent": "@csentence(5)",
    "catDetPortrait": "@Image('32*32', '#50B347', '#f0f', 'Mock.js')",
    "catDetName": "@cname(2,3)",
  }]
})
const getInfo=()=>{
  return Mock.mock({
  
      "catDetId": 1,
      "catDetTime": "@date('yyyy-MM-dd')",
      "catDetContent": "@csentence(5)",
      "catDetPortrait": "@Image('32*32', '#50B347', '#f0f', 'Mock.js')",
      "catDetName": "@cname(2,3)",
  })
  }

// console.log(date);

const getReview = (config) => {
  return data
}
const addReview = (v) => {
  // console.log(v.body);
  let info = JSON.parse(v.body);
  var arr = data.data;
  let date = getInfo()
  // console.log(date.catDetId, arr.length);
  date.catDetId = arr.length + 1;
  date.catDetContent = info.val;
  arr.push(date)
  return arr

}
export default {
  getReview,
  addReview
}
