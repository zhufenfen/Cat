<template>
  <div class="main">
    <div class="main-m">
      <div class="message">
        <a>
          <img src="static/myImgs/message.png">
        </a>
        <p>宠物信息</p>
        <b>
          <img src="static/myImgs/right2.png">
        </b>
       
      </div>
      <div class="news">
        <a>
          <img src="static/myImgs/news.png">
        </a>
        <p>我的消息</p>
        <b>
          <img src="static/myImgs/right2.png">
        </b>
        
      </div>
      <div class="collect">
        <a>
          <img src="static/myImgs/message.png">
        </a>
        <p>我的收藏</p>
        <b>
          <img src="static/myImgs/right2.png">
        </b>
       
      </div>
    </div>
    <div class="main-m">
      <div class="message">
        <a>
          <img src="static/myImgs/order.png">
        </a>
        <p>我的订单</p>
         <b>
          <img src="static/myImgs/right2.png">
        </b>
        
      </div>
      <div class="news">
        <a class="car">
          <img src="static/myImgs/car.png">
        </a>
        <p>购物车</p>
         <b>
          <img src="static/myImgs/right2.png">
        </b>
        
      </div>
      <div class="collect">
        <a>
          <img src="static/myImgs/site.png">
        </a>
        <p>我的地址</p>
         <b>
          <img src="static/myImgs/right2.png">
        </b>
       
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
    margin-bottom:1.13rem;
}
.main-m {
  width: 6.86rem;
  height: 3rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin-top:.19rem;
  .message,.news,.collect {
    width: 6.86rem;
    height: 0.37rem;
  }
  .message{
    margin-top:.14rem;
  }
  div {
    position: relative;
    float:left;
    margin-top:.55rem;
    a{
      display: block;
      float:left;
      width:.28rem;
      height:.24rem;
      margin-left:.37rem;
       margin-top:.40rem;
       img{
      width:100%;
    }
    }
    p {
      margin-top:.38rem;
      margin-left:.1rem;
      font-size: 0.28rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(32, 32, 32, 1);
      float: left;
    }
    b { 
      margin-top:-.28rem;
      float:left;
      margin-left: 6.22rem;
      width: 0.23rem;
      height: 0.09rem;
    }
  }
  
}
</style>