<template>
  <div class="details">
    <div class="top">
      <div class="left" @click="$router.push('/community')">
        <img src="static/communityImg/jiao_03.jpg" alt>
      </div>
      <div class="middle">详情</div>
      <div class="right">
        <img src="static/communityImg/xin_03.jpg" alt>
      </div>
    </div>
    <div class="center">
      <span class="one">
        <img :src="detailInfo.disPortrait">
      </span>
      <span class="two">{{detailInfo.disName}}</span>
      <span class="thr">关注</span>
      <span class="for">两周前</span>
    </div>
    <p>{{detailInfo.disCont}}</p>
    <div class="img">
      <img :src="detailInfo.disPhoto" alt>
    </div>
    <div class="last">
      <img src="static/communityImg/hxin_03.jpg" alt>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      detailInfo: {}
    };
  },
  methods: {
    getDetails(disId) {
      axios.post("/getDetails", { disId }).then(data => {
        this.detailInfo = data;
        // console.log(this.detailInfo);
      });
    }
  },
  created() {
    this.getDetails(this.$route.query.info);
  }
};
</script>
<style lang="scss" scoped>
body {
  font-family: PingFang-SC-Regular;
}
img {
  vertical-align: top;
}
.details {
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
      }
    }
    .right {
      margin-right: 0.2rem;
      width: 0.3rem;
      height: 0.29rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .center {
    width: 100%;
    height: 1.2rem;
    display: flex;
    justify-content: flex-left;
    align-items: center;
    .one {
      width: 0.64rem;
      height: 0.64rem;
      margin-left: 0.25rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .two {
      margin-left: 0.2rem;
      font-size: 0.28rem;
    }
    .thr {
      width: 0.82rem;
      height: 0.4rem;
      border-radius: 15px;
      background: #fddd62;
      margin-left: 0.25rem;
      text-align: center;
      line-height: 0.4rem;
    }
    .for {
      margin-left: 3.2rem;
    }
  }
  p {
    display: flex;
    flex-wrap: wrap;
    margin-left: 0.25rem;
    color: #585858;
    font-size: 0.24rem;
    line-height: 0.45rem;
    letter-spacing: 0.015rem;
  }
  .img {
    width: 6.9rem;
    height: 4.48rem;
    margin-left: 0.25rem;
    margin-top: 0.4rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .last {
    margin-left: 6.68rem;
    margin-top: 1rem;
    width: 0.4rem;
    height: 0.35rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>