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
        <img src="../../../../static/communityImg/touxiang-fen@2x.png" alt>
      </div>
      <ul class="tops">
        <li class="one">布丁麻麻</li>
        <li class="two">19小时前</li>
      </ul>
      <p>哎，实在没那么大的圣诞帽给你啊，我的布丁！</p>
      <div class="imgs">
        <div>
          <img src="../../../../static/communityImg/img-xiangqing1@2x.png">
        </div>
        <div>
          <img src="../../../../static/communityImg/img-xiangqing2@2x.png">
        </div>
        <div>
          <img src="../../../../static/communityImg/img-xiangqing3@2x.png">
        </div>
      </div>
      <div class="last">
        <div class="speak" @click="handelComments()">
          <img src="../../../../static/communityImg/icon-pl-2@2x.png" alt>
        </div>&nbsp;&nbsp;
        <span>98</span>
        <div class="xin">
          <img src="../../../../static/communityImg/icon-xin-2@2x.png" alt>
        </div>&nbsp;&nbsp;
        <span>28</span>
      </div>
    </div>
    <h4  v-if="commentsIsShow">评论</h4>
    <div class="comments">
      <comments-com v-if="commentsIsShow"/>
    </div>

    <!-- <div class="comments">
      <div class="img1">
        <img src="../../../../static/communityImg/icon-hui@2x.png" alt>
      </div>
      <ul class="tops">
        <li class="one">仙女鱼</li>
        <li class="two">沙发</li>
      </ul>
      <li class="thr">2小时前</li>
    </div> -->

    <div class="foot">
      <input type="text" placeholder="添加评论">
      <span>
        <img src="../../../../static/communityImg/icon-pl-2@2x.png" alt>
      </span>
    </div>
  </div>
</template>
<script>
import comments from "./comments";
export default {
    components:{
        "comments-com":comments
    },
    methods: {
        handelComments(){
            this.commentsIsShow=!this.commentsIsShow
        }
    },
    data(){
        return{
            commentsIsShow:false
        }
    },
    // updated() {
    //     console.log(this.commentsIsShow)
    // },
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
      padding-left: 0.25rem;
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
      border-radius: 50%;
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
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
      display: flex;
      justify-content: space-between;
      margin-top: 0.3rem;
      div {
        width: 2.26rem;
        height: 2.5rem;
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
    margin: 0.5rem 0 0.2rem 0.3rem;
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