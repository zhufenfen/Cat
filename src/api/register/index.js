// import Mock from "mockjs";
const Mock = require("mockjs");
let data = Mock.mock({
   "data": [
   ]
})

const Register = (config) => {
   return {
      status:0,
      info:"注册成功"
   }
}

export default Register;