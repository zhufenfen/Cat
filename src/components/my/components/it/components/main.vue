<template>
  <div class="wrapper main" ref="mainWrapper">
    <div class="content mainInside">
      <div class="center" v-for="(item,index) in dellList">
        <div class="top">
          <span>{{item.time}}</span>
          <b></b>
        </div>
        <div class="middle">
          <b class="wire"></b>
          <div class="right">
            <div class="pic">
              <img :src="item.imgUrl">
            </div>
            <p>{{item.txt}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Vuex from "vuex";
export default {
  mounted() {
    this.scroll = new BScroll(this.$refs.mainWrapper);
  },
  created() {
    this.handleDell();
  },
  computed: {
    ...Vuex.mapState({
      dellList: state => state.dell.dellList
    })
  },
  methods: {
    ...Vuex.mapActions({
      handleDell: "dell/handleDell"
    })
  }
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 11.37rem;
  background: rgba(241, 241, 241, 1);
  margin-top: 4.3rem;
}
.mainInside {
  width: 6.85rem;
  margin-left: 0.36rem;
  margin-top: 0.38rem;
  padding-bottom: 2.8rem;
  background: #fff;
  box-shadow: 0 0.01rem 0.13rem 0 rgba(66, 65, 62, 0.16);
  border-radius: 0.12rem;
  .top {
    width: 1rem;
    height: 0.18rem;
    margin-left: 0.28rem;
    padding-top: 0.32rem;
    display: flex;
    justify-content: space-between;
    b {
      display: block;
      width: 0.2rem;
      height: 0.2rem;
      margin-top: 0.09rem;
      background: #fddd62;
      border-radius: 50%;
    }
    span {
      font-size: 0.28rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(32, 32, 32, 1);
    }
  }
  .middle {
    height: 2.41rem;
    width: 100%;
    display: flex;

    .wire {
      display: block;
      margin-left: 1.16rem;
      margin-top: 0.36rem;
      width: 0.01rem;
      height: 2.41rem;
      background: #7f7f7f;
      opacity: 0.5;
    }
    .right {
      margin-left: 0.21rem;
      p {
        display: block;
        width: 100%;
        height: 0.4rem;
        margin-top: 0.19rem;
        padding-bottom:.18rem;
        font-size: 0.32rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .pic {
        width: 2.34rem;
        height: 1.75rem;
        margin-top: 0.19rem;
        display: flex;
        img {
          width: 100%;
          border: 0.01rem dashed #202020;
          margin-right: 0.19rem;
        }
      }
    }
  }
}
</style>
