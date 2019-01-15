<template>
    <div class="header">
        <img src="static/imgs/jiao_03.jpg" @click="handleBack">
        <span>我的订单</span>
    </div>
</template>

<script>
export default {
    methods: {
        handleBack(){
            this.$router.back();
        }
    },
}
</script>


<style lang="scss" scoped>
    .header{
        z-index: 2;
        position: fixed;
        top:0;
        display: flex;
        align-items: center;
        justify-content: center;
        width:100%;
        height:1.1rem;
        background:#FDDD62;
        img{
            position: absolute;
            left:.29rem;
            width:.18rem;
            height:.32rem;
        }
        span{
            font-size:.36rem;
            color:#202020;
        }
    }
</style>