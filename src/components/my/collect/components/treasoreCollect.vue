<template>
    <div class="treasore wrapper" ref="prodectWrapper">
        <ul class="content prodect">
                 <li v-for="(item,index) in list">
                     <div class="left">
                            <img :src=item.src1 alt="">
                     </div>
                     <div class="right">
                            <h3>{{item.txt1}}</h3>
                            <p>{{item.txt2}}</p>
                            <span>{{item.price}}</span>
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
           this.scroll=new BScroll(this.$refs.prodectWrapper,{
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
                  src1:require("../../../../../static/hrj_img/img-bbsc-1.png"),
                  txt1:"日本多漫风格  猫用  水晶艺术食盒",
                  txt2:"双层底盒 炫彩可爱 经久耐用",
                  price:"$  67"
            },
             {
                  src1:require("../../../../../static/hrj_img/img-bbsc-2.png"),
                  txt1:"贵为卡通超萌防滑垫--粉猪",
                  txt2:"可爱猫窝 毛绒 可水洗 保暖",
                  price:"$  267"
            },
             {
                  src1:require("../../../../../static/hrj_img/img-bbsc-3.png"),
                  txt1:"比利时欧弟皇家猫粮",
                  txt2:"原装进口 天然原生 调节食欲",
                  price:"$  132"
            },
             {
                  src1:require("../../../../../static/hrj_img/img-bbsc-5.png"),
                  txt1:"易宝娜好口味 猫粮 蟹肉味",
                  txt2:"易吸收 好美味 流质零食",
                  price:"$  28"
            },
             {
                  src1:require("../../../../../static/hrj_img/img-bbsc-6.png"),
                  txt1:"冠能全价猫粮205g",
                  txt2:"优孤立肾 增加免疫力",
                  price:"$  165"
            },
             {
                  src1:require("../../../../../static/hrj_img/img-bbsc-7.png"),
                  txt1:"西式小金汤",
                  txt2:"口感鲜美 营养美味 维持健康",
                  price:"$  18"
            },
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
    .treasore{
        font-family: PingFang-SC-Regular;
        padding: 1px;
        width:334px;
        height:28px;
        font-size:28px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(32,32,32,1);
       height: 100%;
       width: 7.5rem;
       margin: 0 auto;
        background:#f0f2f5;
       .prodect{
          width: 100%;
          height:100%;
          display: flex;
          flex-wrap: wrap;
          height: max-content;
           background:#f0f2f5;
          li{   
                margin:0.05rem; 
                display: flex;
                justify-content: space-around;
                height: 1.6rem;
                width: 100%;
                border-radius: 10px;
                .left{
                    height: 1.6rem;
                    width: 1.6rem;
                    img{
                        height: 1.6rem;
                        width: 1.6rem;
                    }
                }
                .right{
                    color: black;
                    height: 1.6rem;
                    width: 5.2rem;
                    h3{
                        font-family:PingFang-SC-Regular;
                        font-weight:400;
                        color:rgba(32,32,32,1);
                        font-size: 0.26rem;
                        padding-bottom: 0.15rem;
                        font-weight: 100;
                    }
                    p{
                        font-size: 0.24rem;
                        padding-bottom: 0.35rem;
                        font-family:PingFang-SC-Regular;
                        font-weight:400;
                        color:rgba(88,88,88,1);
                    }
                    span{
                        color: gray;
                    }
                }
          }
       }
    }
</style>