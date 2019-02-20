import Api from "../../api/address/index";
import Mock from "mockjs";
Mock.mock("/address","get",Api);