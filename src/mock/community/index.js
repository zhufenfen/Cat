import discover from "../../api/community/discover.js"
import meowCircle from "../../api/community/meowCircle"
import Review from "../../api/community/review";
const Mock = require("mockjs");

Mock.mock("/getDiscover", "post", discover.getDiscover);
Mock.mock("/getDetails","post",discover.getDetails)
Mock.mock("/getCat", "post", meowCircle.getCat);
Mock.mock("/getCatDetails", "post", meowCircle.getCatDetails);
Mock.mock("/getReview", "post", Review.getReview);
Mock.mock("/addReview","post",Review.addReview)
// Mock.mock("/up", "post", discover.up);