import Api from "../../api/login/index";
import Mock from "mockjs";
Mock.mock("/getLogin","post",Api);

