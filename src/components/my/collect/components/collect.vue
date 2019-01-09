<template>
    <div class="out">
        <div class="header">
           <span><router-link :to="{name:name}">〈</router-link></span>
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
console.log(ArticleCollect)
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
        this.scroll = new BScroll(this.$refs.homeWrapper,{
            //只有设置成true pullingUp才能使用
            pullUpLoad:true,
            click:true,
            probeType:2
        });
    }
}
</script>


<style lang="scss">
    .out{
        color: black;
        width:7.85rem;
        background: #eae6e6;
        .header{
            height: 0.8rem;
            width: 100%;
            margin-bottom: 0.1rem;
            span{
                height: 0.56rem;
                width: 0.3rem;
                font-size: 0.3rem;
                float: left;
                line-height: 0.8rem;
                margin-left:0.66rem; 
            }
            ul{
                margin-left:1rem; 
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