<template>
  <div id="main">
    <div class="complete">
      <div>
        <img src="static/imgs/goodApply/wancheng.png">
      </div>交易完成
    </div>
    <div class="message">
      <div class="shopMessage">
        <img src="/static/imgs/goodBalance/img-qrdd.png">
        <div class="message">
          <div class="title">猫用品猫玩具猫咪兔毛球老鼠型逗猫棒逗猫杆</div>
          <div class="color">
            颜色分类：
            <span>花色[七彩球逗猫棒]</span>
          </div>
          <div class="size">
            尺寸：
            <span>M</span>
          </div>
          <div class="priceNum">
            <span class="price">￥128</span>
            <span class="num">×1</span>
          </div>
        </div>
      </div>
      <div class="info">
          买家昵称：
          <span class="name">仙女鱼</span>
      </div>
      <div class="info">
          订单编号：
          <span class="order">123456789</span>
      </div>
      <div class="info">
          交易时间
          <span class="time">2019.1.20</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
#main {
  margin-top: 1.1rem;
  .complete {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.2rem;
    height: 3.15rem;
    font-size: 0.36rem;
    color: #202020;
    background: #fff;
    div {
      margin-bottom: 0.38rem;
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
  >.message {
    padding:0 .33rem;
    height: 9rem;
    background: #fff;
    .shopMessage {
      display: flex;
      padding:.33rem 0;
      border-bottom:1px solid rgba(32, 32, 32, 0.1);
      img {
        margin-right: 0.49rem;
        width: 2.5rem;
        height: 2.5rem;
      }
      .message {
        .title {
          line-height: 0.45rem;
          color: #202020;
          font-size: 0.28rem;
        }
        .color {
          margin-top: 0.3rem;
        }
        .priceNum {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0.35rem;
          .price {
            color: #ff5757;
            font-size: 0.24rem;
          }
          .num {
            font-size: 0.28rem;
          }
        }
      }
    }
    .info{
        border-bottom:1px solid rgba(32, 32, 32, 0.1);
        line-height: .89rem;
        font-size:.24rem;
    }
  }
}
</style>