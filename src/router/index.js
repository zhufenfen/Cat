import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home"
import Community from "@/components/community"
import Publish from "@/components/publish"
import Shop from "@/components/shop"
import My from "@/components/my"                        //我的页面
import Fans from "@/components/my/components/fans"      //跳转到粉丝
import It from "@/components/my/components/it"          //跳转到他人主页
import Dell from "@/components/my/components/dell"      //跳转到动态
import Err from "@/components/error"
import Login from "@/components/login"
import Article from "@/components/my/article"
import Pet from "@/components/my/pet"
import Collect from "@/components/my/collect"
import Post from "@/components/publish/components/post"
import Photo from "@/components/publish/components/photo"
import Dynamic from "@/components/publish/components/dynamic"
Vue.use(Router)

var router = new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      name:"home",
      component:Home,
      meta:{
        requireAuth:true,
        flag:true
      }
    },
    {
      path:"/community",
      name:"community",
      component:Community,
      meta:{
        requireAuth:true,
        flag:true
      }
    },
    {
      path:"/publish",   //发布路由
      name:"publish",
      component:Publish,
      meta:{
        requireAuth:true,
        flag:false
      }
    },
    {
      path:"/post",   //发布页面跳转到发帖页面
      name:"post",
      component:Post,
      meta:{
        requireAuth:true,
        flag:false
      }
    },
    {
      path:"/photo",   //发布页面跳转到相册页面
      name:"photo",
      component:Photo,
      meta:{
        requireAuth:true,
        flag:false
      }
    }, 
    {
      path:"/dynamic",   //相册页面跳转到发布动态页面
      name:"dynamic",
      component:Dynamic,
      meta:{
        requireAuth:true
      }
    }, 
    {
      path:"/shop",
      name:"shop",
      component:Shop,
      meta:{
        requireAuth:true,
        flag:true
      }
    },
    {
      path: "/my/components/fans",//我的页面跳转到粉丝页面
      name: "fans",
      component: Fans,
    },
    {
      path: "/my/components/it",//粉丝页面跳转到他人主页
      name: "It",
      component: It,
    },

    {
      path:"/my/components/dell",//我的页面跳转到动态页面
      name:"Dell",
      component:Dell,
    },
    {
      path:"/my",
      name:"my",
      component:My,
      meta:{
        requireAuth:true,
        flag:true
      },
      children:[
        {
          path:"/my/article",
          name:"article",
          component:Article,
          meta:{
            requireAuth:true
          },
        },
        {
          path:"/my/collect",
          name:"collect",
          component:Collect,
          meta:{
            requireAuth:true
          },
        },
        {
          path:"/my/pet",
          name:"pet",
          component:Pet,
          meta:{
            requireAuth:true
          },
        }
      ],
    },
    {
      path:"/login",
      name:"login",
      component:Login,
    },
    {
      path:"**",
      component:Err
    }
  ]
})
// 全局守卫（登录验证）
/* router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    if(token){
      next();
    }else{
      next("/login");
    }
  }else{
    next();
  }
}) */
export default router;
