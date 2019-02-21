<template>

    <div id="publish">
        <div class="day">
            <div>
                <p>{{day}}</p>
                <p><span>{{week}}</span><span>{{month}}/{{year}}</span></p>
            </div>
            <p>{{city}}：{{weather}} {{temperature}}</p>
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
    data(){
        return {
            year:"",
            month:"",
            day:"",
            week:"",
            city:"",
            weather:"",
            temperature:""
        }
    },
    created(){
        this.$axios.get("/tianqi/data/cityinfo/101010100.html").then((res)=>{
            this.city = res.weatherinfo.city,
            this.weather = res.weatherinfo.weather,
            this.temperature = res.weatherinfo.temp1
        })
       let d = new Date()
       this.year = d.getFullYear()
       var mon =(d.getMonth() + 1) / 10
       if(mon < 1){
           this.month = "" + d.getMonth() + 1
       }
       this.day = d.getDate()
       switch(d.getDay()){
           case 1 : this.week = "星期一";break;
           case 2 : this.week = "星期二";break;
           case 3 : this.week = "星期三";break;
           case 4 : this.week = "星期四";break;
           case 5 : this.week = "星期五";break;
           case 6 : this.week = "星期六";break;
           case 0 : this.week = "星期日";break;
       }
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
                img{
                    width: .99rem;
                    height: .99rem;
                }
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