<template>
    <div id="information">
        <div class="top"> 
            <img @click="gomy()" src="../../../../static/imgs/publish/icon_jiantou1.png" alt="">
            <span>消息</span>
            <span>忽略未读</span>
        </div>
        <ul>
            <li v-for="(item,index) in photo" :key="index">
                <div class="photo">
                    <img :src="item.photo"/>
                </div>
                <div class="pet">
                    <div>
                        <p>{{item.name}} <span>{{item.Number}}小时前</span></p>
                        <p>赞了你的作品</p>
                    </div>
                    <div>
                        <img :src="item.pet" alt="">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    created(){
        this.informationData()
    },
    computed:{
        ...Vuex.mapState({
            photo:state=>state.information.list
        })
    },
    methods:{
        gomy(){
            this.$router.go(-1)
        },
        ...Vuex.mapActions({
            informationData:"information/informationData"
        })
    }
}
</script>

<style lang="scss" scoped>
#information{
    width: 100%;
    height: 100%;
    font-family: MicrosoftYaHei;
    .top{
        padding: 0 .3rem;
        width: 100%;
        height: 1.1rem;
        font-size: .36rem;
        color: #202020;
        line-height: 1.2rem;
        background: rgb(253, 221, 98);
        font-weight: 500;
        position: fixed;
        left: 0;
        top: 0;
        span:nth-of-type(1){
            margin-left: 2.7rem;
        }
        span:nth-of-type(2){
            margin-left: 1.9rem;
            font-size: .28rem;
            color: #8F8F8F;
        }   
    }
    ul{
        margin-top: 1.1rem;
        width: 100%;
        li{
            display: flex;
            flex-direction: row;
            height: 1rem;
            width: 100%;
            .photo{
                img{
                    margin: .17rem .19rem 0 .33rem;
                    width: .64rem;
                    height:.64rem;
                }
            }
            .pet{
                width: 100%;
                border-bottom:.01rem solid #ccc;
                display: flex;
                justify-content: space-between;
                div:nth-of-type(1){
                    p:nth-of-type(1){
                        height: .62rem;
                        line-height: .62rem;
                        font-size: .28rem;
                        font-family: PingFang-SC-Regular;
                        color: #202020;
                        span{
                            margin-left: .5rem;
                            font-size: .24rem;
                            font-family: PingFang-SC-Regular;
                            color: #585858;
                        }
                    }
                    p:nth-of-type(2){
                        font-size: .24rem;
                        font-family: PingFang-SC-Regular;
                        color: #202020;
                    }
                }
                div:nth-of-type(2){
                    img{
                        margin: .17rem .38rem 0 0;
                        width: .64rem;
                        height:.64rem; 
                    }
                }
            }
        }
    }
}
</style>
