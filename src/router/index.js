import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home"
import Community from "@/components/community"
import Publish from "@/components/publish"
import Shop from "@/components/shop"
import My from "@/components/my"
import Err from "@/components/error"
import Login from "@/components/login"
import Post from "@/components/publish/components/post"
import Photo from "@/components/publish/components/photo"
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
      path:"/publish",
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
      component:Post
    },
    {
      path:"/photo",   //发布页面跳转到相册页面
      name:"photo",
      component:Photo
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
      path:"/my",
      name:"my",
      component:My,
      meta:{
        requireAuth:true,
        flag:true
      }
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
