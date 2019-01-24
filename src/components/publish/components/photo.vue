<template>
    <div id="photo">
        <!-- 头部 -->
        <div class="topPhoto"> 
            <img @click="showPhoto()" src="../../../../static/imgs/publish/icon_jiantou1.png" alt="">
            <span>相机胶卷</span>
            <span @click="godynamic()">下一步</span>
        </div>

        <!-- 蒙版 -->
        <div class="templatePhoto" @click="doThis" v-show="!flag">
            <div>
                <p>将此次编辑保留</p>
                <span @click="noreservePhoto()">不保留</span>
                <span @click="reservePhoto()">保留</span>
            </div>
        </div>

    </div>
</template>

<script>
import Vue from 'vue'
import {Popup} from 'mint-ui';
Vue.component(Popup.name, Popup);
export default {
    data(){
        return{
            flag:"true"
        }
    },
    methods:{
        showPhoto(){             //点击×，返回上一个页面
            this.flag = !this.flag
        },
        noreservePhoto(){
            this.$router.go(-2)
        },
        reservePhoto(){
            this.$router.go(-2)
        },
        doThis(){
            this.flag = !this.flag
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
        
        .templatePhoto{
            background: rgba(0, 0 , 0, 0.8);
            position: fixed;
            left: 0;
            top:0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            div{
                width: 6rem;
                height: 3rem;
                border-radius: .3rem;
                background: #fff;
                font-family: PingFang-SC-Regular;
                position: relative;
                
                p{
                    color: #202020;
                    font-size: .36rem;
                    margin-top: .59rem;
                    text-align: center;
                }
                span{
                    display: block;
                    width: 1.52rem;
                    height: .5rem;
                    border: .01rem solid #f77;
                    border-radius: .02rem;
                    color: #f77;
                    font-size: .36rem;
                    text-align: center; 
                    line-height: .5rem;
                }
                span:nth-of-type(1){
                    position: absolute;
                    left: .8rem;
                    bottom: .6rem;
                }
                span:nth-of-type(2){
                    position: absolute;
                    right: .8rem;
                    bottom: .6rem;
                    background: #f77;
                    color: #fff;
                }
            }
        }
    }
</style>
