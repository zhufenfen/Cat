<template>
  <div id="login">
    <!--账号-->
    <div class="uname_ln">
      <input type="number" v-model="userName" @blur="userTest" placeholder="请输入手机号" class="tex1_ln">
      <!-- <span class="phoneTest"></span> -->
      <input type="number" v-model="passWord" placeholder="请输入密码" class="tex1_ln">
      <!-- <input type="number" v-model="passWord" placeholder="请输入验证码" class="tex2_ln">
      <div class="ver_ln" @click="getYZM()">获取验证码</div>-->
    </div>
    <!--登陆-->
    <div class="dl_ln" @click="gohome()">登陆</div>
  </div>
</template>
<script>
import Vuex from "vuex";
import axios from "../../../lib";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      userName: "",
      passWord: "",
      flag: true
    };
  },
  computed: {
    ...Vuex.mapState({
      token: state => state.login.token
    })
  },
  watch: {
    token() {
      this.$router.push("/home");
    }
  },
  // login/handleUserLogin
  methods: {
    ...Vuex.mapActions({
      handleLogin: "login/handleUserLogin"
    }),
    getYZM() {
      if (this.flag) {
      } else {
        let instance = Toast({
          message: "请输入正确的手机号",
          className: "toast"
        });
        setTimeout(() => {
          instance.close();
        }, 2000);
      }
    },
    gohome() {
      if (this.flag) {
        /* axios
          .post("/getLogin", {
            uname: this.userName,
            upwd: this.passWord
          })
          .then(data => {
            if (data.status == 0) {
              this.$router.push("/home");
            } else {
              let instance = Toast({
                message: data.info,
                className: "toast"
              });
              setTimeout(() => {
                instance.close();
              }, 2000);
            }
          }); */
        let userInfo = {
          uname: this.userName,
          upwd: this.passWord
        };
        this.handleLogin(userInfo);
      } else {
        let instance = Toast({
          message: "请输入正确的手机号",
          className: "toast"
        });
        setTimeout(() => {
          instance.close();
        }, 2000);
      }
    },
    userTest() {
      var reg = /^1(3|4|5|7|8)\d{9}$/;
      if (!reg.test(this.userName)) {
        // $(".phoneTest").html("123");
        this.flag = false;
        //this.$refs.phoneTest.innerHTML("请输入正确的手机号")
      } else {
        // $(".phoneTest").html("");
        this.flag = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
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
</style>

