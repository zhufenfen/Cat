<template>
  <div class="wrapper main" ref="mainWrapper">
    <div class="content mainInside">
      <div class="center">
        <div class="top">
          <span>12-25</span>
          <b></b>
        </div>
        <div class="middle">
          <b class="wire"></b>
          <div class="right">
            <div class="pic">
              <img src="static/myImgs/it/img2.png">
            </div>
            <p>温柔小眼神</p>
          </div>
        </div>
      </div>

      <div class="center">
        <div class="top">
          <span>12-25</span>
          <b></b>
        </div>
        <div class="middle">
          <b class="wire"></b>
          <div class="right">
            <div class="pic">
              <img src="static/myImgs/it/img2.png">
              <img src="static/myImgs/it/img4.png">
            </div>
            <p>小黑与小白</p>
          </div>
        </div>
      </div>

      <div class="center">
        <div class="top">
          <span>12-25</span>
          <b></b>
        </div>
        <div class="middle">
          <b class="wire"></b>
          <div class="right">
            <div class="pic">
              <img src="static/myImgs/it/img1.png">
              <img src="static/myImgs/it/img4.png">
            </div>
            <p>温柔小眼神</p>
          </div>
        </div>
      </div>

      <div class="center">
        <div class="top">
          <span>12-25</span>
          <b></b>
        </div>
        <div class="middle">
          <b class="wire"></b>
          <div class="right">
            <div class="pic">
              <img src="static/myImgs/it/img1.png">
              <img src="static/myImgs/it/img2.png">
            </div>
            <p>温柔小眼神</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  mounted() {
    this.scroll = new BScroll(this.$refs.mainWrapper);
  }
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 11.37rem;
  background: rgba(241, 241, 241, 1);
  margin-top: 4.3rem;
}
.mainInside {
  width: 6.85rem;
  margin-left: 0.36rem;
  margin-top: .38rem;
  padding-bottom: 2.8rem;
  background: #fff;
  box-shadow: 0px 1px 13px 0px rgba(66, 65, 62, 0.16);
  border-radius: 12px;
  .top {
    width: 1rem;
    height: 0.18rem;
    margin-left: 0.28rem;
    padding-top: 0.32rem;
    display: flex;
    justify-content: space-between;
    b {
      display: block;
      width: 0.2rem;
      height: 0.2rem;
      margin-top: 0.09rem;
      background: #fddd62;
      border-radius: 50%;
    }
    span {
      font-size: 0.28rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(32, 32, 32, 1);
    }
  }
  .middle {
    height: 2.41rem;
    width: 100%;
    display: flex;

    .wire {
      display: block;
      margin-left: 1.16rem;
      margin-top: 0.36rem;
      width: 0.01rem;
      height: 2.41rem;
      background: #7f7f7f;
      opacity: 0.5;
    }
    .right {
      margin-left: 0.21rem;
      p {
        margin-top: 0.19rem;
        font-size: 32px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
      }
      .pic {
        width: 2.34rem;
        height: 1.75rem;
        margin-top: 0.19rem;
        display: flex;
        img {
          width: 100%;
          border: 1px dashed #202020;
          margin-right: 0.19rem;
        }
      }
    }
  }
}
</style>
