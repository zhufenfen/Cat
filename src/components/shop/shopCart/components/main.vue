<template>
  <div id="main">
    <div class="shopItem" @click="handleClick(item)" v-for="(item, index) in goodItem">
      <span :class="item.flag?'active':''" @click.stop="handleCheck(index)"></span>
      <img :src="item.goodImage">
      <div class="message">
        <div class="title">{{item.goodTitle}}</div>
        <div class="size">
          尺寸：
          <span>{{item.goodSize}}</span>
        </div>
        <div class="color">
          颜色：
          <span>{{item.goodColor}}</span>
        </div>
        <div class="priceNum">
          <span class="price">{{item.goodPrice | price}}</span>
          <span class="oper" @click.stop="handleReduce(index)">-</span>
          <span class="num">{{item.num}}</span>
          <span class="oper" @click.stop="handleAdd(index)">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      goodItem: state => state.shopCart.shopList
    })
  },
  methods: {
    handleClick(item){
      this.$router.push({name:'goodDetail', params:{shopId:item.shopId}});
    },
    ...Vuex.mapMutations({
      handleCheck: "shopCart/handleCheck",
      handleAdd: "shopCart/handleAdd",
      handleReduce: "shopCart/handleReduce"
    }),

    /* @click="handleDel(item.shopId)" */
    /* ...Vuex.mapActions({
        handleDel:"shopCart/handleDel"
    }) */
  },
  filters: {
    price(p) {
      return "￥" + p;
    }
  },
  /* data() {
    return {
      shopItem: [
        {
          flag: false,
          imgUrl: "static/imgs/shopCart/img-gwc-1.png",
          title: "喵喵时尚碎花围巾",
          size: "M",
          color: "深红",
          price: "￥99",
          num: 1
        },
        {
          flag: false,
          imgUrl: "static/imgs/shopCart/img-gwc-2.png",
          title: "猫咪冬季保暖睡袋",
          size: "S",
          color: "淡黄",
          price: "￥128",
          num: 1
        },
        {
          flag: false,
          imgUrl: "static/imgs/shopCart/img-gwc-3.png",
          title: "藤编网红凉猫窝夏季封闭式猫屋",
          size: "M",
          color: "浅蓝",
          price: "￥99",
          num: 1
        },
        {
          flag: false,
          imgUrl: "static/imgs/shopCart/img-gwc-4.png",
          title: "猫咪u型护颈枕头腰枕靠垫毛绒玩具",
          size: "M",
          color: "米白",
          price: "￥99",
          num: 1
        }
      ]
    };
  } */
};
</script>


<style lang="scss" scoped>
#main {
  margin-top: 1.1rem;
  .shopItem {
    display: flex;
    align-items: center;
    padding: 0.2rem 0.33rem;
    height: 2rem;
    border-bottom: 1px solid rgba(32, 32, 32, 0.2);
    > span {
      display: inline-block;
      margin-right: 0.19rem;
      width: 0.2rem;
      height: 0.2rem;
      border: 0.02rem solid #202020;
      border-radius: 50%;
      vertical-align: middle;
    }
    .active {
      background: #aaa;
      // border:.02rem solid #FF7878;
    }
    img {
      margin-right: 0.19rem;
      width: 1.6rem;
      height: 1.6rem;
    }
    .message {
      line-height: 0.35rem;
      font-size: 0.24rem;
      color: #585858;
      .title {
        line-height: 0.4rem;
        font-size: 0.28rem;
        color: #202020;
      }
      .priceNum {
        margin-top: 0.1rem;
        .price {
          margin-right: 0.2rem;
        }
        .num {
          padding: 0 0.2rem;
        }
        .oper {
          display: inline-block;
          width: 0.6rem;
          height: 0.3rem;
          line-height: 0.3rem;
          text-align: center;
          border: 1px solid #aaa;
        }
      }
    }
  }
}
</style>