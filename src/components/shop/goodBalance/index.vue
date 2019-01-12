<template>
    <div id="goodBalance">
        <Header-com></Header-com>
        <Main-com></Main-com>
    </div>
</template>

<script>
import Header from "./components/header"
import Main from "./components/main"
export default {
    components:{
        "Header-com":Header,
        "Main-com":Main
    },
}
</script>


<style lang="scss" scoped>
    #goodBalance{
        height:100%;
        background:#f0f2f5;
    }
</style>