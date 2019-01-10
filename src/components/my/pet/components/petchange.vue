<template>
    <div class="outside">
        <div class="header">
           <span><router-link :to="{name:name}">〈</router-link></span>
           <ul>
               <li>
                     <h2>资料</h2>
               </li>
           </ul>
        </div>
        <div class="outpic">
        <div class="pic">
        </div>
        <img :src=pic alt="哎呀，图片走丢了" class="head">
        </div>
        <div class="list">
              <p>昵称<input type="text" name="" id="" placeholder="输入宠物昵称" ></p>
              <!-- :value="petname" -->
              <p>性别<input type="text" name="" id="" placeholder="输入性别"></p>
               <!-- :value="sex" -->
              <p>生日<input type="text" name="" id="" placeholder="输入生日"></p>
               <!-- :value="birthday" -->
              <p>血统<input type="text" name="" id="" placeholder="输入血统"></p>
               <!-- :value="blood" -->
              <p>品种<input type="text" name="" id="" placeholder="输入品种"></p>
               <!-- :value="kind" -->
              <p>状态<input type="text" name="" id="" placeholder="输入状态"></p>
               <!-- :value="set" -->
        </div>
        <div class="bottom">
                    <button>保存</button>
        </div>
    </div>
</template>
<script>
export default {
     data(){
         return{
             petname:"喵小乖",
             sex:"男",
             birthday:"2014-4-4",
             blood:"欧洲",
             kind:"波斯猫",
             set:"未婚",
             comName: "TreasoreCollect-com",
             path:"/my/pet",
             name:"pet",
             pic:require("../../../../../static/hrj_img/touxiang-xinxi.png"),
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
                margin-left:0.66rem; 
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
                    h2{
                        font-weight:100;
                    }
                }
            }
        }
        .outpic{
            height: 3rem;
            width: 7.5rem;
            .pic{
                    height: 3rem;
                    width: 7.5rem;
                    background: url(../../../../../static/hrj_img/touxiang-xinxi.png) no-repeat;
                    background-size: 8rem;
                    background-position: -0.25rem -2rem; 
                    opacity: 0.5; 
            }
            img{
                position: absolute;
                left: 3.2rem;
                top: 2rem;
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
                margin:1.3rem 0 0 0.51rem;
                width:648px;
                height:80px;
                background:rgba(253,221,98,1);
                border-radius:12px;
                border: 0;  // 去除未选中状态边框
                outline: none; // 去除选中状态边框
            }
        }
    }
</style>
