<template>
    <div id="footer">
        <ul>
            <li v-for="(item, index) in navs">
                <router-link :to="{name:item.name}">
                    <div>
                        <img :src="'./static/imgs/'+item.src" alt="">
                    </div>
                    <span v-if="index != 2">{{item.title}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            navs:[
                {
                    name:"home",
                    title:"首页",
                    src:"icon-home@2x.png"
                    // src:require("../../assets/icon-home@2x.png")
                },
                {
                    name:"community",
                    title:"喵圈",
                    src:"icon-home-mq@2x.png"
                },
                {
                    name:"publish",
                    title:"发布",
                    src:"icon-fb@2x.png"
                },
                {
                    name:"shop",
                    title:"商城",
                    src:"icon-sc@2x.png"
                },
                {
                    name:"my",
                    title:"我的",
                    src:"icon-my@2x.png"
                }
            ]
        }
    }
}
</script>
<style scoped lang="scss">
    #footer{
        position:fixed;
        bottom:0;
        width:100%;
        height:0.98rem;
        ul{
            display: flex;
            justify-content: space-around;
            width:100%;
            height: 100%;
            li{
                width:100%;
                height:100%;
                a{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height:100%;
                }
               
            }
        }
    }
</style>


