import {UrlParse} from "../../utils/urlParse"
const qs = require("querystring");
const Mock = require("mockjs");
let data = Mock.mock({
    "data|15": [
        {
            "myId|+1": 0,
            "myImg": "@image('128x128','#444','#FFF','Mock.js')",
            "myName": "@cname",

        }
    ]
})
    let data1 = Mock.mock({
        "data|15": [
            {
                "myId|+1": 0,
                "myName": "@cname",
                "itMessage|10":[
                    {
                        "myImg": "@image('128x128','#444','#FFF','Mock.js')",
                        time: "@date('MM-dd')",
                        "txt": "@cparagraph()",
                    }
                ]
                    
                }
               

            
        ]
    })

const getFans = (config)=>{
    return data.data;  
}

const getIt = (config) => {
    var id = JSON.parse(config.body)
  //找到对应id返回
    for(var i in data1.data){
        if (id.myId == data1.data[i].myId) {
            var data = data1.data[i]
            return data;
        }
    }
   
 
}


export default{
    getFans,
    getIt
   
}