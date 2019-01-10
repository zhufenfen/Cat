<template>
    <div id="shop">
        <Header-com></Header-com>
        <Goods-com></Goods-com>
    </div>
</template>

<script>
import Header from "./components/header"
import Goods from "./components/goods"

export default {
    components:{
        "Header-com":Header,
        "Goods-com":Goods
    }
}
</script>


<style lang="scss">
   
</style>