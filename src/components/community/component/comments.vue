<template>
  <div class="comments">
    <div class="wrapper scrollHome" ref="homewrapper">
      <div class="content">
        <div class="box" v-for="(item,index) in reviewList">
          <dl>
            <dd>
              <img :src="item.catDetPortrait" alt>
            </dd>
            <dt class="remarker">
              <p class="remarkername">{{item.catDetName}}</p>
              <p>{{item.catDetContent}}</p>
            </dt>
            <dt class="addtime">{{item.catDetTime}}</dt>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import BScroll from "better-scroll";
export default {
  props: ["reviewList","add"],
  // data() {
  //   return {
  //     catDetArr: []
  //   };
  // },
  methods: {
    getReview() {
      axios.post("/getReview").then(data => {
        // console.log(this.catDetArr);
        this.reviewList = data.data;
      });
    },
    getMark() {
      axios
        .get(
          "/miaoquan/mock/5c49554628a69b32a72d2834/example_copy/catDietils#!method=get"
        )
        .then(data => {
          this.catDetArr = data.data;
        });
    }
  },
  mounted() {
    // console.log(this.reviewList);
    this.getReview();
    this.scroll = new BScroll(this.$refs.homewrapper, {
      pullUpLoad: true,
      click: true,
      probetype: 1
    });
  }
};
</script>
<style lang="scss" scoped>
.comments {
  width: 100%;
  height: 100%;
  margin: 0 0.3rem;
  .scrollHome {
    width: 100%;
    height: 5rem;
    position: fixed;
    top: 7.7rem;
    overflow: hidden;
    .content {
      margin-top: 0.5rem;
      padding-bottom: 0.55rem;
      background: #fff;
      .box {
        width: 100%;
        height: 0.7rem;
        margin: 0.3rem 0;
        dl {
          display: flex;
          justify-content: space-around;
          dd {
            width: 0.68rem;
            height: 0.68rem;
            // background: mediumaquamarine;
            img {
              border-radius: 50%;
              width: 100%;
              height: 100%;
            }
          }
          .remarker {
            width: 5rem;
            p {
              padding-left: 0.1rem;
              line-height: 0.35rem;
              font-size: 0.24rem;
            }
            .remarkername {
              color: #f796aa;
              font-size: 0.2rem;
            }
          }
          .addtime {
            width: 1.5rem;
            margin-right: 0.3rem;
            color: #8f8f8f;
            font-size: 0.2rem;
          }
        }
      }
    }
  }
}
</style>