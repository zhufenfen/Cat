<template>
    <div id="main">
        <div class="img">
            <img :src="good.goodImage">
        </div>
        <div class="message">
            <div class="price">{{good.goodPrice | price}}</div>
            <div class="title">{{good.goodTitle}}</div>
            <div class="classify">颜色分类</div>
            <div class="color">
                <span v-for="(item, index) in good.goodColor" @click="handleColor(index, item)" :class="good.colorFlag==index?'active':''">
                    {{item}}
                </span>
            </div>
            <div class="classify">尺码</div>
            <div class="size">
                <span v-for="(item, index) in good.goodSize" @click="handleSize(index, item)" :class="good.sizeFlag==index?'active':''">
                    {{item}}
                </span>
            </div>
            <div class="classify">购买数量</div>
            <div class="num">
                <span class="oper" @click="handleReduce">-</span>
                <span class="number">{{good.num}}</span>
                <span class="oper" @click="handleAdd">+</span>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    props:["shopId"],
    created() {
        this.$store.dispatch("goodDetail/handleGoodDetail", this.shopId);
    },
    computed:{
        ...Vuex.mapState({
            good:state=>state.goodDetail.goodDetail
        })
    },
    methods: {
        ...Vuex.mapMutations({
            handleColor:"goodDetail/handleGoodColor",
            handleSize:"goodDetail/handleGoodSize",
            handleReduce:"goodDetail/handleGoodReduce",
            handleAdd:"goodDetail/handleGoodAdd"
        })
    },
    filters:{
        price(p){
            return "￥"+p;
        }
    }
}
</script>
<style lang="scss" scoped>
    #main{
        margin-top:1.1rem;
        .img{
            width:100%;
            height:4.76rem;
            overflow: hidden;
            img{
                width:100%;
            }
        }
        .message{
            margin-top:.3rem;
            padding-left: .6rem;
            .price{
                line-height: .7rem;
                font-size: .37rem;
                color:#f77;
            }
            .title{
                line-height: .4rem;
                font-size:.32rem;
                color:#202020;
            }
            .classify{
                margin-top:.2rem;
                line-height: .6rem;
                font-size:.27rem;
                color:#202020;
            }
            .size,.num{
                line-height: .7rem;
            }
            span{
                display: inline-block;
                margin-right: .26rem;
                line-height:.5rem;
                padding:0 0.1rem;
                color:#202020;
                font-size:.24rem;
                background:#ddd;
                border-radius: .1rem;
            }
            .active{
                color:#fff;
                background:#f77;
            }
            .num{
                span{
                    margin-right:.1rem;
                }
                .oper{
                    width:.5rem;
                    text-align: center;
                }
                .number{
                    background:#f0f2f5;
                }   
            }
        }
    }
</style>