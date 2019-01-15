<template>
    <div class="footer">
        <div>
            合计：<span class="price">￥3.5</span>
        </div>
        <button @click="handleApply">提交订单</button>
    </div>
</template>

<script>
export default {
    methods: {
        handleApply(){
            this.$router.push({name:"goodApply"});
        }
    },
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