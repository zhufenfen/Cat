import Vue from 'vue'
import Router from 'vue-router'
// 首页的路由
import Home from "@/components/home"
import HomeDetail from "@/components/home/components/detail"
import Information from "@/components/home/components/information"

import Community from "@/components/community"
// 发布文件的路由
import Publish from "@/components/publish"
import Post from "@/components/publish/components/post"
import Photo from "@/components/publish/components/photo"
import Dynamic from "@/components/publish/components/dynamic"

import My from "@/components/my"                        //我的页面
import Fans from "@/components/my/components/fans"      //跳转到粉丝
import It from "@/components/my/components/it"          //跳转到他人主页
import Dell from "@/components/my/components/dell"      //跳转到动态
import Not from "@/components/my/components/not"        //跳转到关注页面
import Paydell from "@/components/my/components/paydell"        //关注跳转到他人主页

/* ----------商城路由----------- */
import Shop from "@/components/shop/goodClassify"
import ShopList from "@/components/shop/shopList"
import GoodDetail from "@/components/shop/goodDetail"
import ShopCart from "@/components/shop/shopCart"
import GoodBalance from "@/components/shop/goodBalance"
import GoodApply from "@/components/shop/goodApply"
import MyOrder from "@/components/shop/myOrder"

import Err from "@/components/error"
import Login from "@/components/login"

/* ---------喵圈路由-------------*/
import Details from "@/components/community/component/details"
import CatDetail from "@/components/community/component/catDetail"
import Discover from "@/components/community/component/discover"
import MeowCircle from "@/components/community/component/meowCircle"

import Article from "@/components/my/article"
import Noarticle from "@/components/my/article/components/noarticle"
import Nocollect from "@/components/my/article/components/nocollect"
import Pet from "@/components/my/pet"
import Collect from "@/components/my/collect"
import Address from "@/components/login/componen/address_lnn"
import Sign from "@/components/login/componen/sign"
import Noneress from "@/components/login/componen/noneress"
import Moudifiress from "@/components/login/componen/moudifiress"





import PetChange from "@/components/my/pet/components/petchange"
Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",     //跳转到首页
      name: "home",
      component: Home,
      meta: {
        requireAuth: true,
        flag: true
      }
    },
    {
      path: "/information",     //跳转到我的消息
      name: "information",
      component: Information,
      meta: {
        requireAuth: true,
        flag: false
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
      path: "/homedetail",     //跳转到文章详情页
      name: "homedetail",
      component: HomeDetail,
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
      path: "/shop",//商城页面
      name: "shop",
      component: Shop,
      meta: {
        requireAuth: true,
        flag: true
      }
    },
    {
      path: "/shopList/:id/:message",//商品列表页面
      name: "shopList",
      component: ShopList,
      props: true,
      meta: {
        requireAuth: false,
        flag: false
      }
    },
    {
      path:"/goodDetail/:shopId",//商品详情页面
      name:"goodDetail",
      component:GoodDetail,
      props:true,
      meta:{
        requireAuth:false,
        flag:false
      }
    },
    {
      path: "/shopCart",//购物车页面
      name: "shopCart",
      component: ShopCart,
      meta: {
        requireAuth: true,
        flag: false
      }
    },
    {
      path: "/goodBalance",//结算页面
      name: "goodBalance",
      component: GoodBalance,
      props:true,
      meta: {
        requireAuth: true,
        flag: false
      }
    },
    {
      path: "/goodApply",//支付完成页面
      name: "goodApply",
      component: GoodApply,
      meta: {
        requireAuth: true,
        flag: false
      }
    },
    {
      path: "/myOrder",//我的订单页面
      name: "myOrder",
      component: MyOrder,
      meta: {
        requireAuth: true,
        flag: false
      }
    },
    {
      path: "/my/components",//我的页面跳转到粉丝页面
      name: "fans",
      component: Fans,
    },
    {
      path: "/my/components/it",//粉丝页面跳转到他人主页
      name: "It",
      component: It,
    },
    {
      path: "/my/components/paydell",//关注页面跳转到他人主页
      name: "Paydell",
      component: Paydell,
    },
    {
      path: "/my/components/not",//关注页面跳转到无数据页面
      name: "Not",
      component: Not,
    },

    {
      path: "/my/components/dell",//我的页面跳转到动态页面
      name: "Dell",
      component: Dell,
    },
    {
      path: "/my",//my主页面
      name: "my",
      component: My,
      meta: {
        requireAuth: true,
        flag: true
      },
    },
    {
      path: "/my/article",
      name: "article",
      component: Article,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: "/my/article/noarticle",
          name: "noarticle",
          component: Noarticle,
          meta: {
            requireAuth: true
          },

        },
        {
          path: "/my/article/nocollect",
          name: "nocollect",
          component: Nocollect,
          meta: {
            requireAuth: true
          },

        },
      ]
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
    },
    {
      path: "/my/pet/petchange",
      name: "change",
      component: PetChange,
      meta: {
        requireAuth: true
      },
    },
    /*----------------喵圈路由 ----*/
    {
      path: "/login",//跳转到登陆页面
      name: "login",
      component: Login,
      meta: {
        requireAuth: true,
        flag: false
      },
    },
    {
      path: "/address",//跳转到增加地址页面
      name: "address",
      component: Address,
      meta: {
        requireAuth: true,
        flag: false
      },
    },

    {
      path: "/sign",//跳转到注册页面
      name: "sign",
      component: Sign,
      meta: {
        requireAuth: true,
        flag: false
      },
    },

    {
      path: "/noneress",//跳转到注册页面
      name: "noneress",
      component: Noneress,
      meta: {
        requireAuth: true,
        flag: false
      },
    },

    {
      path: "/moudifiress",//跳转到注册页面
      name: "moudifiress",
      component: Moudifiress,
      meta: {
        requireAuth: true,
        flag: false
      },
    },



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
/* import store from "@/store"
router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    if(store.state.token){
      next();
    }else{
      next("/login");
    }
  }else{
    next();
  }
}) */
export default router;
