import Api from "../../api/shop/shopList.js"
const Mock = require("mockjs");
Mock.mock("/getShop", "post", Api.getShop);
Mock.mock("/goodDetail", "post", Api.goodDetail);
Mock.mock("/addCart", "post", Api.addCart);
