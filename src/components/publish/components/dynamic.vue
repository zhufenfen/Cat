<template>
    <div id="dynamic">
        <div class="top"> 
            <span @click="goBack()">取消</span>
            <span @click="announce()">发表</span>
        </div>
        <div class="count">
            <input type="text" placeholder="标题">
            <textarea placeholder="说说您此刻的想法..." name="" id="" cols="30" rows="10"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        announce(){
            alert("发表成功")
        }
    }
}
</script>

<style lang="scss" scoped>
#dynamic{
    overflow: hidden;
    width: 100%;
    height: 100%;
    .top{
        width: 100%;
        height: 1.58rem;
        font-size: .34rem;
        font-family: PingFang-SC-Regular;
        background: rgb(241, 242, 246);
        line-height: 1.7rem;
        display: flex;
        justify-content: space-between;
        padding: 0 .25rem;
        span:nth-of-type(2){
            color: #ff7878;
        }
    }
    .count{
        width: 100%;
        padding: .05rem .2rem;
        input{
            width: 100%;
            height: .89rem;
            outline: none;
            border: none;
            border-bottom: 0.01rem solid #ccc;
            margin-bottom: .31rem;
            font-size: .32rem;
            font-family: PingFang-SC-Regular;
            text-indent: .21rem;
        }
        textarea{
            width: 100%;
            border: none;
            outline: none;
            font-size: .28rem;
            font-family: PingFang-SC-Regular;
            text-indent: .21rem;
        }
    }
}
</style>
