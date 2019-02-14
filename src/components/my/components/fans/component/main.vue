<template>
  <div class="wrapper myMain" ref="mainWrapper">
    <div class="content mainInside" v-show="flag == 1">
      <div class="mainFans">
        <div class="mainC" v-for="(item,index) in goodsList" >
          <div class="center">
            <router-link :to="{name:'It',params:{name:item.myName,}}">
              <div class="head">
                <img :src="item.myImg" @click="handlePostId(item.myId)">
              </div>
            </router-link>
            <p>{{item.myName}}</p>
            <span class="clear"></span>
            <span class="Not">未关注</span>
          </div>
          <b></b>
        </div>
      </div>
    </div>
    <div class="main" v-show="flag == 2 ">
      <div class="pic">
        <img src="static/myImgs/not.png" alt>
        <p>暂无数据哦</p>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
  created() {
    this.handlegetFans();
    this.handlePostId();
  },
  data() {
    return {
      flag: 0
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.mainWrapper, {
      click: true
    });
    setTimeout(() => {
      if (!!this.goodsList) {
        this.flag = 1;
      } else {
        this.flag = 2;
      }
    }, 300);
  },
  computed: {
    ...Vuex.mapState({
      goodsList: state => state.myMhm.goodsList
    })
  },
  methods: {
    ...Vuex.mapActions({
      handlegetFans: "myMhm/handlegetFans",
       handlePostId: "myMhm/handlePostId"
    }),
     
      
     
  }
};
</script>
<style lang="scss" scoped>
.myMain {
  width: 100%;
  height: 11.37rem;
  overflow: hidden;
}
.mainInside {
  width: 100%;
  .mainFans {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .mainC {
      width: 100%;
      height: 1.66rem;
      b {
        display: block;
        margin-left: 0.32rem;
        width: 6.86rem;
        height: 0.02rem;
        background: rgba(241, 241, 241, 1);
      }
    }
    .center {
      width: 100%;
      height: 1.66rem;
      line-height: 1.66rem;
      padding-left: 0.32rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .head {
        width: 1.28rem;
        height: 1.28rem;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      p {
        font-size: 0.36rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(32, 32, 32, 1);
      }
      .Not {
        width: 1.2rem;
        height: 0.45rem;
        line-height: 0.45rem;
        margin-right: 0.32rem;
        text-align: center;
        background: rgba(253, 221, 98, 1);
        border-radius: 0.12rem;
        font-size: 0.24rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(32, 32, 32, 1);
      }
      .clear {
        width: 2.75rem;
      }
    }
  }
}
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .pic {
    width: 2.97rem;
    height: 2.97rem;
    img {
      width: 100%;
    }
    p {
      display: block;
      margin-top: 0.8rem;
      margin-left: 0.6rem;
      width: 1.6rem;
      height: 0.33rem;
      font-size: 0.32rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(143, 143, 143, 1);
      line-height: 0.9rem;
      text-align: center;
    }
  }
}
</style>