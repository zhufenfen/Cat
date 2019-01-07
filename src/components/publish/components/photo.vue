<template>
    <div>
        <div @click="go()">
            相册
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        go(){             //点击×，返回上一个页面
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss">

</style>
