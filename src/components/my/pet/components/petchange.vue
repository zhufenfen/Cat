<template>
    <div class="outside">
        <div class="header">
           <span><router-link :to="{name:name}"><img src="static/hrj_img/left.png" alt=""></router-link></span>
           <ul>
               <li>
                     <h2>资料</h2>
               </li>
           </ul>
        </div>
        <div class="outpic">
        <div class="pic">
        </div>
        <img :src="pic" alt="哎呀，图片走丢了" class="head">
        </div>
        <div class="list" v-for="(item,index) in message">
              <p>昵称<input type="text"  placeholder="输入宠物昵称" v-model="item.name"></p>
              <!-- :value="petname" -->
              <p>性别<input type="text"  placeholder="输入性别" v-model="item.gender"></p>
               <!-- :value="sex" -->
              <p>生日<input type="text"  placeholder="输入生日" v-model="item.birthday"></p>
               <!-- :value="birthday" -->
              <p>血统<input type="text"  placeholder="输入血统" v-model="item.varieties"></p>
               <!-- :value="blood" -->
              <p>品种<input type="text"  placeholder="输入品种" v-model="item.synopsis"></p>
               <!-- :value="kind" -->
              <p>状态<input type="text"  placeholder="输入状态" v-model="item.picture"></p>
               <!-- :value="set" -->
        </div>
        <div class="bottom">
                    <button @click="sendMessage">保存</button>
        </div>
    </div>
</template>
<script>
import {Toast} from "mint-ui";
import axios from "axios";
export default {
     data(){
         return{

             name:"pet",
             pic:"static/hrj_img/touxiang-xinxi.png",
             message:[ {
                    name:"",
                    gender:"",
                    birthday:"",
                    varieties:"",
                    synopsis:"",
                    picture:"",
               }
             ]
         }
     },
     methods:{
         sendMessage(){
            // axios({
            //     method:"post",
            //     url:"/findPetById",
            //     data:{
            //         name:this.message[0].name,
            //         gender:this.message[0].gender,
            //         birthday:this.message[0].birthday,
            //         varieties:this.message[0].varieties,
            //         synopsis:this.message[0].synopsis,
            //         picture:this.message[0].picture,
            //     }
            // }).then((data)=>{
            //     let instance=Toast({
            //         message:data.msg,
            //         className:"toast"
            //     });
            //     setTimeout(()=>{
            //         instance.close();
            //     },2000);
            //     if(data.code==0){
            //         this.$router.push("/pet")
            //     }
            //     console.log(data)
            // }).catch((err)=>{
            //     console.log(err)
            // })
            // console.log({
            //         name:this.message[0].name,
            //         gender:this.message[0].gender,
            //         birthday:this.message[0].birthday,
            //         varieties:this.message[0].varieties,
            //         synopsis:this.message[0].synopsis,
            //         picture:this.message[0].picture,
            //     })
         }
     }
}
</script>

<style lang="scss" scoped>
    .outside{
        height:100%;
        color: black;
        width:7.85rem;
        background: #eae6e6;
        .header{
            width: 100%;
            height:0.88rem;
            background:rgba(253,221,98,1);
            span{
                height: 0.56rem;
                width: 0.3rem;
                font-size: 0.3rem;
                float: left;
                line-height: 0.8rem;
                margin-left:0.46rem; 
                img{
                    height: 0.4rem;
                    width: 0.2rem;
                    float: left;
                    margin-top: 0.2rem;
                }
            }
             ul{
                float: left;
                width: 5.5rem;
                height: 0.8rem;
                li{
                   width: 5rem;
                    margin:0 auto;
                    line-height: 0.8rem;
                    text-align: center;
                }
            }
        }
        .outpic{
            height: 3rem;
            width: 7.5rem;
            .pic{
                    height: 3rem;
                    width: 7.5rem;
                    background: url("../../../../../static/hrj_img/touxiang-xinxi.png") no-repeat;
                    background-size: 8rem;
                    background-position: -0.25rem -2rem; 
                    opacity: 0.5; 
            }
            img{
                height:2rem;
                width:2rem;
                position: absolute;
                left: 2.7rem;
                top: 1.4rem;
            }
        }
        .list{
            background: white;
            height: 6rem;
            width: 7.5rem;
            p{  
                height: 0.8rem;
                width: 7.3rem;
                padding: 0.1rem;
                font-size: 0.3rem;
                input{
                width: 6.5rem;
                font-size: 0.3rem;
                height: 0.8rem;
                text-align: right;
                border: 0;  // 去除未选中状态边框
                outline: none; // 去除选中状态边框
                background-color: rgba(0, 0, 0, 0);// 透明背景

            }
            }
        }
        .bottom{
            width: 100%;
            height:3rem;
            button{
                font-size: 0.3rem;
                margin:1.3rem 0 0 .8rem;
                width:5.84rem;
                height:0.8rem;
                background:rgba(253,221,98,1);
                border-radius:12px;
                border: 0;  // 去除未选中状态边框
                outline: none; // 去除选中状态边框
            }
        }
    }
</style>
