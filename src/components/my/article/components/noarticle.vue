<template>
    <div class="outside">
       <div class="header">
           <span><router-link :to="{name:name}">〈</router-link></span>
           <ul>
               <li>
                     <h2>爱宠信息</h2>
               </li>
           </ul>
           <router-link to="/my/pet/petchange"><img src="static/hrj_img/icon-bxi.png" alt=""></router-link>
        </div>
        <div class="main">
                 <p>暂无信息哦！！</p>
        </div>
    </div>
</template>

<script>

export default {
    data(){
         return{
             comName: "TreasoreCollect-com",
             path:"/my",
             name:"my",
         }
     },
}
</script>


<style lang="scss" scoped>
    .outside{
        height:100%;
        color: black;
        width:7.85rem;
        background: #eae6e6;
        .header{
            width: 100%;
            margin-bottom: 0.2rem;
            height:0.88rem;
            background:rgba(253,221,98,1);
            img{
                height: 0.4rem;
                width: 0.4rem;
                float: right;
                margin-right: 0.7rem;
                margin-top:0.22rem; 
            }
            span{
                height: 0.56rem;
                width: 0.3rem;
                font-size: 0.3rem;
                float: left;
                line-height: 0.8rem;
                margin-left:0.66rem; 
            }
            ul{
                float: left;
                width: 5.5rem;
                height: 0.8rem;
                li{
                   width: 5rem;
                    margin:0 auto;
                    line-height: 0.8rem;
                    text-align: center;
                }
            }
        }
        .main{
            height: 15rem;
            width: 100%;
            background: url(../../../../../static/hrj_img/icon-wsj.png) no-repeat;
            background-position: 2.2rem 3rem;
            p{  
                font-size: 0.3rem;
                text-align: center;
                width: 7.5rem;
                color: gray;
                padding-top: 6rem;
            }
        }
    }
</style>