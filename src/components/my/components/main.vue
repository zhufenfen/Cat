<template>
  <div class="myMain">
    <div class="main">
      <div class="main-m">
        <div class="message">
          <div class="pic">
            <img src="static/myImgs/message.png">
          </div>
          <router-link :to="{name:'pet'}">
            <p>宠物信息</p>
          </router-link>

          <b>
            <img src="static/myImgs/right2.png">
          </b>
        </div>
        <div class="news">
          <div class="pic">
            <img src="static/myImgs/news.png">
          </div>
          <router-link :to="{name:'information'}">
          <p>我的消息</p>
           </router-link>
          <b>
            <img src="static/myImgs/right2.png">
          </b>
        </div>
        <div class="collect">
          <div class="pic">
            <img src="static/myImgs/message.png">
          </div>
          <router-link :to="{name:'collect'}">
            <p>我的收藏</p>
          </router-link>
          <b>
            <img src="static/myImgs/right2.png">
          </b>
        </div>
      </div>
      <div class="main-m">
        <div class="message">
          <div class="pic">
            <img src="static/myImgs/order.png">
          </div>
          <router-link :to="{name:'myOrder'}">
          <p>我的订单</p>
          </router-link>
          <b>

            <img src="static/myImgs/right2.png">
          </b>
        </div>
        <div class="news">
          <div class="pic">
            <img src="static/myImgs/car.png">
          </div>
          <router-link :to="{name:'shopCart'}">
          <p>购物车</p>
          </router-link>
          <b>
            <img src="static/myImgs/right2.png">
          </b>
        </div>
        <div class="collect">
          <div class="pic">
            <img src="static/myImgs/site.png">
          </div>
          <router-link :to="{name:'address'}">
          <p>我的地址</p>
          </router-link>
          <b>
            <img src="static/myImgs/right2.png">
          </b>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.myMain {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 0;
  margin-left: 0.31rem;
  position: relative;
  .main {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 1.59rem;

    .main-m {
      width: 6.86rem;
      height: 2.46rem;
      background: #fff;
      display: flex;
      flex-direction: column;
      border-radius: .18rem;
      margin-top: 0.19rem;
      .message,.news,
      .collect {
        width: 6.86rem;
        height: 0.57rem;
      }
      .message{
        margin-top:.28rem;
      }

      div {
        position: relative;
        float: left;
        margin-top: 0.1rem;
        .pic {
          display: block;
          float: left;
          width: 0.28rem;
          height: 0.24rem;
          margin-left: 0.37rem;

          img {
            width: 100%;
          }
        }
        p {
          display: block;
          margin-left: 1rem;
          font-size: 0.28rem;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(32, 32, 32, 1);
        }
        b {
          margin-top: -0.28rem;
          float: left;
          margin-left: 6.22rem;
          width: 0.08rem;
          height: 0.22rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>