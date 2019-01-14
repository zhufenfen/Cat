<template>
  <div class="main">
    <div class="mainC">
      <div class="center">
        <router-link :to="{name:'It'}">
          <div class="head">
            <img src="static/myImgs/fans/1.png" alt>
          </div>
        </router-link>
        <p>仙女</p>
        <span class="clear"></span>
        <span class="Not">已关注</span>
      </div>
      <b></b>
    </div>

     <div class="mainC">
      <div class="center">
        <router-link :to="{name:'It'}">
          <div class="head">
            <img src="static/myImgs/fans/1.png" alt>
          </div>
        </router-link>
        <p>仙女</p>
        <span class="clear"></span>
        <span class="Not">已关注</span>
      </div>
      <b></b>
    </div>

   <div class="mainC">
      <div class="center">
        <router-link :to="{name:'It'}">
          <div class="head">
            <img src="static/myImgs/fans/1.png" alt>
          </div>
        </router-link>
        <p>仙女</p>
        <span class="clear"></span>
        <span class="Not">已关注</span>
      </div>
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
.mainC{
  width:100%;
  height: 1.66rem;
   b {
      display: block;
      margin-left:.32rem;
      width: 6.86rem;
      height: .02rem;
      background: rgba(241, 241, 241, 1);
    }
}
  .center {
    width: 100%;
    height: 1.66rem;
    line-height: 1.66rem;
    padding-left: 0.32rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .head {
      width: 1.28rem;
      height: 1.28rem;
      img {
        width: 100%;
      }
    }
    p {
      font-size: 0.36rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(32, 32, 32, 1);
    }
    .Not {
      width: 1.2rem;
      height: 0.45rem;
      line-height: 0.45rem;
      margin-right: 0.32rem;
      text-align: center;
      background: rgba(253, 221, 98, 1);
      border-radius: 0.12rem;
      font-size: 24px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(32, 32, 32, 1);
    }
    .clear {
      width: 2.75rem;
    }
   
  }
}
</style>