<template>

    <div id="publish">
        <div class="day">
            <div>
                <p>26</p>
                <p><span>星期一</span><span>03/2019</span></p>
            </div>
            <p>北京：晴天 23°</p>
        </div>
        <div class="maxim">
            <p>不加思考的热情就像是一条随波逐流的船。</p>
            <p>詹姆斯·乔伊斯</p>
        </div>
        <div class="choose">
            <div class="post" @click="goPost()">
                <img src="../../../static/imgs/publish/icon-ft.png" alt="">
                <span>发帖</span>
            </div>
            <div class="photo" @click="goPhoto()">
                <img src="../../../static/imgs/publish/icon-xc.png" alt="">
                <span>相册</span>
            </div>
        </div>
        <div class="exit" @click="go()">×</div>
    </div>
</template>

<script>
export default {
    created(){
        // this.$http.get("http://localhost:3000/publish").then((res)=>{
        //     console.log(res)
        // })
    },
    methods:{
        go(){             //点击×，返回上一个页面
            this.$router.go(-1)
        },
        goPost(){        //点击发帖图片，跳转到发帖页面
            this.$router.push("/post")
        },
        goPhoto(){      //点击相册图片，跳转到相册页面
            this.$router.push("/photo")
        }
    }
}
</script>


<style lang="scss" scoped>
    #publish{
        width: 100%;
        height: 13.34rem;
        background: url(../../../static/imgs/publish/background.png);
        background-size: 7.5rem 13.34rem;
        .day{
            position: fixed;
            left: .32rem;
            top:1.47rem;
            width: 100%;
            div{
                display: flex;
                flex-direction: row;
                p:nth-of-type(1){
                    font-size: 1rem;
                    font-family: PingFang-SC-Regular;
                    line-height: 1rem
                }
                p:nth-of-type(2){
                    font-size:.28rem;
                    font-family: PingFang-SC-Medium;
                    display: flex;
                    flex-direction: column;
                    span{
                        line-height: .5rem;
                        text-indent: .25rem;
                    }
                }
            }
            p{
                font-size: .26rem;
                font-family: PingFang-SC-Medium;
                line-height: 1rem;
            }
        }
        .maxim{
            position: fixed;
            left: 0;
            top: 5.02rem;
            width: 100%;
            p{
                line-height: .86rem;
                font-size: .28rem;
                text-align: left
            }
            p:nth-of-type(1){
                margin-left: .54rem;
                text-indent: .56rem;
            }
            p:nth-of-type(2){
                text-align: right;
                margin-right: 1.09rem;
            }
        }
        .choose{
            position: fixed;
            left: 0;
            top: 9.42rem;
            display: flex;
            width:100%;
            justify-content: space-around;
            div{
                display: flex;
                flex-direction: column;
                span{
                    margin-top: .3rem;
                    font-size: 28px;
                    text-align: center;
                }
            } 
        }
        .exit{
            position: fixed;
            left: 3.43rem;
            top: 11.99rem;
            font-size: .64rem
        }
    }


</style> 