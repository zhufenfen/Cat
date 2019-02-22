<template>
  <div id="shopList">
    <Header-com :mes="message"></Header-com>
    <div class="wrapper" ref="listWrapper">
      <div class="content">
        <Goods-com></Goods-com>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/header";
import Goods from "./components/goods";
import Bscroll from "better-scroll";
import Vuex from "vuex";
export default {
  props: ["id", "message"],
  components: {
    "Header-com": Header,
    "Goods-com": Goods
  },
  created() {
    this.handleGoodList(this.id);
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.listWrapper, {
      click: true,
      pullUpLoad: true
    });
    this.scroll.on("pullingUp", () => {
      this.handleGoodUpdate(this.id);
    });
  },
  computed: {
    ...Vuex.mapState({
      goodList: state => state.goodList.goodList
    })
  },
  watch: {
    goodList(newVal) {
      this.scroll.finishPullUp();
      this.scroll.refresh();
    }
  },
  methods: {
    ...Vuex.mapActions({
      handleGoodList: "goodList/handleGoodList",
      handleGoodUpdate: "goodList/handleGoodUpdate"
    })
  }
};
</script>


<style lang="scss" scoped>
#shopList {
  height: 100%;
  .wrapper {
    height: 100%;
    .content {
      overflow: hidden;
    }
  }
}
</style>