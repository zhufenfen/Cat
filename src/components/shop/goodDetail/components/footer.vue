<template>
    <div class="footer">
        <div class="one">
            <div>
                <img @click="handleClick" :src="img1Url" alt="">
            </div>
            收藏
        </div>
        <div class="two" @click="shopCart">
            <div>
                <img src="static/imgs/shopDetail/icon-xq-gw.png" alt="">    
            </div>
            购物车
        </div>
        <div class="three">
            <span @click="handleAdd">加入购物车</span><span @click="handleBuy">立即购买</span>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import {Toast} from "mint-ui";
export default {
    data(){
        return{
            img1Url:"static/imgs/shopDetail/icon-xq-xin.png",
        }
    },
    computed: {
        ...Vuex.mapState({
            goodDetail:state=>state.goodDetail.goodDetail
        })
    },
    methods: {
        handleClick(){
            /* this.$axios({
                method:"post",
                url:"http://localhost:3000/shopCollection",
                data:this.goodDetail.shopId
            }).then(data=>{
                if(data.flag){
                    if(this.img1Url == "static/imgs/shopDetail/icon-xq-xin.png"){
                        this.img1Url = "static/imgs/shopDetail/icon-love.png";
                    }else{
                        this.img1Url = "static/imgs/shopDetail/icon-xq-xin.png";
                    }
                }
            }) */
            if(this.img1Url == "static/imgs/shopDetail/icon-xq-xin.png"){
                this.img1Url = "static/imgs/shopDetail/icon-love.png";
            }else{
                this.img1Url = "static/imgs/shopDetail/icon-xq-xin.png";
            }
        },
        handleAdd(){
            /* this.$axios({
                method:"post",
                url:"http://localhost:3000/shopCart",
                data:{
                    shopId:this.goodDetail.shopId,
                    num:this.goodDetail.num,
                    goodColor:this.goodDetail.goodColor[this.goodDetail.colorFlag],
                    goodSize:this.goodDetail.goodSize[this.goodDetail.sizeFlag]
                }
            }).then(data=>{
                // console.log(data);
                // if(data.flag){
                    Toast({
                        message: '已成功添加到购物车',
                        duration:1500,
                        // className:"gwc",
                        // position:"bottom"
                    })
                // }
            })        */ 
            Toast({
                message: '已成功添加到购物车',
                duration:1500,
                // className:"gwc",
                // position:"bottom"
            })
        },
        shopCart(){
            // 还需要传用户id
            this.$router.push({name:"shopCart"});
        },
        handleBuy(){
            this.$router.push({name:"goodBalance",params:{shopId:this.goodDetail.shopId}});
        }
    },
}
</script>


<style lang="scss" scoped>
    .gwc{
        padding:.5rem;
        font-size:.7rem;
    }
    .footer{
        position: fixed;
        bottom:0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width:100%;
        height:.98rem;
        background:#fff;
        .one{
            img{
                width:.47rem;
                height:.42rem;
            }
        }
        .two{
            img{
                width:.52rem;
                height:.43rem;
            }
        }
        .three{
            span{
                display: inline-block;
                width:2rem;
                line-height:.6rem;
                border:none;
                font-size:.28rem;
                color:#fff;
                text-align: center;
            }
            span:nth-child(1){ 
                background:#fddd62;
                border-radius:.3rem 0 0 .3rem;
            }
            span:nth-child(2){
                background:#f77;
                border-radius:0 .3rem .3rem 0;
            }
        }
    }
</style>