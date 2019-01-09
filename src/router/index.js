import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home"
import Community from "@/components/community"
import Publish from "@/components/publish"
import Shop from "@/components/shop"
import My from "@/components/my"
import Err from "@/components/error"
import Login from "@/components/login"
import Details from "@/components/community/component/details"
import CatDetail from "@/components/community/component/catDetail"
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
        requireAuth:true
      }
    },
    {
      path:"/community",
      name:"community",
      component:Community,
      meta:{
        requireAuth:true
      }
    },
    {
      path:"/publish",
      name:"publish",
      component:Publish,
      meta:{
        requireAuth:true
      }
    },
    {
      path:"/shop",
      name:"shop",
      component:Shop,
      meta:{
        requireAuth:true
      }
    },
    {
      path:"/my",
      name:"my",
      component:My,
      meta:{
        requireAuth:true
      }
    },
    {
      path:"/login",
      name:"login",
      component:Login,
    },
    {
      path:"/details",
      name:"details",
      component:Details,
      meta:{
        flag:false,
        requireAuth:true
      }
    },
    {
      path:"/catDetail",
      name:"catDetail",
      component:CatDetail,
      meta:{
        flag:true,
        requireAuth:true
      }
    },
    {
      path:"**",
      component:Err
    },
    
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
