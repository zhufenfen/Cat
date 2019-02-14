<template>
    <div id="goodBalance">
        <Header-com></Header-com>
        <div class="wrapper" ref="shopWrapper">
            <div class="content">
                <Main-com :shopId="shopId"></Main-com>
            </div>
        </div>
        <Footer-com :shopId="shopId"></Footer-com>
    </div>
</template>

<script>
import Bscroll from "better-scroll"
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
export default {
    components:{
        "Header-com":Header,
        "Main-com":Main,
        "Footer-com":Footer
    },
    props:["shopId"],
    mounted() {
        this.scroll = new Bscroll(this.$refs.shopWrapper,{
            click:true
        })
    },
}
</script>


<style lang="scss" scoped>
    #goodBalance{
        height:100%;
        background:#f0f2f5;
        .wrapper{
            height:100%;
            .content{
                overflow: hidden;
                padding-bottom: .8rem;
            }
        }
    }
</style>