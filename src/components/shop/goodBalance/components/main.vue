<template>
  <div id="main">
    <div class="message">
      <div class="person">
        收件人：
        <span class="name">仙女鱼</span>
        <span>18738981217</span>
      </div>
      <div class="place">
        地址：
        <span>喵星市喵星小区五号楼一单元</span>
      </div>
    </div>
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
    <div class="send">
      配送方式
      <span>快递 免邮</span>
    </div>
    <div class="word">
        买家留言：
        <input type="text" placeholder="选填：填写内容已和卖家协商确认">
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
  padding: 0 0.33rem;
  > .message {
    line-height: 1rem;
    color: #202020;
    font-size: 0.28rem;
    .name {
      margin-right: 1.6rem;
    }
  }
  .shopMessage {
    margin-top: 0.5rem;
    display: flex;
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
  .send{
      display: flex;
      justify-content: space-between;
      margin-top:.4rem;
      line-height: .89rem;
      border-bottom:1px solid rgba(32, 32, 32, 0.2);
  }
  .word{
      line-height: .89rem;
      border-bottom:1px solid rgba(32, 32, 32, 0.2);
      input{
          width:80%;
          font-size:.24rem;
          background:#f0f2f5;
          border:none;
          outline:none;
          color:#bbb;
      }
  }
}
</style>