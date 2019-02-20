const Mock = require("mockjs");
let data = Mock.mock({
    "data|3-5":[
        {
            "name":"@ctitle(3)",
            "tel":/^1(3|5|7|8)[0-9]{9}$/,
            "side":"@county(true)",
            "flag":"false"
        }
    ]
})

const Address = (config)=>{
    return data.data
}

export default Address;