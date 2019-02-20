<template>
    <div id="detail">
        <div class="top"> 
            <img @click="go()" src="../../../../static/imgs/publish/icon_jiantou1.png" alt="">
            <span>文章详情</span>
        </div>
        <div class="content">
            <h3>为什么你的猫不吃猫粮</h3>
            <p>作者：<span>小雅呀</span></p>
            <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，的覅GFUI爱是当，你看见啊SVN阿违法和那位方，哈市的空间纳斯达克是，几百万IE欧巴  氨基酸，可到付哈会计师的发挥
                奥克兰的房间爱上对方拒绝送风口减肥呢<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;爱上第一个发USD异步vsjvb
                收到货开关阀速度不吃亏VB这款项目VB胃口不好一样。情况不是要强硬的逼迫猫咪去吃猫粮。胃口不好一样。情况不是要强硬的逼迫猫咪去吃猫粮。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;爱上第一个发USD异步vsjvb
                收到货开关阀速度不吃亏VB这款项目VB胃口不好一样。情况不是要强硬的逼迫猫咪去吃猫粮。胃口不好一样。情况不是要强硬的逼迫猫咪去吃猫粮。
            </div>
            <img src="../../../../static/imgs/home-img/img-wenzh@2x.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        go(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
#detail{
    width: 100%;
    height: 100%;
    .top{
        width: 100%;
        height: 1.1rem;
        font-size: .34rem;
        font-family: MicrosoftYaHei;
        padding-top: .3rem;
        background: rgb(253, 221, 98);
        img{
            width: .24rem;
            height: .42rem;
            display: inline-block;
            margin-left: .16rem;
            width:.18rem;
            height:.32rem;
        }
        span{
            margin-left: 2.55rem;
            font-weight: 600;
        }
    }
    .content{
        padding: 0 .28rem;
        h3{
            font-size: .32rem;
            color: #202020;
            height: .85rem;
            line-height: 1rem;
        }
        p{
            font-size: .28rem;
            color: #585858;
            height: .7rem;
            line-height: .36rem
        }
        div{
            font-size: .28rem;
            color: #202020;
            line-height: .44rem
        }
        img{
            width: 6.94rem;
            height: 5.05rem;
        }
    }
}
</style>
