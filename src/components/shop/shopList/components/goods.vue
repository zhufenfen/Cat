<template>
    <div class="goods">
        <div class="goodItem" v-for="(item, index) in goodsList" @click="goodDetail(val, item.shopId)">
            <img class="img1" :src="item.shopImg">
            <p>{{item.shopTitle}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:["val"],
    created() {
        this.$axios.post("/getShop",{
            classifyId:this.val
        }).then(data=>{
            this.goodsList = data;
        })
    },
    data(){
        return{
            goodsList:[]
            /*goodsList:[
                {
                    img1:"static/imgs/shopList/img-cf-1@2x.png",
                    span1:"纯棉印花"
                },
                {
                    img1:"static/imgs/shopList/img-cf-2@2x.png",
                    span1:"加绒舒适卫衣"
                },
                {
                    img1:"static/imgs/shopList/img-cf-3@2x.png",
                    span1:"夏季可爱萌系"
                },
                {
                    img1:"static/imgs/shopList/img-cf-4@2x.png",
                    span1:"网红猫咪秋冬装"
                },
                {
                    img1:"static/imgs/shopList/img-cf-5@2x.png",
                    span1:"猫咪居家服睡衣"
                },
                {
                    img1:"static/imgs/shopList/img-cf-6@2x.png",
                    span1:"可爱猫咪毛衣"
                },
                {
                    img1:"static/imgs/shopList/img-cf-1@2x.png",
                    span1:"纯棉印花"
                },
                {
                    img1:"static/imgs/shopList/img-cf-2@2x.png",
                    span1:"加绒舒适卫衣"
                }
            ] */
        }
    },
    methods: {
        goodDetail(shopId){
            this.$router.push({name:"goodDetail", params:{shopId:shopId}});
        }
    }
}
</script>


<style lang="scss" scoped>
    .goods{
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top:1.1rem;
        height:100%;
        background:#f0f2f5;
        .goodItem{
            margin:.1rem;
            margin-top:.15rem;
            width:45%;
            height:3.8rem;
            text-align: center;
            background:#fff;
            .img1{
                width:100%;
                height:2.8rem;
            }
            p{
                line-height: 1rem;
            }
        }
    }
</style>