<template>
    <div id="shopList">
        <Header-com :mes="message"></Header-com>
        <div class="wrapper" ref="listWrapper">
            <div class="content">
                <Goods-com :val="id"></Goods-com>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./components/header"
import Goods from "./components/goods"
import Bscroll from "better-scroll"
export default {
    props:["id", "message"],
    components:{
        "Header-com":Header,
        "Goods-com":Goods
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.listWrapper,{
            click:true
        })
        // console.log(this.scroll);
    },
}
</script>


<style lang="scss" scoped>
    #shopList{
        height:100%;
        .wrapper{
            height:100%;
            .content{
                overflow: hidden;
            }
        }
    }
</style>