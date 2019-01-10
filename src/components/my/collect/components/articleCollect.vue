<template>
    <div class="treasore wrapper"  ref="tabsWrapper">
        <ul class="content">
            <li v-for="(item,index) in list">
                <img :src=item.src1 alt="">
                <p>{{item.txt}}</p>
                <div class="bottom">
                    <div class="photo">
                    </div>
                    <span class="title">
                        瞄圈公众号
                    </span>
                    <img src="../../../../../static/hrj_img/icon-chakan.png" alt="">
                    <span>
                        {{item.num}}
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
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
    data(){
        return{
            list:[
            {
                  src1:require("../../../../../static/hrj_img/img-wzsc.png"),
                  txt:"打疫苗，最可怕的是不懂这些问题！",
                  num:"8843",
            },
            {
                  src1:require("../../../../../static/hrj_img/img-wzsc-2.png"),
                  txt:"猫咪打喷嚏的原因，原来是这样啊！",
                  num:"3443",
            },
             {
                  src1:require("../../../../../static/hrj_img/img-wzsc-3.png"),
                  txt:"猫咪年龄的6种估测方式",
                  num:"1123",
            },
             {
                  src1:require("../../../../../static/hrj_img/img-wzsc-4.png"),
                  txt:"打疫苗，最可怕的是不懂这些问题！",
                  num:"2223",
            },
            {
                  src1:require("../../../../../static/hrj_img/img-wzsc-7.png"),
                  txt:"让猫咪变得更可爱，你可以这样做！",
                  num:"3413",
            },
             {
                  src1:require("../../../../../static/hrj_img/img-wzsc-6.png"),
                  txt:"猫咪年龄的6种估测方式",
                  num:"8843",
            },
            {
                  src1:require("../../../../../static/hrj_img/img-wzsc-7.png"),
                  txt:"猫咪打喷嚏的原因，原来是这样啊！",
                  num:"8843",
            },
             {
                  src1:require("../../../../../static/hrj_img/img-wzsc-6.png"),
                  txt:"撸猫心得，你家的猫咪也这么可爱吗？",
                  num:"8843",
            },
             {
                  src1:require("../../../../../static/hrj_img/img-wzsc-3.png"),
                  txt:"猫咪年龄的6种估测方式",
                  num:"8843",
            },
             {
                  src1:require("../../../../../static/hrj_img/img-wzsc-4.png"),
                  txt:"打疫苗，最可怕的是不懂这些问题！",
                  num:"8843",
            },
            {
                  src1:require("../../../../../static/hrj_img/img-wzsc-7.png"),
                  txt:"猫咪打喷嚏的原因，原来是这样啊！",
                  num:"8843",
            },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .treasore{
        z-index: 9;
        padding: 1px;
       font-size: 0.30rem;
       height: 100%;
       width: 7.5rem;
       margin: 0 auto;
       ul{
          width: 100%;
          height:100%;
          display: flex;
          flex-wrap: wrap;
          height: max-content;
          li{ 
              background: white;
              width: 3.28rem;
              padding: 0.05rem;
              border-radius:10px; 
              margin:0.05rem;
              img{
                  width: 3.23rem;
              }
              .bottom{
                  height: 0.8rem;
                  width: 100%;
                  .photo{
                      line-height: 0.8rem;
                      height: 0.64rem;
                      width: 0.64rem;
                      background: pink;
                      border-radius: 50px;
                      float: left;
                  }
                  span{
                      line-height: 0.8rem;
                      font-size: 0.28rem;
                  }
                  img{
                      height: 0.2rem;
                      width: 0.3rem
                  }
              }
          }
       }
    }
</style>