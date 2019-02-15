<template>
  <div class="catDetails">
    <div class="top">
      <div class="left" @click="$router.go(-1)">
        <img src="../../../../static/communityImg/jiao_03.jpg" alt>
      </div>
      <div class="middle">动态详情</div>
      <div></div>
    </div>
    <div class="center">
      <div class="img1">
        <img :src="catInfo.catPortrait" alt>
      </div>
      <ul class="tops">
        <li class="one">{{catInfo.catName}}</li>
        <li class="two">19小时前</li>
      </ul>
      <p>{{catInfo.catContent}}</p>
      <div class="imgs">
        <div>
          <img :src="catInfo.catPhoto">
        </div>
      </div>
      <div class="last">
        <div class="speak" @click="handelComments()">
          <img src="../../../../static/communityImg/icon-pl-2@2x.png" alt>
        </div>&nbsp;&nbsp;
        <span>{{catInfo.reviewCount}}</span>
        <div class="xin" @click="handleCatAdd()">
          <img :src="flag?'../../../../static/communityImg/icon-xin-2@2x.png':'../../../../static/communityImg/icon-xin-3@2x.png'" alt>
        </div>&nbsp;&nbsp;
        <span>{{catInfo.number}}</span>
      </div>
    </div>
    <h4 v-if="commentsIsShow">评论</h4>
    <div class="comments">
      <comments-com :add="add" :reviewList="reviewList" v-if="commentsIsShow"/>
    </div>
    <div class="foot">
      <input type="text" v-model.value="val" placeholder="添加评论">
      <span @click="add()">
        <img src="../../../../static/communityImg/icon-pl-2@2x.png" alt>
      </span>
    </div>
  </div>
</template>
<script>
import comments from "./comments";
import axios from "axios";
export default {
  components: {
    "comments-com": comments
  },
  data() {
    return {
      commentsIsShow: false,
      flag:true,
      catInfo:{},
      val:"",
      reviewList:[]
    }
  },
   beforeMount() {

    this.getCatDetails(this.$route.query.info);
    },
  methods: {
    add(){
      // console.log(this.val);
      axios.post("/addReview",{val:this.val}).then((data)=>{
        this.reviewList=data; 
        // console.log(this.reviewList);
      })
    },
     getCatDetails(catId){
      axios.post("/getCatDetails",{catId}).then((data)=>{
        this.catInfo = data; 
          //  console.log(this.catInfo);
      })
    },
    handelComments() {
      this.commentsIsShow = !this.commentsIsShow;
    },
    handleCatAdd(){
      this.flag = !this.flag;
      if(!this.flag){
        this.catInfo.number+=1;
      }else{
        this.catInfo.number-=1;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
body {
  font-family: PingFang-SC-Regular;
  color: #202020;
}
img {
  vertical-align: bottom;
}
.catDetails {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 1rem;
    background: #fddd62;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.36rem;
    letter-spacing: 0.025rem;
    color: #202020;
    .left {
      margin-left: 0.25rem;
      width: 0.15rem;
      height: 0.28rem;
      img {
        width: 100%;
        height: 100%;
        vertical-align: top;
      }
    }
  }
  .center {
    width: 6.8rem;
    margin-top: 0.25rem;
    margin-left: 0.3rem;
    border-bottom: 2px solid #ddd;
    .img1 {
      width: 0.64rem;
      height: 0.64rem;
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .tops {
      display: inline-block;
      height: 0.64rem;
      margin-left: 0.1rem;
      li {
        color: rgba(32, 32, 32, 1);
      }
      .one {
        font-size: 0.26rem;
        letter-spacing: 0.01rem;
      }
      .two {
        color: rgba(143, 143, 143, 1);
        font-size: 0.2rem;
      }
    }
    p {
      margin-top: 0.3rem;
      font-size: 0.28rem;
      letter-spacing: 0.02rem;
    }
    .imgs {
      width: 6.8rem;
      height: 2.5rem;
      // display: flex;
      // justify-content: space-between;
      margin-top: 0.3rem;
      div {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .last {
      width: 6.8rem;
      height: 1rem;
      display: flex;
      align-items: center;
      .speak {
        width: 0.22rem;
        height: 0.22rem;
        margin-left: 5.2rem;
        img {
          vertical-align: top;
          width: 100%;
          height: 100%;
        }
      }
      .xin {
        width: 0.25rem;
        height: 0.22rem;
        margin-left: 0.2rem;
        img {
          vertical-align: top;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  h4 {
    font-weight: 500;
    font-size: 0.28rem;
    margin: 0.5rem 0 0.4rem 0.3rem;
  }
  .foot {
    width: 100%;
    height: 0.98rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #ddd;
    input {
      display: inline-block;
      width: 6.06rem;
      height: 0.64rem;
      border: none;
      margin-left: 0.3rem;
      border-radius: 0.06rem;
      text-indent: 0.21rem;
      font-size: 0.24rem;
      color: #c2c2c2;
    }
    span {
      width: 0.37rem;
      height: 0.37rem;
      margin-right: 0.5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>