import Api from "../../api/shop/shopList.js"
import ApiCart from "../../api/shop/shopCart.js"
const Mock = require("mockjs");
Mock.mock("/getShop", "post", Api.getShop);
Mock.mock("/goodDetail", "post", Api.goodDetail);
Mock.mock("/shopCart", "post", ApiCart.shopCart)