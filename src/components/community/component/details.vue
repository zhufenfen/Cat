<template>
    <div class="details">
        <div class="top">
            <div class="left" @click="$router.push('/community')"><img src="../../../../static/communityImg/jiao_03.jpg" alt=""></div>
            <div class="middle">详情</div>
            <div class="right">12</div>
        </div>
        <div class="center">
            <span class="one"><img src="../../../../static/communityImg/tpuxiang-xq@2x.png"></span>
            <span class="two">NOODLE</span>
            <span class="thr">关注</span>
            <span class="for">两周前</span>
        </div>
        <p>
            对猫的选择：一般说呢，纯种猫配种必须选择同种的纯种猫，这
            样生出来的后代才会血统纯正。体型差异大的猫咪不建议交配，
            容易导致生产时出现难产。
        </p>
        <div class="img"><img src="../../../../static/communityImg/img-xq@2x.png" alt=""></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
body{
    font-family: PingFang-SC-Regular;
}
    .details{
        width: 100%;
        height: 100%;
        .top{
            width: 100%;
            height: 1rem;
            background:  #FDDD62;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.36rem;
            color:  #202020 ;
            .left{
                padding-left: 0.25rem;
            }
            .right{
                padding-right: 0.2rem;
            }
        }
        .center{
            width: 100%;
            height: 1.2rem;
            display: flex;
            justify-content: flex-left;
            align-items: center;
            .one{
                width: 0.64rem;
                height: 0.64rem;
                margin-left: 0.25rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .two{
                margin-left: 0.2rem;
                font-size: 0.28rem;
            }
            .thr{
                width: 0.82rem;
                height: 0.4rem;
                border-radius: 15px;
                background:  #FDDD62 ;
                margin-left: 0.25rem;
                text-align: center;
                line-height: 0.4rem;
            }
            .for{
                margin-left:3.2rem;
            }
        }
        p{
            display: flex;
            flex-wrap: wrap;
            margin-left: 0.25rem;
            color: #585858;
            font-size: 0.24rem;
            line-height: 0.45rem;
            letter-spacing: 0.015rem;
        }
        .img{
            width: 6.9rem;
            height: 4.48rem;
            margin-left: 0.25rem;
            margin-top: 0.4rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>