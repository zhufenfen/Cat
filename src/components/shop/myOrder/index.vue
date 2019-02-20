<template>
    <div id="myOrder">
        <Header-com/>
        <Main-com/>
    </div>
</template>

<script>
import Header from "./components/header"
import Main from "./components/main"
export default {
    created(){
        this.$store.dispatch("goodOrder/getGoodOrder");
    },
    components:{
        "Header-com":Header,
        "Main-com":Main
    }
}
</script>


<style lang="scss" scoped>
    #myOrder{
        height:100%;
        background:#f0f2f5;
    }
</style>