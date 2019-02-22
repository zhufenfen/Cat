<template>
  <div class="wrapper main" ref="mainWrapper">
    <div class="content mainInside">
      <div class="center" v-for="(item,index) in dellList">
        <div class="top">
          <b></b>
          <span>{{item.time}}</span>
        </div>
        <div class="middle">
          <div class="right">
            <b class="wire"></b>
            <div class="Rw">
              <p>{{item.txt}}</p>
              <div class="pic">
                <img :src="item.imgUrl">
              </div>
            </div>
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
    // this.handleDell();
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
//动态页面中间内容样式
.main {
  width: 100%;
  height: 11.37rem;
  background: rgba(241, 241, 241, 1);
  margin-top:.66rem;
}
.mainInside {
  width: 100%;
  padding-bottom: 1.5rem;
  .center {
    widows: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top:.19rem;
    .top {
      width: 1rem;
      height: 0.18rem;
      margin-left: 0.49rem;
      margin-top: 0.22rem;
      display: flex;
      justify-content: space-between;
      b {
        display: block;
        width: 0.08rem;
        height: 0.08rem;
        margin-top: 0.09rem;
        background: rgba(255, 120, 120, 1);
        border-radius: 50%;
      }
      span {
        font-size: 0.24rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(32, 32, 32, 1);
      }
    }
    .middle {
      height: 100%;
      width: 100%;
      display: flex;
      margin-bottom: 0.2rem;
      
      .right {
        margin-left: 0.21rem;
        flex-direction: row;
        justify-content: space-around;
        .wire {
          float: left;
          display: block;
          height: 100%;
          margin-left: 0.31rem;
          margin-top: 0.04rem;
          width: 0.04rem;
          background: rgba(32, 32, 32, 1);
          opacity: 0.5;
        }
        .Rw {
          float: left;
          width:6.22rem;
          margin-top: 0.19rem;
            margin-right: 0.08rem;
            margin-left: 0.1rem;
          p {
            margin-top: 0.19rem;
            margin-right: 0.08rem;
            margin-left: 0.1rem;
            font-size:.24rem;
            overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
          }
          .pic {
            width: 1.6rem;
            height: 1.6rem;
            margin-top: 0.19rem;
            margin-bottom: 0.1rem;
            display: flex;
            img {
              width: 100%;
              border: 1px dashed #202020;
              margin-right: 0.19rem;
            }
          }
        }
      }
    }
  }
}
</style>