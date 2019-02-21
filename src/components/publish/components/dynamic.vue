<template>
    <div id="dynamic">
        <div class="top"> 
            <span @click="goBack()">取消</span>
            <span @click="announce()">发表</span>
        </div>
        <div class="count">
            <input type="text" placeholder="标题">
            <textarea placeholder="说说您此刻的想法..." name="" id="" cols="30" rows="10"></textarea>
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
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            flag:"true"
        }
    },
    methods:{
        goBack(){
            this.flag = !this.flag
            // this.$router.go(-1)
        },
        announce(){
            Toast({
                message: '发表成功',
                position: 'middle',
                duration: 3000,
                calssName:"backgroung:'red'"
            });
            this.$router.push("/home")
        },
        doThis(){
            this.flag = !this.flag
        },
        noreservePhoto(){
            this.$router.go(-1)
        },
        reservePhoto(){
            this.$router.go(-1)
        },
    }
}
</script>

<style lang="scss" scoped>
#dynamic{
    overflow: hidden;
    width: 100%;
    height: 100%;
    .top{
        width: 100%;
        height: 1.58rem;
        font-size: .34rem;
        font-family: PingFang-SC-Regular;
        background: rgb(241, 242, 246);
        line-height: 1.7rem;
        display: flex;
        justify-content: space-between;
        padding: 0 .25rem;
        span:nth-of-type(2){
            color: #ff7878;
        }
    }
    .count{
        width: 100%;
        padding: .05rem .2rem;
        input{
            width: 100%;
            height: .89rem;
            outline: none;
            border: none;
            border-bottom: 0.01rem solid #ccc;
            margin-bottom: .31rem;
            font-size: .32rem;
            font-family: PingFang-SC-Regular;
            text-indent: .21rem;
        }
        textarea{
            width: 100%;
            border: none;
            outline: none;
            font-size: .28rem;
            font-family: PingFang-SC-Regular;
            text-indent: .21rem;
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
