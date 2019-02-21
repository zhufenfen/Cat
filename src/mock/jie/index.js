import Api from "../../api/jie";
import Mock from "mockjs";
Mock.mock("/Article","post",Api.Article);