<template>
    <div id="home">
        <div class="top">
            首页
        </div>
        
        <div class="wrapper scrollHome" ref="homewrapper">
        <div class="main">
        <div class="content">
            <div class="swiper-container banner">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../../../static/imgs/home-img/banner1.png" alt=""></div>
                    <div class="swiper-slide"><img src="../../../static/imgs/home-img/banner2.png" alt=""></div>
                    <div class="swiper-slide"><img src="../../../static/imgs/home-img/banner3.png" alt=""></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="star">
                <h2>萌宠明星</h2>
                <div>
                    <router-link :to="{name:'pet'}">
                    <div>
                        <p>活跃之星</p>
                        <img src="../../../static/imgs/home-img/star1.png" alt="">
                        <p>橘猫</p>
                        <p>3岁</p>
                    </div>
                    </router-link>
                    <router-link :to="{name:'pet'}">
                    <div>
                        <p>人气之星</p>
                        <img src="../../../static/imgs/home-img/star2.png" alt="">
                        <p>折耳猫</p>
                        <p>3岁</p>
                    </div>
                    </router-link>
                    <router-link :to="{name:'pet'}">
                    <div>
                        <p>魅力之星</p>
                        <img src="../../../static/imgs/home-img/star3.png" alt="">
                        <p>蓝猫</p>
                        <p>1岁</p>
                    </div>
                    </router-link>
                </div>
            </div>
            <div class="sift">
                <p>精选</p>
                <div v-for="(item,index) in homeList" :key="index" @click="goDetail()">
                    <img :src="item.photo" alt="">
                    <div>
                        <h3>{{item.title}}</h3>
                        <div>{{item.content}}</div>
                        <p><span>{{item.Number}}</span>人阅读</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
</template>

<script>
import Vuex from "Vuex"
import axios from "axios"
import Swiper from "swiper"
import BScroll from "better-scroll";
export default {
    data(){
        return{
            homeList:[]
        }
    },
    created(){
       
        this.getHome(),
        this.getmiaoquan()
    },
    computed:{
        // ...Vuex.mapState({
        //     homedata:state => state.home.list
        // })
    },
    methods:{
        getHome(){
            axios.post("/getHome").then((data)=>{
                if(data.success==true){
                    this.homeList = data.data;
                }
            })
        },
        getmiaoquan(){
            axios.post("/miaoquan/index").then((data)=>{
                console.log(data)
            })
        },
        goDetail(){
            // console.log(this.homeData())
            this.$router.push("/homedetail")
        },
        // ...Vuex.mapActions({
        //     homeData:"home/homeData"
        // })
    },
    mounted(){     //如果数据是静态可以在这里面实例化，如果是异步则需要watch中实例化
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            },
            autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            },
        })
        this.scroll = new BScroll(this.$refs.homewrapper, {
            pullUpLoad: true,
            click: true,
            probetype: 1
        });
        
    }
}
</script>


<style lang="scss" scoped>
#home{
    width: 100%;
    height: 100%;
    font-family: MicrosoftYaHei;
    
    .top{
        width: 100%;
        height: 1.1rem;
        font-size: .36rem;
        color: #202020;
        line-height: 1.2rem;
        background: rgb(253, 221, 98);
        text-align: center;
        font-weight: 500;
        
    }
    .scrollHome {
    width: 100%;
    // height: 100rem;
    height:18.77rem;    
    position: fixed;
    // top:1.1rem;
    overflow: hidden;
    .main {
      padding-bottom: 9rem;
    .content{
        overflow:auto;
        // margin-top: 1.1rem;
        width: 100%;
        height: 54rem;
        .banner{
            width: 100%;
            height: 2.25rem;
            img{
                width: 100%;
                height: 2.25rem;
            }
        }
        .star{
            padding: 0 .3rem;
            h2{
                height: .8rem;
                line-height: .8rem;
                font-size: .3rem;
                font-weight: 600;
            }
            div{
                display: flex;
                justify-content: space-between;
                div{
                    width: 2.25rem;
                    height: 2.9rem;
                    display: flex;
                    flex-direction: column;
                    // text-align: center;
                    align-items: center;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1), 0 0 10px rgba(0,0,0,0.1) inset;
                    img{
                        width: 1.13rem;
                        height: 1.15rem;
                    }
                    p{
                        height: .6rem;
                        line-height: .6rem;
                    }
                    p:nth-of-type(2){
                        line-height: .8rem;
                    }
                    p:nth-of-type(3){
                        line-height: .4rem;
                    }
                }
            }
        }
        .sift{
            padding: 0 .3rem;
            p{
                height: .8rem;
                line-height: .8rem;
            }
            div{
                width: 100%;
                height: 2.2rem;
                background: #f8f8f8;
                margin-bottom: .06rem;
                display: flex;
                
                justify-content: space-between;
                img{
                    margin: .2rem 0 .2rem .22rem;
                    width: 1.6rem;
                    height: 1.8rem;
                }
                div{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    h3{
                        width: 100%;
                        height: 100%;
                        height: .7rem;
                        line-height: .8rem;
                        text-indent: .3rem;
                    }
                    div{
                        height: 1.2rem;
                        line-height: .38rem;
                        text-indent: .3rem;
                        padding: 0 .3rem;
                        overflow:hidden;
                        text-overflow:ellipsis; 
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                    }
                    p{
                        height: .4rem;
                        line-height: .25rem;
                        padding: 0 .3rem;
                        text-align: right;
                    }
                }
            }
        }
    }
    }
    }
} 
</style>
