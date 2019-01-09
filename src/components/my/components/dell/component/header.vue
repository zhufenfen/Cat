<template>
  <div class="header">
    <div class="top">
      <div class="top-v">
        <div class="lt">
          <img src="static/myImgs/left.png">
        </div>
        <div class="pic">
          <img src="static/myImgs/dell/1.png">
        </div>
        <div class="dot">
          <b></b>
          <b></b>
          <b></b>
        </div>
      </div>
      <div class="box">
        <div class="center">
          <p>猫晓晓</p>
          <p class="ico1">
            <img src="static/myImgs/dell/2.png">
          </p>
          <p>VIP</p>
        </div>
        <div class="foot">
          <p class="ico2">
            <img src="static/myImgs/dell/3.png">
          </p>
          <p>注册会员</p>
        </div>
      </div>
      <div class="dell">
        <h3>动态</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 3.6rem;
  background: #fff;
  .top {
    width: 100%;
    height: 3rem;
    margin-top: 0.31rem;
    padding-left: 0.31rem;
    display: flex;
    flex-direction: column;
    .top-v {
      height: 1.6rem;
      display: flex;
      justify-content: space-between;
      .lt {
        width: 0.15rem;
        height: 0.28rem;
        margin-top: 0.08rem;
      }
      .pic {
        width: 1.6rem;
        height: 1.6rem;
        img {
          width: 100%;
        }
      }
      .dot {
        width: 0.36rem;
        height: 0.08rem;
        display: flex;
        justify-content: space-between;
        margin-right: 0.31rem;
        margin-top: 0.14rem;
        b {
          display: block;
          height: 0.08rem;
          width: 0.08rem;
          background: #000;
        }
      }
    }
    .box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-left: -0.52rem;
      .center {
        margin-top: 0.21rem;
        height: 0.66rem;
        text-align: center;
        p {
          float: left;
          font-size: 0.28rem;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(32, 32, 32, 1);
        }
        .ico1 {
          width: 0.2rem;
          height: 0.2rem;
          margin-left: 0.22rem;
          margin-right: 0.16rem;
          img {
            width: 100%;
          }
        }
      }
      .foot {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        p {
          font-size: 0.24rem;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(32, 32, 32, 1);
        }
        .ico2 {
          width: 0.22rem;
          height: 0.2rem;
          margin-right: 0.14rem;
          img {
            width: 100%;
          }
        }
      }
    }
    .dell {
      h3 {
        font-size: 0.28rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(32, 32, 32, 1);
        height: 0.6rem;
        width: 6.78rem;
        text-align: center;
        line-height: 0.6rem;
      }
    }
  }
}
</style>