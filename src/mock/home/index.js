import Api from "../../api/home/index"
import Mock from "mockjs";
Mock.mock("/getHome","post",Api.getHome);