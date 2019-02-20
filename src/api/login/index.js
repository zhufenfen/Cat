// import Mock from "mockjs";
const Mock = require("mockjs");
const JWT = require("jsonwebtoken");
import { setCookie } from "../../utils/auth"
let data = Mock.mock({
   "data": [
      {
         "uid": "11",
         "uname": "13598591209",
         "upwd": "666"
      },
      {
         "uid": "12",
         "uname": "13837670580",
         "upwd": "666"
      },
      {
         "uid": "13",
         "uname": "18738997071",
         "upwd": "666"
      },
      {
         "uid": "14",
         "uname": "18738981217",
         "upwd": "666"
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
               let payload = {
                  user:userlist[index].uname
               }
              let secret = "bk1819";
              let token = JWT.sign(payload, secret, {expiresIn:"1h"});
              setCookie("X-Token", token);
              setCookie("user", userlist[index].uname);
              /* document.cookie="X-Token="+token;
              document.cookie="user="+userlist[index].uname; */
               return {
                  status: 0,
                  info: "登录成功",
                  uid: userlist[index].uid
               }
            } else {
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