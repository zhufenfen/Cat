<template>
    <div class="out">
        <div class="header">
           <span><router-link :to="{name:name}"><img src="/static/hrj_img/left.png" alt=""></router-link></span>
           <ul>
               <li @click="handleToggle(1)">
                     宝贝收藏
               </li>
               <li @click="handleToggle(0)">
                     文章收藏
               </li>
           </ul>
        </div>
             <component :is="comName"></component>
    </div>
</template>

<script>
import ArticleCollect from "./articleCollect.vue";
import TreasoreCollect from "./treasoreCollect.vue";
import BScroll from "better-scroll";
export default {
    components: {
    "ArticleCollect-com":ArticleCollect,
    "TreasoreCollect-com": TreasoreCollect,
     },
     data(){
         return{
             comName: "TreasoreCollect-com",
             path:"/my",
             name:"my",
         }
     },
     methods: {
    handleToggle(index) {
      switch (index) {
        case 0:
          this.comName = "ArticleCollect-com";
          break;
        case 1:
          this.comName = "TreasoreCollect-com";
          break;
      }
    },
   },
   mounted () {
        
    }
}
</script>


<style lang="scss" scoped>
    .out{
        height:100%;
        color: black;
        width:7.85rem;
         background:#f0f2f5;
        .content{
            width: 100%;
            height: 100%;
        }
        .header{
             background:#f0f2f5;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999;
            height: 0.8rem;
            width: 100%;
            margin-bottom: 0.2rem;
            span{
                img{
                    height: 0.32rem;
                    width: 0.18rem;
                }
                margin-left: 0.3rem;
                height: 0.56rem;
                width: 0.3rem;
                font-size: 0.3rem;
                float: left;
                line-height: 0.8rem;
            }
            ul{
                margin-left:1.46rem; 
                height: 0.8rem;
                width: 4.0rem;
                float: left;
                li{ 
                    &:hover{
                        border-bottom: 0.03rem pink solid;
                        color: pink;
                    }
                    height: 0.8rem;
                    line-height: 0.8rem;
                    width: 1.7rem;
                    float: left;
                    font-size: 0.4rem;
                    &:nth-child(2){
                        margin-left:0.6rem 
                    }
                }
            }
        }
    }
</style>