<template>
  <div class="main">
    <div class="center">
      <router-link :to="{name:'It'}">
        <a>
          <img src="static/myImgs/fans/1.png" alt>
        </a>
        <p>仙女与</p>
      </router-link>
      <span>已关注</span>
      <b></b>
    </div>
    <div class="center">
      <a>
        <img src="static/myImgs/fans/2.png" alt>
      </a>
      <p>喵星人盟主</p>
      <span>已关注</span>
      <b></b>
    </div>
    <div class="center">
      <a>
        <img src="static/myImgs/fans/3.png" alt>
      </a>
      <p>仙女与</p>
      <span>已关注</span>
      <b></b>
    </div>
    <div class="center">
      <a>
        <img src="static/myImgs/fans/4.png" alt>
      </a>
      <p>仙女</p>
      <span>已关注</span>
      <b></b>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .center {
    margin-top: 0.24rem;
    margin-left: 0.32rem;
    height: 1.66rem;
    width: 100%;
    position: relative;
    a {
      display: block;
      width: 1.28rem;
      height: 1.28rem;
      float: left;
      img {
        width: 100%;
      }
    }
    p {
      float: left;
      display: block;
      margin-top: -1;
      margin-left: 0.22rem;
      font-size: 0.36rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(32, 32, 32, 1);
    }
    span {
      float: left;
      position: absolute;
      top: 0.58rem;
      left: 5.76rem;
      width: 1.2rem;
      height: 0.45rem;
      line-height: 0.45rem;
      text-align: center;
      background: rgba(253, 221, 98, 1);
      border-radius: 0.12rem;
      font-size: 24px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(32, 32, 32, 1);
    }
    b {
      display: block;
      margin-top: 1.7rem;
      width: 686px;
      height: 1px;
      background: rgba(241, 241, 241, 1);
    }
  }
}
</style>