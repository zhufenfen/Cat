<template>
    <div class="footer">
        <div>
            合计：<span class="price">{{result.sumPrice | price}}</span>
        </div>
        <button @click="handleApply">提交订单</button>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    computed: {
        ...Vuex.mapGetters({
            result:"shopCart/result"
        })
    },
    methods: {
        handleApply(){
            this.$router.push({name:"goodApply"});
        }
    },
    filters:{
        price(n){
            return "￥" + n + ".00";
        }
    }
}
</script>


<style lang="scss" scoped>
    .footer{
        position: fixed;
        bottom:0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left:.33rem;
        width:100%;
        height:.8rem;
        font-size:.28rem;
        color:#202020;
        background:#fff;
        .price{
            color:#FF7878;
        }
        button{
            width:1.6rem;
            height: 100%;
            color:#fff;
            font-size:.28rem;
            background:#FF7878;
            border: none;
        }
    }
</style>