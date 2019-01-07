<template>
  <div class="myHeader">
    <div class="picFrame">
      <h3>喵星人</h3>
      <div class="fans">
        <p><span>粉丝</span></p>
        <p><span>11</span></p>
      </div>
    </div>
    <div class="head">
      <img src="../../../../static/myImgs/head.png">
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
           
        }
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
  .picFrame {
    width: 6.86rem;
    height: 3rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 12px;
    position: absolute;
    top: 1.81rem;
    left: 0.31rem;
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
        top:2.05rem;
        left:.93rem;
      p {
        width: .56rem;
        height: .45rem;
        font-size: .28rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: #202020;
      }
     

    }
  }
  .head {
    width: 2.37rem;
    height: 2.37rem;
    position: absolute;
    top: 0.65rem;
    left: 2.55rem;
    img {
      width: 100%;
    }
  }
}
</style>