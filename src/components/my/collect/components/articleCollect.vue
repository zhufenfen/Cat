<template>
    <div class="treasore wrapper"  ref="tabsWrapper">
        <ul class="content">
            <li v-for="(item,index) in lists">
                <img :src=item.src1 alt="">
                <p>{{item.txt}}</p>
                <div class="bottom">
                    <div class="photo">
                    </div>
                    <div class="commit">
                        <span class="title">
                            瞄圈公众号
                        </span>
                        <img src="/static/hrj_img/icon-chakan.png" alt="">
                        <span>
                            {{item.num}}
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
    mounted(){
       if(!this.scroll){
           this.scroll=new BScroll(this.$refs.tabsWrapper,{
            pullUpLoad:true,
            click:true,
            probeType:2
           })
        //    screenY:true
       }
     },
    // data(){
    //     return{
    //         list:[
    //         {
    //               src1:require("../../../../../static/hrj_img/img-wzsc.png"),
    //               txt:"打疫苗，最可怕的是不懂这些问题！",
    //               num:"8843",
    //         },
    //         {
    //               src1:require("../../../../../static/hrj_img/img-wzsc-2.png"),
    //               txt:"猫咪打喷嚏的原因，原来是这样啊！",
    //               num:"3443",
    //         },
    //          {
    //               src1:require("../../../../../static/hrj_img/img-wzsc-3.png"),
    //               txt:"猫咪年龄的6种估测方式",
    //               num:"1123",
    //         },
    //          {
    //               src1:require("../../../../../static/hrj_img/img-wzsc-4.png"),
    //               txt:"打疫苗，最可怕的是不懂这些问题！",
    //               num:"2223",
    //         },
    //         {
    //               src1:require("../../../../../static/hrj_img/img-wzsc-7.png"),
    //               txt:"让猫咪变得更可爱，你可以这样做！",
    //               num:"3413",
    //         },
    //          {
    //               src1:require("../../../../../static/hrj_img/img-wzsc-6.png"),
    //               txt:"猫咪年龄的6种估测方式",
    //               num:"8843",
    //         },
    //         {
    //               src1:require("../../../../../static/hrj_img/img-wzsc-7.png"),
    //               txt:"猫咪打喷嚏的原因，原来是这样啊！",
    //               num:"8843",
    //         },
    //          {
    //               src1:require("../../../../../static/hrj_img/img-wzsc-6.png"),
    //               txt:"撸猫心得，你家的猫咪也这么可爱吗？",
    //               num:"8843",
    //         },
    //          {
    //               src1:require("../../../../../static/hrj_img/img-wzsc-3.png"),
    //               txt:"猫咪年龄的6种估测方式",
    //               num:"8843",
    //         },
    //          {
    //               src1:require("../../../../../static/hrj_img/img-wzsc-4.png"),
    //               txt:"打疫苗，最可怕的是不懂这些问题！",
    //               num:"8843",
    //         },
    //         {
    //               src1:require("../../../../../static/hrj_img/img-wzsc-7.png"),
    //               txt:"猫咪打喷嚏的原因，原来是这样啊！",
    //               num:"8843",
    //         },
    //         ]
    //     }
    // }
     created(){
        this.$store.dispatch("articleCollect/handle");
        },
    computed: {
            ...Vuex.mapState({
                lists:state=>state.articleCollect.lists
            })
    },
}
</script>
<style lang="scss" scoped>
    .treasore{
        font-size:28px;
        font-weight:400;
        color:rgba(32,32,32,1);
       font-size: 0.30rem;
       height: 100%;
       width: 7.5rem;
       margin: 0 auto;
       margin-top: 0.8rem;
       ul{
          background:#f0f2f5;
          width: 100%;
          height:100%;
          display: flex;
          flex-wrap: wrap;
          height: max-content;
          li{ 
              overflow: hidden;
              background:#f0f2f5;
              width: 3.28rem;
              overflow: hidden;
              border-radius:10px; 
              margin:0.05rem;
              height: max-content;
              p{
                  height: 0.8rem;
                  float: left;
                  font-size: 0.25rem;
              }
              img{
                  height: 2.7rem;
                  width: 3.23rem;
              }
              .bottom{
                  float: left;
                  height: 0.6rem;
                  width: 100%;
                  overflow: hidden;
                  .photo{
                      height: 0.56rem;
                      width: 0.56rem;
                      background: pink;
                      border-radius: 50px;
                      float: left;
                  }
                  .commit{
                            margin-left: 0.15rem;
                            display: flex;
                            justify-content: space-around;
                            height: 0.4rem;
                            line-height: 0.4rem;
                            width: 2.4rem;
                            float: left;
                            span{
                                line-height: 0.56rem;
                                font-size: 0.26rem;
                                padding-bottom: 0.2rem;
                            }
                            img{
                                margin-top: 0.2rem;
                                height: 0.2rem;
                                width: 0.3rem
                            }
                  }
              }
          }
       }
    }
</style>