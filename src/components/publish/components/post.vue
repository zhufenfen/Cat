<template>
    <div id="post">
        <!-- 头部 -->
        <div class="top"> 
            <img @click="showPost()" src="static/imgs/publish/icon_jiantou1.png" alt="">
            <span>写点东西</span>
        </div>
        <div class="column">
            <div>
                添加封面
            </div>
            <input type="text" placeholder="标题" v-model="title">
            <input type="text" placeholder="副标题" v-model="title2">
            <textarea placeholder="正文" name="" id="" cols="30" rows="10" v-model="area"></textarea>
        </div>
        <div class="publisBtn" @click="publish()">
            发表
        </div>
        <!-- 蒙版 -->
        <div class="templatePost" @click="doThis" v-show="!flag">
            <div>
                <p>将此次编辑保留</p>
                <span @click="noreserve()">不保留</span>
                <span @click="reserve()">保留</span>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            flag:"true",
            title:"",
            title2:"",
            area:""
        }
    },
    created(){
        if(sessionStorage.getItem != ""){
            this.title = JSON.parse(sessionStorage.getItem("title"))
            this.title2 = JSON.parse(sessionStorage.getItem("title2"))
            this.area = JSON.parse(sessionStorage.getItem("area"))
        }
    },
    methods:{
        showPost(){           //点击×，返回上一个页面
            this.flag = !this.flag
        },
        doThis(){
            this.flag = !this.flag
        },
        noreserve(){
            sessionStorage.removeItem("title")
            sessionStorage.removeItem("title2")
            sessionStorage.removeItem("area")
            this.$router.go(-2)
        },
        reserve(){
              
            let title = this.title
            let title2 = this.title2
            let area = this.area
            sessionStorage.setItem("title",title)
            sessionStorage.setItem("title2",title2)
            sessionStorage.setItem("area",area)
            this.$router.go(-2)
        },
        publish(){
            Toast({
                message: '发表成功',
                position: 'middle',
                duration: 3000,
                calssName:"backgroung:'red'"
            });
            this.$router.push("/home")
        }
    }
}
</script>

<style lang="scss" scoped>
    #post{
        background: rgb(241, 242, 246);
        width: 100%;
        height: 100%;
        overflow: hidden;
        .top{
            width: 100%;
            height: .9rem;
            font-size: .34rem;
            font-family: PingFang-SC-Regular;
            margin-top: .68rem;
            img{
                width:.24rem;
                height:.42rem;
                display: inline-block;
                margin-left: .16rem;
            }
            span{
                margin-left: 2.55rem;
            }
        }
        .column{
            margin: 0 .16rem;
            // color: #8F8F8F;
            font-size: .32rem;
            font-family: PingFang-SC-Regular;
            div{
                width: 100%;
                height: 4.38rem;
                text-align: center;
                line-height: 4.38rem;
                background: #fff;
                border: 0.01rem solid #000;
            }
            input:nth-of-type(1){
                width: 100%;
                height: .89rem;
                border: 0.01rem solid #000;
                margin-top: .31rem;
                font-size: .32rem;
                font-family: PingFang-SC-Regular;
                text-indent: .21rem;
            }
            input:nth-of-type(2){
                width: 100%;
                height: .89rem;
                border: 0.01rem solid #000;
                margin-top: .15rem;
                font-size: .32rem;
                font-family: PingFang-SC-Regular;
                text-indent: .21rem;
            }
            textarea{
                width: 100%;
                height: 3.72rem;
                border: 0.01rem solid #000;
                margin:.17rem 0 .45rem 0 ;
                font-size: .32rem;
                font-family: PingFang-SC-Regular;
                text-indent: .21rem;
            }
        }
        .publisBtn{
            width: 2.96rem;
            height: .61rem;
            background: rgb(247, 150, 170);
            text-align: center;
            line-height: .61rem;
            color: #fff;
            font-size: .32rem;
            font-family: PingFang-SC-Regular;
            margin: 0 0 .2rem 2.11rem;
            border-radius: .1rem
        }
        .templatePost{
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