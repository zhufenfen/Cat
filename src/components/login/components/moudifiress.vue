<template>
  <div class="list_ln">
    <!--头部-->
    <div class="header_ln">
      <p>地址管理</p>
      <div @click="address_btn">
        <img src="static/img_ln/jiao.jpg">
      </div>
    </div>
    <!--地址列表-->
    <div class="main_ln">
      <ul v-if="!flag">
        <li v-for="(item,index) in list_l" class="wrapper" ref="addressWrapper">
          <div class="content">
            <p class="name">
              {{item.name}}
              <span class="tel">{{item.tel}}</span>
              <span class="prc_bj"></span>
            </p>
            <p class="site">
              <span class="def" v-if="index == 0">【默认】</span>
              {{item.side}}
            </p>
            <span @click="handleDel(index)">删除</span>
          </div>
        </li>
        <!-- <li v-for="(item,index) in list_l" class="wrapper" ref="addressWrapper">
          <div class="content">
            <p class="name">
              {{item.name}}
              <span class="tel">{{item.phone}}</span>
              <span class="prc_bj"></span>
            </p>
            <p class="site">
              <span class="def" v-if="item.level == 1">【默认】</span>
              {{item.detail}}
            </p>
            <span @click="handleDel(item.id)">删除</span>
          </div>
        </li> -->
      </ul>
      <div class="none_bj" v-if="flag">
        <img src="static/img_ln/none.jpg">
      </div>
    </div>
    <!--无地址-->
    <div class="footer_ln">
      <p>
        <router-link to="/address">添加新地址</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import BScroll from "better-scroll";
import axios from "../../../lib";
export default {
  created() {
    axios.get("/address").then(data => {
      this.list_l = data;
    });
    /* axios.post("/miaoquan/findByAddressAll").then(data => {
      if (data.code == 0) {
        this.flag = 0;
      } else {
        this.flag = 1;
      }
      this.list_l = data.addresses;
    }); */
  },
  data() {
    return {
      flag: 0,
      list_l: [
        // {
        // 	name:"楚子峰",
        // 	tel:18837133244,
        // 	side:"北京市昌平区天苑路",
        // 	flag:true
        // },{
        // 	name:"楚子峰",
        // 	tel:13476809874,
        // 	side:"北京市昌平区天苑路",
        // 	flag:false
        // },{
        // 	name:"楚子峰",
        // 	tel:1576997327,
        // 	side:"北京市昌平区天苑路",
        // 	flag:false
        // }
      ]
    };
  },
  updated() {
    for (var i = 0; i < this.$refs.addressWrapper.length; i++) {
      this.scroll = new BScroll(this.$refs.addressWrapper[i], {
        click: true,
        scrollX: true
      });
    }
  },
  methods: {
    address_btn() {
      this.$router.push("/my");
    },
    handleDel(index) {
      /* axios({
        method: "post",
        url: "/miaoquan/delAddress",
        data: {
          id: index
        }
      }).then(data => {
        if (data.code == 0) {
          axios.get("/miaoquan/findByAddressAll").then(data => {
            this.list_l = data.addresses;
          });
        } else {
          let instance = Toast({
            message: "删除失败",
            className: "toast"
          });
          setTimeout(() => {
            instance.close();
          }, 2000);
        }
      }); */
    }
  }
};
</script>

<style lang="scss" scoped>
.list_ln {
  width: 100%;
  height: 100%;
  position: relative;
  .header_ln {
    width: 100%;
    height: 1.1rem;
    background: #fddd62;
    p {
      font-size: 0.36rem;
      text-align: center;
      line-height: 1.1rem;
    }

    img {
      width: 0.19rem;
      height: 0.31rem;
      position: absolute;
      top: 0.42rem;
      left: 0.2rem;
    }
  }
  /*地址列表*/

  .main_ln {
    position: fixed;
    top: 1.27rem;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    overflow: hidden;
    .none_bj {
      line-height: 8rem;
      text-align: center;
    }
    ul {
      width: 100%;
      li {
        height: 1.3rem;
        margin-left: 0.5rem;
        font-size: 0.24rem;
        color: #202020;
        box-sizing: border-box;
        border-bottom: 0.01rem solid #e5e5e5;
        overflow: hidden;
        div {
          position: relative;
          width: 8.5rem;
          > span {
            position: absolute;
            top: 0;
            right: 0.2rem;
            width: 1.2rem;
            height: 0.8rem;
            line-height: 0.8rem;
            text-align: center;
            background: #ff7878;
            color: #fff;
            font-size: 0.3rem;
          }
          .name {
            font-size: 0.27rem;
            margin-top: 0.2rem;
            color: #202020;
          }
          .true_ln {
            background: url("../../../../static/img_ln/true.jpg") no-repeat;
            width: 10rem;
            height: 10rem;
          }
          .tel {
            margin-left: 2.75rem;
          }
          .site {
            padding-top: 0.4rem;
            font-size: 0.2rem;
            color: #202020;
          }
          .def {
            color: #ff7878;
          }
        }
      }
    }
  }

  /*增加地址*/
  .footer_ln {
    width: 100%;
    height: 0.9rem;
    background: #fddd62;
    position: fixed;
    left: 0;
    bottom: 0;
    p {
      font-size: 0.36rem;
      text-align: center;
      line-height: 0.9rem;
      color: #000000;
    }
  }
}
</style>