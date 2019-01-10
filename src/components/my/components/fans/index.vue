<template>
    <div class="my">
        <Header-com></Header-com>
        <Main-com></Main-com>
    </div>
</template>

<script>
import Header from './component/header';
import Main from './component/main';
export default {
    components:{
        "Header-com":Header,
        "Main-com":Main
    }
}
    
</script>


<style lang="scss" scoped>
    
</style>