import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home"
import Community from "@/components/community"
import Publish from "@/components/publish"
import Shop from "@/components/shop"
import My from "@/components/my"                        //我的页面
import Fans from "@/components/my/components/fans"      //跳转到粉丝
import Dell from "@/components/my/components/dell"      //跳转到动态
import ShopList from "@/components/shop/shopList"
import My from "@/components/my"
import Fans from "@/components/my/components/fans"
import Err from "@/components/error"
import Login from "@/components/login"

/* ---------喵圈路由-------------*/
import Details from "@/components/community/component/details"
import CatDetail from "@/components/community/component/catDetail"
import Discover from "@/components/community/component/discover"
import MeowCircle from "@/components/community/component/meowCircle"

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
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        requireAuth: true,
        flag: true
      }
    },
    {
      path: "/community",
      name: "community",
      component: Community,
      /*-----发现页面重定向------ */
      redirect: "/community/discover",
      meta: {
        requireAuth: true,
        flag: true
      },
      /*----发现喵圈页面路由----- */
      children: [
        {
          path: "/community/discover",
          name: "discover",
          component: Discover,
          meta: {
            flag: true,
            requireAuth: true
          }
        }, {
          path: "/community/meowCircle",
          name: "meowCircle",
          component: MeowCircle,
          meta: {
            flag: true,
            requireAuth: true
          }
        }
      ]
    },
    {
      path: "/publish",   //发布路由
      name: "publish",
      component: Publish,
      meta: {
        requireAuth: true,
        flag: false
      }
    },
    {
      path: "/post",   //发布页面跳转到发帖页面
      name: "post",
      component: Post,
      meta: {
        requireAuth: true,
        flag: false
      }
    },
    {
      path: "/photo",   //发布页面跳转到相册页面
      name: "photo",
      component: Photo,
      meta: {
        requireAuth: true,
        flag: false
      }
    },
    {
      path: "/dynamic",   //相册页面跳转到发布动态页面
      name: "dynamic",
      component: Dynamic,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop,
      meta: {
        requireAuth: true,
        flag: true
      }
    },
    {
<<<<<<< HEAD
      path: "/my/components/fans",//我的页面跳转到粉丝页面
=======
      path:"/shopList",
      name:"shopList",
      component:ShopList,
      meta:{
        requireAuth:false,
        flag:false
      }
    },
    {
      path: "/my/components",//我的页面跳转到粉丝页面
>>>>>>> zff
      name: "fans",
      component: Fans,
    },
    {
      path: "/my/components/dell",//我的页面跳转到动态页面
      name: "Dell",
      component: Dell,
      meta: {
        requireAuth: true,
        flag: false,
      }
    },
    {
      path: "/my",
      name: "my",
      component: My,
      meta: {
        requireAuth: true,
        flag: true
      },
      children: [
        {
          path: "/my/article",
          name: "article",
          component: Article,
          meta: {
            requireAuth: true
          },
        },
        {
          path: "/my/collect",
          name: "collect",
          component: Collect,
          meta: {
            requireAuth: true
          },
        },
        {
          path: "/my/pet",
          name: "pet",
          component: Pet,
          meta: {
            requireAuth: true
          },
        }
      ],
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    /*----------------喵圈路由 ----*/
    {
      path: "/details",
      name: "details",
      component: Details,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    {
      path: "/catDetail",
      name: "catDetail",
      component: CatDetail,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    {
      path: "**",
      component: Err
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
