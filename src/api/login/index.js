// import Mock from "mockjs";
const Mock = require("mockjs");
let data = Mock.mock({
   "data": [
      {
         "uid": "11",
         "uname": "18812345670",
         "upwd": "12345670"
      },
      {
         "uid": "12",
         "uname": "18812345671",
         "upwd": "12345671"
      },
      {
         "uid": "13",
         "uname": "18812345672",
         "upwd": "12345672"
      },
      {
         "uid": "14",
         "uname": "18812345673",
         "upwd": "12345673"
      }
   ]
})

const Login = (config) => {
   let body = JSON.parse(config.body);
   let userlist = data.data;
   for (let index = 0, len = userlist.length; index < len; index++) {
      if (body.uname != "") {
         if (userlist[index].uname == body.uname) {
            if (userlist[index].upwd == body.upwd) {
               return {
                  status: 0,
                  info: "登录成功",
                  uid: userlist[index].uid
               }
            }
         } else {
            if (index == len - 1) {
               return {
                  status: 1,
                  info: "密码错误",
               }
            }
         }
      }
   }
   return {
      status: 2,
      info: "账户不存在"
   }

}

export default Login;