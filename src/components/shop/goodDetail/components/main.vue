<template>
    <div id="main">
        <div class="img">
            <img src="static/imgs/shopDetail/img-maomii.png">
        </div>
        <div class="message">
            <div class="price">￥88.88</div>
            <div class="title">宠物背心英短蓝猫布偶加菲小猫衣服</div>
            <div class="classify">颜色分类</div>
            <div class="color">
                <span :class="colorFlag?'active':''" @click="handleColor(1)">黑色</span>
                <span :class="colorFlag?'':'active'" @click="handleColor(2)">粉红色</span>
            </div>
            <div class="classify">尺码</div>
            <div class="size">
                <span :class="sizeFlag==1?'active':''" @click="handleSize(1)">S号（1-3斤）</span>
                <span :class="sizeFlag==2?'active':''" @click="handleSize(2)">M号（4-5.5斤）</span>
                <span :class="sizeFlag==3?'active':''" @click="handleSize(3)">L号（适合6-8斤）</span>
            </div>
            <div class="classify">购买数量</div>
            <div class="num">
                <span class="oper" @click="handleReduce">-</span>
                <span class="number">{{num}}</span>
                <span class="oper" @click="handleAdd">+</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            colorFlag:true,
            sizeFlag:1,
            num:1
        }
    },
    methods: {
        handleColor(val){
            if(val == 1){
                this.colorFlag = true;
            }else if(val == 2){
                this.colorFlag = false;
            }
        },
        handleSize(val){
            this.sizeFlag = val;
        },
        handleReduce(){
            if(this.num >= 2){
                this.num--;
            }else{
                this.num = 1;
            }
        },
        handleAdd(){
            this.num++;
        }
    },
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