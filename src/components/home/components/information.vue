<template>
    <div id="information">
        <div class="top"> 
            <img @click="gomy()" src="../../../../static/imgs/publish/icon_jiantou1.png" alt="">
            <span>消息</span>
            <span @click="voerlook()">忽略未读</span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
#information{
    width: 100%;
    height: 100%;
    font-family: MicrosoftYaHei;
    .top{
        padding: 0 .3rem;
        width: 100%;
        height: 1.1rem;
        font-size: .36rem;
        color: #202020;
        line-height: 1.2rem;
        background: rgb(253, 221, 98);
        font-weight: 500;
        position: fixed;
        left: 0;
        top: 0;
        span:nth-of-type(1){
            margin-left: 2.7rem;
        }
        span:nth-of-type(2){
            margin-left: 1.9rem;
            font-size: .28rem;
            color: #8F8F8F;
        }   
    }
}
</style>
