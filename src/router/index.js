import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home"
import Community from "@/components/community"
import Publish from "@/components/publish"
import Shop from "@/components/shop"
import My from "@/components/my"
import Err from "@/components/error"
import Login from "@/components/login"
import Article from "@/components/my/article"
import Pet from "@/components/my/pet"
import Collect from "@/components/my/collect"
import Address from "@/components/login/componen/address_lnn"
import Sign from "@/components/login/componen/sign"
import Noneress from "@/components/login/componen/noneress"
import Moudifiress from "@/components/login/componen/moudifiress"




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
      path:"/login",//跳转到登陆页面
      name:"login",
      component:Login,
      meta:{
        requireAuth:true,
        flag:false
      },
    },
    {
      path:"/address",//跳转到增加地址页面
      name:"address",
      component:Address,
      meta:{
        requireAuth:true,
        flag:false
      },
    },
    
    {
      path:"/sign",//跳转到注册页面
      name:"sign",
      component:Sign,
      meta:{
        requireAuth:true,
        flag:false
      },
    },
    
    {
      path:"/noneress",//跳转到注册页面
      name:"noneress",
      component:Noneress,
      meta:{
        requireAuth:true,
        flag:false
      },
    },
    
    {
      path:"/moudifiress",//跳转到注册页面
      name:"moudifiress",
      component:Moudifiress,
      meta:{
        requireAuth:true,
        flag:false
      },
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
