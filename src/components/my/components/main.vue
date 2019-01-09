<template>
  <div class="main">
    <div class="main-m">
      <div class="message">
        <a>
          <img src="static/myImgs/message.png">
        </a>
        <p>宠物信息</p>
        <b>></b>
      </div>
      <div class="news">
        <a>
          <img src="static/myImgs/news.png">
        </a>
        <p>我的消息</p>
        <b>></b>
      </div>
      <div class="collect">
        <a>
          <img src="static/myImgs/message.png">
        </a>
        <p>我的收藏</p>
        <b>></b>
      </div>
    </div>
    <div class="main-m">
      <div class="message">
        <a>
          <img src="static/myImgs/order.png">
        </a>
        <p>我的订单</p>
        <b>></b>
      </div>
      <div class="news">
        <a class="car">
          <img src="static/myImgs/car.png">
        </a>
        <p>购物车</p>
        <b>></b>
      </div>
      <div class="collect">
        <a>
          <img src="static/myImgs/site.png">
        </a>
        <p>我的地址</p>
        <b>></b>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.main{
    display: flex;
    flex-direction: column;
    margin-top: .85rem;
    margin-left: 0.31rem;
}
.main-m {
  width: 6.86rem;
  height: 3rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin-top:.19rem;
  .message {
    margin-top: 0;
  }
  div {
    width: 6.86rem;
    height: 0.24rem;
    position: relative;
    margin-top: 0.57rem;
    a {
      display: inline-block;
      width: 0.28rem;
      height: 0.24rem;
      margin-top: 0.58rem;
      margin-left: -4.34rem;
      img {
        width: 100%;
      }
    }
    p {
      display: inline-block;
      font-size: 0.28rem;
      margin-top: 0.1rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(32, 32, 32, 1);
    }
    b {
      display: inline-block;
      position: absolute;
      top: 0.58rem;
      left: 6.22rem;
      width: 0.23rem;
      height: 0.09rem;
    }
  }
  .car{
      width:.38rem;
      height:.19rem;
      margin-left:-4.56rem;
      
  }
}
</style>