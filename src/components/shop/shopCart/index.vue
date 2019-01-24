<template>
    <div id="shopCart">
        <Header-com></Header-com>
        <div class="wrapper" ref="shopWrapper">
            <div class="content">
                <Main-com></Main-com>
            </div>
        </div>
        <Footer-com></Footer-com>
    </div>
</template>

<script>
import Bscroll from "better-scroll"
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
export default {
    created() {
        this.$store.dispatch("shopCart/getShopCart");
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.shopWrapper,{
            click:true
        })
        // console.log(this.scroll);
    },
    components:{
        "Header-com":Header,
        "Main-com":Main,
        "Footer-com":Footer
    },
}
</script>


<style lang="scss" scoped>
    #shopCart{
        height:100%;
        background:#f0f2f5;
        .wrapper{
            height: 100%;
            .content{
                padding-bottom:.8rem;
                overflow: hidden;
            }
        }
    }
</style>