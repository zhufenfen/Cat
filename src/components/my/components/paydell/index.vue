<template>
    <div class="my">
        <Header-com></Header-com>
        <Main-com></Main-com>
    </div>
</template>

<script>
import Header from './components/header';
import Main from './components/main';
export default {
    components:{
        "Header-com":Header,
        "Main-com":Main
    }
}
    
</script>


<style lang="scss" scoped>
    .my{
        width:100%;
        height:100%;
        display:flex;
        flex-direction: column;
        background:rgba(241,241,241,1);
    }
</style>