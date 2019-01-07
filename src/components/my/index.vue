<template>
    <div>
        <Header-com></Header-com>
        <router-view/>
        我的
    </div>
</template>

<script>
import Header from './components/header'
export default {
    components:{
        "Header-com":Header,

    }
}
    
</script>


<style lang="scss">
    
</style>