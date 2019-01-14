<template>
  <div class="community">
    <div class="communityD" @click="$router.push('/catDetail')">
      <div class="top">
        <div class="img1">
          <img src="../../../../static/communityImg/touixnag-mq@2x.png" alt>
        </div>
        <ul class="tops">
          <li class="one">郭大白</li>
          <li class="two">03-23&nbsp;&nbsp;&nbsp;15:32</li>
        </ul>
      </div>
      <div class="middle">
        <img src="../../../../static/communityImg/img-mq@2x.png" alt>
      </div>
      <p>好久没出来玩了，小伙伴们约不约？</p>
      <p>
        <span>
          <div>
            <img src="../../../../static/communityImg/icon-pl-mq-hei@2x.png" alt>
          </div>
          <i class="i">56</i>
        </span>
        <span>
          <div>
            <img src="../../../../static/communityImg/icon-xq-xin-hei@2x.png" alt>
          </div>
          <i>74</i>
        </span>
      </p>
      <p class="cat">猫宁啊：好嗨哦！</p>
      <p class="cat">面条：感觉到达人生的巅峰！</p>
      <p class="last">显示全部评论</p>
      <ul class="lastOne">
        <li>
          <img src="../../../../static/communityImg/icon-xin-3@2x.png" alt>
        </li>
        <li>
          <img src="../../../../static/communityImg/icon-pl@2x.png" alt>
        </li>
      </ul>
    </div>
    <!-- <div class="auto">
     <div v-for="(item,index) in arr" class="communityD" @click="$router.push('/catDetail')">
      <div class="top">
        <div class="img1">
          <img :src="item.catPortrait" alt>
        </div>
        <ul class="tops">
          <li class="one">{{item.catName}}</li>
          <li class="two">{{item.catDate}}&nbsp;&nbsp;&nbsp;{{item.catTime}}</li>
        </ul>
      </div>
      <div class="middle">
        <img :src="item.catPhoto" alt>
      </div>
      <p>{{item.catContent}}</p>
      <p>
        <span>
          <div>
            <img src="../../../../static/communityImg/icon-pl-mq-hei@2x.png" alt>
          </div>
          <i class="i">56</i>
        </span>
        <span>
          <div>
            <img src="../../../../static/communityImg/icon-xq-xin-hei@2x.png" alt>
          </div>
          <i>74</i>
        </span>
      </p>
      
      <p class="catitem.reviewList[0].reviewPer}}:{{item.reviewList[0].reviewCon}">{{}</p>
      <p class="cat">{{item.reviewList[1].reviewPer}}:{{item.reviewList[1].reviewCon}}</p>
      <p class="last">显示全部评论</p>
      <ul class="lastOne">
        <li>
          <img src="../../../../static/communityImg/icon-xin-3@2x.png" alt>
        </li>
        <li>
          <img src="../../../../static/communityImg/icon-pl@2x.png" alt>
        </li>
      </ul>
    </div></div> -->

    
  </div>
</template>
<script>
  /*
  <div class="communityD">
      <div class="top">
        <div class="img1">
          <img src="../../../../static/communityImg/touxiang-mq-2@2x.png" alt>
        </div>
        <ul class="tops">
          <li class="one">赵小雅</li>
          <li class="two">03-23&nbsp;&nbsp;&nbsp;15:32</li>
        </ul>
      </div>
      <div class="middles">
        <div class="left"></div>
      </div>
    </div>*/
import axios from "axios";
export default {
  data(){
    return{
      arr:[]
    }
  },
  mounted() {
      axios.get("/cat/mock/5c370de4f93efc493ce9c7af/example/meowCircle#!method=get").then(({data})=>{
          console.log(data);
          this.arr=data.data;
      })
    },
};
</script>
<style lang="scss" scoped>
body,
html {
  font-family: MicrosoftYaHei;
}
img {
  vertical-align: baseline;
}
.community {
  width: 100%;
  height: 100%;
  text-align: left;
  // .auto{
  //  height: 1000px;
  // overflow-y: auto;
  .communityD {
    width: 6.87rem;
    //height: 8rem;
    min-height: 3.86rem;
    background: #fff;
    border-radius: 0.12rem;
    margin-left: 0.32rem;
    margin-top: 0.3rem;
    overflow: hidden;
    .top {
      width: 6.54rem;
      height: 1.12rem;
      margin: 0.23rem;
      display: flex;
      justify-content: flex-start;
      .img1 {
        width: 1.12rem;
        height: 1.12rem;
        border-radius: 50%;
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .tops {
        display: inline-block;
        height: 1.12rem;
        margin-left: 0.2rem;
        margin-top: 0.25rem;
        li {
          font-size: 0.28rem;
          color: rgba(32, 32, 32, 1);
        }
        .one {
          letter-spacing: 0.1rem;
        }
        .two {
          color: rgba(143, 143, 143, 1);
          font-size: 0.23rem;
          margin-top: 0.1rem;
        }
      }
    }
    .middle {
      width: 6.54rem;
      height: 3.26rem;
      margin-left: 0.24rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .middles {
      width: 4.49rem;
      height: 1.13rem;
      background: #f4f4f4;
      margin-left: 1.56rem;
    }
    p {
      width: 6rem;
      font-size: 0.28rem;
      font-weight: 500;
      color: rgba(32, 32, 32, 1);
      margin: 0.1rem 0 0.1rem 0.24rem;
    }
    p {
      width: 6rem;
      height: 0.3rem;
      font-size: 0.28rem;
      font-weight: 500;
      margin: 0;
      color: rgba(32, 32, 32, 1);
      margin: 0.15rem 0 0.1rem 0.24rem;
      span {
        display: inline-block;
        width: 1rem;
        height: 0.3rem;
        div {
          display: inline-block;
          width: 0.3rem;
          height: 0.31rem;
          img {
            width: 100%;
            height: 100%;
            vertical-align: top;
          }
        }
        i {
          width: 0.25rem;
          height: 0.19rem;
          font-size: 0.24rem;
          font-style: normal;
          vertical-align: top;
        }
        .i {
          margin-right: 0.3rem;
        }
      }
    }
    .cat {
      font-size: 0.24rem;
      color: rgba(143, 143, 143, 1);
    }
    .last {
      color: rgba(5, 51, 89, 1);
    }
    .lastOne {
      width: 2rem;
      height: 0.5rem;
      margin-left: 5.7rem;
      li {
        display: inline-block;
        width: 0.25rem;
        height: 0.22rem;
        margin-right: 0.3rem;
        img {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>