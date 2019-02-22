<template>
  <div class="discover">
    <div class="wrapper scrollHome" ref="homewrapper">
      <div class="content">
        <div class="big">
          <div class="lefts" v-for="(item,index) in disArr">
            <div class="right">
              <div class="up" @click="handleJump(item.disId)">
                <img :src="item.disPhoto" alt>
              </div>
              <div class="bot">
                <p>
                  <span class="one">{{item.disContent}}</span>
                  <span class="two" @click="handleAdd(item.number,item.disId,index)">
                    <img ref="xin" :src="img.active" alt>
                  </span>
                  <span class="thr">{{item.number}}</span>
                </p>
                <div>
                  <div class="img">
                    <img :src="item.disportrait">
                  </div>
                  <span class="last">{{item.disName}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import axias from "../../../lib";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      disArr: [],
      flag: true,
      img:{
        active:"static/communityImg/icon-xin-2@2x.png",
      }
    };
  },
  methods: {
    handleAdd(v, id,index) {
      // console.log(this.$refs.xin[index].src);
      this.flag = !this.flag;
      let type = 1;
      if (!this.flag) {
        type = 1;
        this.disArr[index].number += 1;
        this.$refs.xin[index].src="static/communityImg/icon-xin-3@2x.png"
      } else {
        type = 2;
        this.disArr[index].number -= 1;
         this.$refs.xin[index].src="static/communityImg/icon-xin-2@2x.png"
      }
      // axios.post("/up", { type, id }).then(data => {
      //   console.log(data);
      // });
    },
    handleJump(id) {
      // console.log(id);
      this.$router.push({ path: "/details", query: { info: id } });
    },
    getDiscover() {
      axios.post("/getDiscover").then(data => {
        // console.log(data);
        this.disArr = data;
      });
    }
  },
  mounted() {
    this.getDiscover();
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
.discover {
  width: 100%;
  height: 100vh;
  padding-top: 0.3rem;
  flex-wrap: wrap;
  .scrollHome {
    width: 100%;
    height: 20rem;
    position: fixed;
    top: 1.3rem;
    overflow: hidden;
    .content {
      padding-bottom: 9rem;
      .big {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .lefts {
          .right {
            width: 3.36rem;
            height: 3.4rem;
            float: left;
            margin-bottom: 0.2rem;
            .up {
              width: 100%;
              height: 2.2rem;
              background: #ccc;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .bot {
              width: 3.37rem;
              height: 1.2rem;
              background: #fff;
              border-radius: 0 0 12px 12px;
              p {
                width: 100%;
                font-size: 0.18rem;
                line-height: 0.5rem;
                .one {
                  display: inline-block;
                  margin-left: 0.2rem;
                  float: left;
                  font-size: 0.2rem;
                }
                .two {
                  display: inline-block;
                  width: 0.18rem;
                  height: 0.16rem;
                  float: left;
                  margin-left: 1.4rem;
                  img {
                    width: 100%;
                    height: 100%;
                    vertical-align: baseline;
                  }
                }
                .thr {
                  width: 0.33rem;
                  // height: 0.20rem;
                  color: #ff9797;
                  margin-left: 0.1rem;
                  float: left;
                }
              }
              div {
                width: 100%;
                display: flex;
                justify-content: flex-left;
                .img {
                  width: 0.64rem;
                  height: 0.64rem;
                  border-radius: 50%;
                  background: magenta;
                  display: inline-block;
                  margin-left: 0.2rem;
                  img {
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                  }
                }
                .last {
                  display: inline-block;
                  font-size: 0.18rem;
                  height: 0.64rem;
                  line-height: 0.64rem;
                  margin-left: 0.2rem;
                  letter-spacing: 0.04rem;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>