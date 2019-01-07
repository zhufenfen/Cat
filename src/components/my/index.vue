<template>
    <div>
        我的
        <Pet-com/>
        <Collect-com/>
        <Article-com/>
    </div>
</template>

<script>
import Pet from "./pet/index"
import Collect from "./collect/index"
import Article from "./article/index"
export default {
    components:{
      "Pet-com":Pet,
      "Collect-com":Collect,
      "Article-com":Article,
    }
}
</script>


<style lang="sass">
    
</style>