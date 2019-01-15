<template>
  <div id="main">
    <div class="shopItem" v-for="(item, index) in shopItem">
      <img :src="item.imgUrl">
      <div class="message">
        <div class="title">{{item.title}}</div>
        <div class="size">
          尺寸：
          <span>{{item.size}}</span>
        </div>
        <div class="color">
          颜色：
          <span>{{item.color}}</span>
        </div>
        <div class="numPrice">
          共<span>{{item.num}}</span>件商品
          实付款
          <span class="price">{{item.price}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopItem: [
        {
          imgUrl: "static/imgs/myOrder/img-my-1.png",
          title: "猫咪韩风百搭围脖",
          size: "M",
          color: "红色",
          price: "￥99",
          num: 1
        },
        {
          imgUrl: "static/imgs/myOrder/img-my-2.png",
          title: "猫咪和风围巾",
          size: "M",
          color: "红色",
          price: "￥99",
          num: 1
        },
        {
          imgUrl: "static/imgs/myOrder/img-my-3.png",
          title: "猫咪小鱼干风味猫条",
          size: "M",
          color: "红色",
          price: "￥99",
          num: 1
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
#main {
  margin-top: 1.1rem;
  .shopItem {
    display: flex;
    margin-top:.2rem;
    padding: 0.5rem 0.33rem;
    height: 3rem;
    background:#fff;
    img {
      margin-right: 0.49rem;
      width: 1.96rem;
      height: 1.96rem;
    }
    .message {
      width:60%;
      line-height: 0.35rem;
      font-size: 0.24rem;
      color: #585858;
      .title {
        line-height: 0.6rem;
        font-size: 0.28rem;
        color: #202020;
      }
      .size{
          color:#8F8F8F;
      }
      .color{
          color:#8F8F8F;
      }
      .numPrice{
          margin-top:.7rem;
          text-align: right;
          font-size:.28rem;
          .price{
              color:#FF7878;
          }
      }
    }
  }
}
</style>