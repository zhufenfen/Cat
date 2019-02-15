const Mock = require("mockjs");
let data = Mock.mock({
  "success": true,
  "data|50": [{
    "disId|+1": 1,
    "disPhoto": "@Image('160x160','#0f86f7', '#ffffff', 'discover')",
    "number|1-999": 100,
    "disContent": "@ctitle(5)",
    "disCont": "@csentence(50,100)",
    "disPortrait": "@image('32*32', '#50B347', '#f0f', 'Mock.js')",
    "disName": "@cname",
  }]
})

const getDiscover = (config) => {

  return data.data
}
const getDetails = (config) => {

  var dis = JSON.parse(config.body);
  return data.data.find(v => v.disId === dis.disId);
}

//点赞
// const up = (config) => {
//   console.log(config);
//   var dis = JSON.parse(config.body);
//     console.log(dis.type);
//     for (var i = 0; i < data.data.length; i++) {
//        console.log(1111);
//       if ((data.data[i].disId) === (dis.disId)) {
     
//         if (dis.type/1 == 1) {  
//         data.data[i].number += 1;
//         }else{
//           data.data[i].number -= 1;
//         }
//       }
//   }
//   return data.data
// }
export default {
  getDiscover,
  getDetails,
}
