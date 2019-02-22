<template>
  <div class="goods">
    <div class="goodItem" v-for="(item, index) in goodList" @click="goodDetail(item.shopId)">
      <img class="img1" :src="item.shopImg">
      <p>{{item.shopTitle}}</p>
    </div>
    <div class="loading">
      <i v-if="pageindex <= maxPage" class="fa fa-spinner fa-pulse"></i>
      <span v-if="pageindex > maxPage">已经到底啦...</span>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      goodList: state => state.goodList.goodList,
      pageindex: state => state.goodList.pageindex,
      maxPage: state => state.goodList.maxPage
    })
  },
  methods: {
    goodDetail(shopId) {
      this.$router.push({ name: "goodDetail", params: { shopId: shopId } });
    }
  }
};
</script>


<style lang="scss" scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;
  margin-top: 1.1rem;
  height: 100%;
  background: #f0f2f5;
  .goodItem {
    margin: 0.15rem;
    margin-top: 0.15rem;
    width: 46%;
    height: 3.8rem;
    text-align: center;
    background: #fff;
    .img1 {
      width: 100%;
      height: 2.8rem;
    }
    p {
      line-height: 1rem;
    }
  }
  .loading {
    width: 100%;
    text-align: center;
    line-height: .6rem;
    i {
      font-size: 0.34rem;
    }
  }
}
</style>