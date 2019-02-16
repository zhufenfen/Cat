<template>
  <div class="login_ln">
    <!--logo-->
    <div class="log_ln">
      <img src="../../../static/img_ln/login.jpg">
    </div>
    <div class="dengl">
      <p class="oder" @click="handleToggle(1)">
        <span :class="activeIndex==1?'active':''">快捷登陆</span>
      </p>
      <p class="news" @click="handleToggle(2)">
        <span :class="activeIndex==2?'active':''">新用户注册</span>
      </p>
    </div>
    <keep-alive include="Login-com">
      <component :is="componentId"></component>
    </keep-alive>
  </div>
</template>
<script>
import Login from "./components/login.vue";
import Sign from "./components/sign.vue";
export default {
  components: {
    "Login-com": Login,
    "Sign-com": Sign
  },
  data() {
    return {
      componentId: "Login-com",
      activeIndex: 1
    };
  },
  methods: {
    handleToggle(val) {
      switch (val) {
        case 1:
          this.componentId = "Login-com";
          this.activeIndex = 1;
          break;
        case 2:
          this.componentId = "Sign-com";
          this.activeIndex = 2;
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
/*主页面*/
.login_ln {
  width: 100%;
  height: 100%;

  /*图片*/
  .log_ln {
    img {
      width: 2.04rem;
      height: 2.04rem;
      margin-top: 1.59rem;
      margin-left: 2.69rem;
    }
  }

  /*登陆注册按钮*/
  .dengl {
    margin-top: 1.12rem;
    margin-left: 2.3rem;
    .oder {
      font-size: 0.3rem;
      color: #ccc;
      display: inline-block;
    }
    .news {
      font-size: 0.3rem;
      color: #ccc;
      display: inline-block;
      margin-left: 0.36rem;
    }
    .active {
      color: #202020;
      border-bottom: 0.02rem solid #000;
    }
  }

  /*input 用户名*/
  .uname_ln {
    /*用户名*/
    .tex1_ln {
      width: 4.54rem;
      height: 0.48rem;
      font-size: 0.24rem;
      color: #a5a5a5;
      margin-top: 0.58rem;
      margin-left: 1.64rem;
      border: none;
      outline: none;
      border-bottom: 0.01rem solid #000;
    }
    /*验证码*/
    .tex2_ln {
      width: 2.6rem;
      height: 0.46rem;
      font-size: 0.24rem;
      color: #a5a5a5;
      margin-top: 0.85rem;
      margin-left: 1.64rem;
      border: none;
      outline: none;
      display: inline-block;
      border-bottom: 0.01rem solid #000;
    }
    /*获取验证码*/
    .ver_ln {
      width: 1.8rem;
      height: 0.6rem;
      font-size: 0.24rem;
      text-align: center;
      line-height: 0.6rem;
      background: #fddd62;
      border-radius: 0.15rem;
      display: inline-block;
    }
  }
  /*登陆*/
  .dl_ln {
    width: 4.53rem;
    height: 0.6rem;
    font-size: 0.24rem;
    text-align: center;
    line-height: 0.6rem;
    background: #fddd62;
    border-radius: 0.15rem;
    margin-top: 0.9rem;
    margin-left: 1.64rem;
  }
}
.toast {
  color: red;
  background: white;
  font-size: 0.36rem;
}
</style>