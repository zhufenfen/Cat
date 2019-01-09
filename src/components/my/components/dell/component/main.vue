<template>
  <div class="wrapper main" ref="mainWrapper">
    <div class="content mainInside">
      <div class="center">
        <div class="top">
          <b></b>
          <span>12-25</span>
        </div>
        <div class="middle">
          <b class="wire"></b>
          <div class="right">
            <p>温柔小眼神</p>
            <div class="pic">
              <img src="static/myImgs/dell/pic1.png">
            </div>
          </div>
        </div>
      </div>

      <div class="center">
        <div class="top">
          <b></b>
          <span>12-25</span>
        </div>
        <div class="middle">
          <b class="wire"></b>
          <div class="right">
            <p>温柔小眼神</p>
            <div class="pic">
              <img src="static/myImgs/dell/pic2.png">
              <img src="static/myImgs/dell/pic3.png">
            </div>
          </div>
        </div>
      </div>

      <div class="center">
        <div class="top">
          <b></b>
          <span>12-25</span>
        </div>
        <div class="middle">
          <b class="wire"></b>
          <div class="right">
            <p>温柔小眼神</p>
            <div class="pic">
              <img src="static/myImgs/dell/pic4.png">
              <img src="static/myImgs/dell/pic5.png">
              <img src="static/myImgs/dell/pic6.png">
            </div>
          </div>
        </div>
      </div>

      <div class="center">
        <div class="top">
          <b></b>
          <span>12-25</span>
        </div>
        <div class="middle">
          <b class="wire"></b>
          <div class="right">
            <p>温柔小眼神</p>
            <div class="pic">
              <img src="static/myImgs/dell/pic2.png">
              <img src="static/myImgs/dell/pic3.png">
            </div>
          </div>
        </div>
      </div>

      <div class="center">
        <div class="top">
          <b></b>
          <span>12-25</span>
        </div>
        <div class="middle">
          <b class="wire"></b>
          <div class="right">
            <p>温柔小眼神</p>
            <div class="pic">
              <img src="static/myImgs/dell/pic2.png">
              <img src="static/myImgs/dell/pic3.png">
            </div>
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
    console.log(this.scroll);
  }
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 11.37rem;
  background: rgba(241, 241, 241, 1);
}
.mainInside {
  width: 100%;
  padding-bottom: 1.5rem;
  .top {
    width: 1rem;
    height: 0.18rem;
    margin-left: 0.28rem;
    display: flex;
    justify-content: space-between;
    b {
      display: block;
      width: 0.08rem;
      height: 0.08rem;
      margin-top: 0.09rem;
      background: rgba(255, 120, 120, 1);
      border-radius: 50%;
    }
    span {
      font-size: 0.24rem;
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
      margin-left: 0.31rem;
      margin-top: 0.04rem;
      width: 0.01rem;
      height: 2.41rem;
      background: rgba(32, 32, 32, 1);
      opacity: 0.5;
    }
    .right {
      margin-left: 0.21rem;
      p {
        margin-top: 0.19rem;
      }
      .pic {
        width: 1.6rem;
        height: 1.6rem;
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