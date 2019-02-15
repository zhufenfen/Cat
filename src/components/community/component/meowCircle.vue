<template>
  <div class="community">
    <div class="wrapper scrollHome" ref="homewrapper">
      <div class="auto">
        <!-- <div v-for="(item,index) in arr" class="communityD" @click="$router.push('/catDetail')"> -->
        <div v-for="(item,index) in arr" class="communityD" @click="handleGo(item.catId)">
          <div class="top">
            <div class="img1">
              <img :src="item.catPortrait" alt>
            </div>
            <ul class="tops">
              <li class="one">{{item.catName}}</li>
              <li class="two">{{item.catDate}}&nbsp;&nbsp;&nbsp;{{item.catTime}}</li>
            </ul>
          </div>
          <div class="middle">
            <img :src="item.catPhoto" alt>
          </div>
          <p>{{item.catContent}}</p>
          <p>
            <span>
              <div>
                <img src="../../../../static/communityImg/icon-pl-mq-hei@2x.png" alt>
              </div>
              <i class="i">56</i>
            </span>
            <span>
              <div>
                <img src="../../../../static/communityImg/icon-xq-xin-hei@2x.png" alt>
              </div>
              <i>74</i>
            </span>
          </p>
          <p class="cat">{{item.reviewList[0].reviewPer}}:{{item.reviewList[0].reviewCon}}</p>
          <p class="cat">{{item.reviewList[1].reviewPer}}:{{item.reviewList[1].reviewCon}}</p>
          <!-- <p class="last">显示全部评论</p> -->
          <ul class="lastOne">
            <li>
              <img src="../../../../static/communityImg/icon-xin-3@2x.png" alt>
            </li>
            <li>
              <img src="../../../../static/communityImg/icon-pl@2x.png" alt>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      arr: [],
    };
  },
 
  methods: {
   
    getInfo() {
      // axios
      //   .get(
      //     "/miaoquan/mock/5c370de4f93efc493ce9c7af/example/meowCircle#!method=get"
      //   )
      //   .then(({ data }) => {
      //     this.arr = data;
      //   });
        axios.post("/getCat").then((data)=>{
          if(data.success==true){
            this.arr = data.data;
          }else{
            // console.log(111);
          }
    }) },
    handleGo(id){
      this.$router.push({ path: "/catDetail", query: { info: id } });
    }
    
  },
  mounted() {
    this.getInfo();
    this.scroll = new BScroll(this.$refs.homewrapper, {
      pullUpLoad: true,
      click: true,
      probetype: 1
    });
  }
};
</script>
<style lang="scss" scoped>
body,
html {
  font-family: MicrosoftYaHei;
}
img {
  vertical-align: baseline;
}
.community {
  width: 100%;
  height: 100%;
  text-align: left;
  .scrollHome {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 1.2rem;
    // bottom: 5rem;
    overflow: hidden;
    .auto {
      padding-bottom: 2.5rem;
      .communityD {
        width: 6.87rem;
        min-height: 3.86rem;
        background: #fff;
        border-radius: 0.12rem;
        margin-left: 0.32rem;
        margin-top: 0.3rem;
        overflow: hidden;
        .top {
          width: 6.54rem;
          height: 1.12rem;
          margin: 0.23rem;
          display: flex;
          justify-content: flex-start;
          .img1 {
            width: 1.12rem;
            height: 1.12rem;
            display: inline-block;
            // background: mediumaquamarine;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .tops {
            display: inline-block;
            height: 1.12rem;
            margin-left: 0.2rem;
            margin-top: 0.25rem;
            li {
              font-size: 0.28rem;
              color: rgba(32, 32, 32, 1);
            }
            .one {
              letter-spacing: 0.1rem;
            }
            .two {
              color: rgba(143, 143, 143, 1);
              font-size: 0.23rem;
              margin-top: 0.1rem;
            }
          }
        }
        .middle {
          width: 6.54rem;
          height: 3.26rem;
          margin-left: 0.24rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .middles {
          width: 4.49rem;
          height: 1.13rem;
          background: #f4f4f4;
          margin-left: 1.56rem;
        }
        p {
          width: 6rem;
          font-size: 0.28rem;
          font-weight: 500;
          color: rgba(32, 32, 32, 1);
          margin: 0.1rem 0 0.1rem 0.24rem;
        }
        p {
          width: 6rem;
          height: 0.3rem;
          font-size: 0.28rem;
          font-weight: 500;
          margin: 0;
          color: rgba(32, 32, 32, 1);
          margin: 0.15rem 0 0.1rem 0.24rem;
          span {
            display: inline-block;
            width: 1rem;
            height: 0.3rem;
            div {
              display: inline-block;
              width: 0.3rem;
              height: 0.31rem;
              img {
                width: 100%;
                height: 100%;
                vertical-align: top;
              }
            }
            i {
              width: 0.25rem;
              height: 0.19rem;
              font-size: 0.24rem;
              font-style: normal;
              vertical-align: top;
            }
            .i {
              margin-right: 0.3rem;
            }
          }
        }
        .cat {
          font-size: 0.24rem;
          color: rgba(143, 143, 143, 1);
        }
        .last {
          color: rgba(5, 51, 89, 1);
        }
        .lastOne {
          width: 2rem;
          height: 0.5rem;
          margin-left: 5.7rem;
          li {
            display: inline-block;
            width: 0.25rem;
            height: 0.22rem;
            margin-right: 0.3rem;
            img {
              display: inline-block;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>