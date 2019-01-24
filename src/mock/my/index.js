const Mock =require("mockjs");
import Api from "../../api/my/my.js"
Mock.mock("/getFans","post",Api.getFans);
Mock.mock("/getIt","post",Api.getIt)


