<template>
  <div class="myHeader">
    <div class="picFrame">
      <h3>喵星人</h3>
      <ul class="fans">
        <li>
          <router-link :to="{name:'fans'}">
            <p>
              粉丝
              <span>{{fansNum}}</span>
            </p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'Not'}">
          <p>
            关注
            <span>11</span>
          </p>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'Dell'}">
            <p>
              动态
              <span>11</span>
            </p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="head">
      <img src="static/myImgs/head.png">
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";

export default {
  created() {
    this.handleFans();
  },
   computed: {
     ...Vuex.mapState({
       fansNum:state=>state.myMhm.fansNum
     })
   },
   methods: {
     ...Vuex.mapActions({
       handleFans:"myMhm/handleFans"
     })
   },
};
</script>
<style lang="scss" scoped>
@charset "utf-8";
.myHeader {
  width: 100%;
  height: 3.96rem;
  background: #fddd62;
  position: relative;
  display: flex;
  
 
  .picFrame {
    width: 6.86rem;
    height: 3rem;
    background: rgba(255, 255, 255, 1);
    border-radius: .18rem;
    position: absolute;
    top: 1.51rem;
    left: 0.31rem;
  z-index:9;
    h3 {
      width: 1.08rem;
      height: 0.34rem;
      font-size: 0.36rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(32, 32, 32, 1);
      position: absolute;
      top: 1.31rem;
      left: 2.92rem;
    }
    .fans {
      position: absolute;
      width: 100%;
      top: 1.88rem;
      display: flex;
      justify-content: space-between;
      padding-left: 0.93rem;
      padding-right: 0.93rem;
      li {
        width: 0.56rem;
        height: 0.45rem;
        font-size: 0.28rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: #202020;
        span {
          display: block;
          margin-top: 0.1rem;
          text-align: center;
        }
      }
    }
  }
  .head {
    width: 2.37rem;
    height: 2.37rem; 
    position: absolute;
    top: 0.35rem;
    left: 2.55rem;
    z-index:11;
    img {
      width: 100%;
    }
  }
}
</style>