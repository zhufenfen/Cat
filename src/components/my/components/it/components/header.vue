<template>
  <div class="header">
    <div class="headerM">
      <div class="title">
        <div class="lt" @click="getBack()">
          <img src="static/myImgs/left.png">
        </div>
        <p>Noodle</p>
        <span></span>
      </div>
      <div class="box">
        <div class="pic">
          <img src="static/myImgs/dell/1.png" alt>
        </div>
        <div class="message">
          <div class="messageC">
            <p>Noodle</p>
            <a>
              <img src="static/myImgs/it/ico1.png">
            </a>
          </div>
          <span>别低头，皇冠会掉</span>
          <div class="mesNum">
            <div>
              <span>666</span>
              <p>关注</p>
            </div>
            <div>
              <span>111</span>
              <p>粉丝</p>
            </div>
          </div>
        </div>
        <div class="pay">
          <span>关注</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getBack(){
      this.$router.back();
    }
  },
};
</script>
<style lang="scss">
.header {
  width: 100%;
  display: flex;
  z-index:5;
  .headerM {
    width: 100%;
    height: 4rem;
    background: #fddd62;
    .title {
      width: 100%;
      height: 1.28rem;
      line-height: 1.28rem;
      display: flex;
      justify-content: space-between;
      .lt {
        margin-left: 0.36rem;
      }
      p {
        font-size: 0.38rem;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
      }
      span {
        margin-right: 0.31rem;
      }
    }
    .box {
      width: 6.85rem;
      height: 2.32rem;
      background: #fff;
      margin-top: 0.15rem;
      margin-left: 0.36rem;
      border-radius: 0.12rem;
      display: flex;
      justify-content: space-between;
      .pic {
        width: 1.28rem;
        height: 1.28rem;
        margin-left: 0.23rem;
        margin-top: 0.23rem;
        img {
          width: 100%;
        }
      }
      .message {
        .messageC {
          width: 2.08rem;
          display: flex;
          justify-content: space-between;
          p {
            margin-top: 0.41rem;
            font-size: 0.36rem;
            font-family: PingFang-SC-Bold;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
          }
          a {
            margin-top: 0.48rem;
            display: block;
            width: 0.29rem;
            height: 0.25rem;
            img {
              width: 100%;
            }
          }
          span {
            color: #a3a3a3;
            font-size: 0.24rem;
            font-family: PingFang-SC-Bold;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
            opacity: 0.5;
          }
        }
        .mesNum {
          margin-top: 0.3rem;
          width: 1.58rem;
          display: flex;
          justify-content: space-between;
          font-size: .28rem;
          font-family: PingFang-SC-Bold;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
        }
      }

      .pay {
        width: 1.38rem;
        height: 1.86rem;
        margin-right: 0.29rem;
        span {
          display: block;
          width: 1.38rem;
          height: 0.5rem;
          background: #fddd62;
          line-height: 0.5rem;
          text-align: center;
          margin-top: 1.56rem;
          border-radius: 12px;
        }
      }
    }
  }
}
</style>
