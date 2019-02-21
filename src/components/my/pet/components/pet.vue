<template>
    <div class="outside">
        <div class="header">
           <span><router-link :to="{name:name}"><img src="/static/hrj_img/left.png" alt=""></router-link></span>
           <ul>
               <li>
                     <h2>爱宠信息</h2>
               </li>
           </ul>
           <router-link to="/my/pet/petchange"><img src="/static/hrj_img/icon-bxi.png" alt=""></router-link>
        </div>
         <div class="main" v-for="(item,index) in message">
              <img :src=item.picture alt="">
              <h2>{{item.name}}</h2>
              <p><span>生日</span>  {{item.birthday}}</p>
              <p><span>性别</span>  {{item.gender}}</p>
              <p><span>品种</span>  {{item.varieties}}</p>
              <p><span>介绍</span>  {{item.synopsis}}</p>
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
             message:[
                    {
                  picture:"/static/hrj_img/touxiang-guanzhu-5.png",
                  name:"艾琪儿",
                  birthday:"2017-10-20",
                  gender:"MM",
                  varieties:"波斯猫",
                  synopsis:"作为波斯猫，永远带着成熟稳重的眼神，给人一种踏实感"
                  }
             ]
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
        .main{
             padding-left:0.3rem; 
            margin: 0.1rem;
            width: 7.3rem;
            height: 12.30rem;
            background: #eae6e6;
            img{
                height: 7.3rem;
                width: 6.83rem;
            }
            h2{
                padding: 0.4rem 0 0.1rem 0.1rem;
            }
            p{
                padding: 0.1rem;
                color:gray;
                span{
                    color: black;
                    font-weight: 600;
                    font-size: 0.26rem;
                    padding-right: 0.2rem;
                }
            }
            
        }
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
                margin-left:0.46rem; 
                img{
                    height: 0.4rem;
                    width: 0.2rem;
                    float: left;
                }
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
    }
</style>