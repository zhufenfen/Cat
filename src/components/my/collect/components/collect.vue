<template>
    <div class="out">
        收藏
        <div class="header">
           <span>〈</span>
           <ul>
               <li>
                     宝贝收藏
               </li>
               <li>
                     文章收藏
               </li>
           </ul>
        </div>
    </div>
</template>

<script>

export default {
    components:{
    
    }
}
</script>


<style lang="scss">
    .out{
        color: black;
        width:7.85rem;
        height:16.29rem;
        background: #eae6e6;
        .header{
            height: 0.8rem;
            width: 100%;
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