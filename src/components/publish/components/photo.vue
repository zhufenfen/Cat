<template>
    <div id="photo">
        <!-- 头部 -->
        <div class="topPhoto"> 
            <img @click="showPhoto()" src="static/imgs/publish/icon_jiantou1.png" alt="">
            <span>精选图片</span>
            <span @click="godynamic()">下一步</span>
        </div>

        

    </div>
</template>

<script>
import Vue from 'vue'
import {Popup} from 'mint-ui';
Vue.component(Popup.name, Popup);
export default {
    
    methods:{
        showPhoto(){
            this.$router.go(-1)
        },    
        godynamic(){
            this.$router.push("/dynamic")
        }
    }
}
</script>

<style lang="scss" scoped>
    #photo{
        
        width: 100%;
        height: 100%;
        overflow: hidden;
        .topPhoto{
            width: 100%;
            height: 1.58rem;
            font-size: .34rem;
            font-family: MicrosoftYaHei;
            padding-top: .68rem;
            background: rgb(253, 221, 98);
            img{
                width:.24rem;
                height:.42rem;
                display: inline-block;
                margin-left: .16rem;
            }
            span{
                margin-left: 2.55rem;
                font-weight: 600;
            }
            span:nth-of-type(2){
                margin-left: 1.8rem;
                color: #ff7878;
                font-weight: 500
            }
        }
    }
</style>
