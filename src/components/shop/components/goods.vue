<template>
    <div class="goods">
        <div class="goodItem" v-for="(item, index) in goodsList" @click="shopList">
            <img class="img1" :src="item.img1">
            <div>
                <img class="img2" :src="item.img2">
            </div>
            <div class="messageOne">
                <span></span>
                {{item.span1}}
                <span></span>
            </div>
            <div class="messageTwo">{{item.span2}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            goodsList:[
                {
                    img1:"static/imgs/shop/img-sc-1@2x.png",
                    img2:"static/imgs/shop/icon-yf@2x.png",
                    span1:"喵喵潮服",
                    span2:"让喵喵和你一样潮"
                },
                {
                    img1:"static/imgs/shop/img-sc-2@2x.png",
                    img2:"static/imgs/shop/icon-sp@2x.png",
                    span1:"可爱饰品",
                    span2:"让你的它萌上加萌"
                },
                {
                    img1:"static/imgs/shop/img-sc-3@2x.png",
                    img2:"static/imgs/shop/icon-ls@2x.png",
                    span1:"零食奖励",
                    span2:"像妈妈一样照顾它"
                },
                {
                    img1:"static/imgs/shop/img-sc-4@2x.png",
                    img2:"static/imgs/shop/icon-wj@2x.png",
                    span1:"乖乖玩具",
                    span2:"没事就爱逗ta玩"
                }
            ]
        }
    },
    methods: {
        shopList(){
            this.$router.push("/shopList");
        }
    }
}
</script>


<style lang="scss">
    .goods{
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top:1.1rem;
        background:#f0f2f5;
        .goodItem{
            margin:.1rem;
            margin-top:.15rem;
            width:45%;
            height:5.44rem;
            text-align: center;
            background:#fff;
            .img1{
                width:100%;
                height:3.2rem;
            }
            .img2{
                margin-top:.29rem;
                width:.73rem;
                height:.67rem;
            }
            .messageOne{
                line-height: .60rem;
                font-size:.36rem;
                text-shadow: 1px 1px;
                span{
                    display: inline-block;
                    width:.5rem;
                    height:.01rem;
                    background:#000;
                    vertical-align: middle;
                } 
            }
            .messageTwo{
                font-size:.24rem;
                line-height: .33rem;
                opacity: .6;
            }
        }
    }
</style>