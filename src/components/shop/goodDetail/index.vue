<template>
    <div id="goodDetail">
        <Header-com></Header-com>
        <Main-com></Main-com>
        <Footer-com></Footer-com>
    </div>
</template>

<script>
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
export default {
    components:{
        "Header-com":Header,
        "Main-com":Main,
        "Footer-com":Footer
    },
}
</script>


<style lang="scss" scoped>
    #goodDetail{
        height:100%;
        background:#f0f2f5;
    }
</style>