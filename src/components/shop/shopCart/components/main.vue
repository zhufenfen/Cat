<template>
    <div id="main">
        <div class="shopItem" v-for="(item, index) in shopItem">
            <input v-show="false" type="checkbox">
            <span :class="item.flag?'active':''" @click="handleCheck(index)"></span>
            <img :src="item.imgUrl">
            <div class="message">
                <div class="title">{{item.title}}</div>
                <div class="size">
                    尺寸：
                    <span>{{item.size}}</span>
                </div>
                <div class="color">
                    颜色：
                    <span>{{item.color}}</span>
                </div>
                <div class="priceNum">
                    <span class="price">￥128</span>
                    <span class="oper">-</span>
                    <span class="num">{{item.num}}</span>
                    <span class="oper">+</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            shopItem:[
                {
                    flag:false,
                    imgUrl:"static/imgs/shopCart/img-gwc-1.png",
                    title:"喵喵时尚碎花围巾",
                    size:"M",
                    color:"深红",
                    price:"￥99",
                    num:1
                },
                {
                    flag:false,
                    imgUrl:"static/imgs/shopCart/img-gwc-2.png",
                    title:"猫咪冬季保暖睡袋",
                    size:"S",
                    color:"淡黄",
                    price:"￥128",
                    num:1
                },
                {
                    flag:false,
                    imgUrl:"static/imgs/shopCart/img-gwc-3.png",
                    title:"藤编网红凉猫窝夏季封闭式猫屋",
                    size:"M",
                    color:"浅蓝",
                    price:"￥99",
                    num:1
                },
                {
                    flag:false,
                    imgUrl:"static/imgs/shopCart/img-gwc-4.png",
                    title:"猫咪u型护颈枕头腰枕靠垫毛绒玩具",
                    size:"M",
                    color:"米白",
                    price:"￥99",
                    num:1
                },
            ]
        }
    },
    methods: {
        handleCheck(index){
            this.shopItem[index].flag = !this.shopItem[index].flag;
        }
    },
}
</script>


<style lang="scss" scoped>
    #main{
        margin-top:1.1rem;
        .shopItem{
            display: flex;
            align-items: center;
            padding:.2rem .33rem;
            height:2rem;
            border-bottom:1px solid rgba(32,32,32,.2);
            >span{
                display:inline-block;
                margin-right:.19rem;
                width:.2rem;
                height:.2rem;
                border:.02rem solid #202020;
                border-radius: 50%;
                vertical-align: middle;
            }
            .active{
                background:#FF7878;
                border:.02rem solid #FF7878;
            }
            img{
                margin-right: .19rem;
                width:1.6rem;
                height:1.6rem;
            }
            .message{
                line-height: .35rem;
                font-size:.24rem;
                color:#585858;
                .title{
                    line-height: .4rem;
                    font-size:.28rem;
                    color:#202020;
                }
                .priceNum{
                    margin-top:.1rem;
                    .price{
                        margin-right: .2rem;
                    }
                    .num{
                        padding:0 .2rem;
                    }
                    .oper{
                        display: inline-block;
                        width:.6rem;
                        height:.3rem;
                        line-height:.3rem;
                        text-align: center;
                        border: 1px solid #aaa;
                    }
                }
            }
        }
    }
</style>