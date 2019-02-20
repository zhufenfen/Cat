<template>
  <div class="address_ln">
    <!--头部地址管理-->
    <div class="header_ln">
      <p class="add_p">编辑地址</p>
      <p class="add_save" @click="handleAdd">保存</p>

      <div @click="address_btn2">
        <img src="../../../../static/img_ln/jiao.jpg">
      </div>
    </div>
    <!--地址列表-->
    <div class="main_ln">
      <ul>
        <li>
			<span>收货人姓名</span>
          <input type="text" class="cood" v-model="name">
        </li>
        <li>
			<span>手机号码</span>
		  
          <input type="number" class="cood" v-model="phone">
        </li>
        <li class="address">省/市/区
          <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
        </li>
        <li>
			<span>详细地址</span>
          <input type="text" class="cood" v-model="address">
        </li>
        <li>
          <input type="radio" class="odd_a" :checked="flag==1" @click="handleOdd()">
          <!-- <input type="text" placeholder="设为默认地址" class="cood"> -->
          <span>设为默认地址</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import axios from "../../../lib/";
import Vue from "vue";
import { Picker } from "mint-ui";
import myaddress from "../../../utils/address.json";
Vue.component(Picker.name, Picker);
export default {
  data() {
    return {
      flag: 0,
      name: "",
      phone: "",
      address: "",
      myAddressSlots: [
        {
          flex: 1, //对应 slot CSS 的 flex 值
          defaultIndex: 1, //对应 slot 初始选中值，需传入其在 values 数组中的序号，默认为 0
          values: Object.keys(myaddress), //省份数组
          className: "slot1", //对应 slot 的类名
          textAlign: "center" //对应 slot 的对齐方式
        },
        {
          divider: true, //对应 slot 是否为分隔符
          content: "-", //分隔符 slot 的显示文本
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center"
        }
      ],
      myAddressProvince: "省",
      myAddressCity: "市",
      myAddresscounty: "区/县"
    };
  },
  methods: {
    address_btn2() {
      this.$router.go(-1);
    },
    handleAdd() {
      /* axios.post("/addAddress", {
		  name:this.name,
		  phone:this.phone,
		  level:this.flag,
		  level:this.myAddressProvince+" "+this.myAddressCity+" "+this.myAddresscounty+" "+this.address
	  }).then(data => {
		  let instance = Toast({
              message: data,
              className: "toast"
            });
            setTimeout(() => {
              instance.close();
            }, 2000);
		  if(data.code){
			  this.$router.push("/moudifiress");
		  }
	  }) */
    },
    handleOdd() {
      if (this.flag) {
        this.flag = 0;
      } else {
        this.flag = 1;
      }
    },
    onMyAddressChange(picker, values) {
      if (myaddress[values[0]]) {
        //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
        picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
        picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
        //获取省
        this.myAddressProvince = values[0];
        //获取市
        this.myAddressCity = values[1];
        //获取县
        this.myAddresscounty = values[2];

        /*
            setSlotValues(index, values)：设定给定 slot 的备选值数组
        
        */
      }
    },
    mounted() {
      this.$nextTick(() => {
        //vue里面全部加载好了再执行的函数 （类似于setTimeout）
        this.myAddressSlots[0].defaultIndex = 0;
        // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
        //因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/*头部地址管理*/
.address_ln {
  width: 100%;
  height: 100%;
  position: relative;
  .header_ln {
    width: 100%;
    height: 1.1rem;
    background: #fddd62;
    position: fixed;
    top: 0;
    left: 0;
    p {
      font-size: 0.36rem;
      text-align: center;
      line-height: 1.1rem;
      display: inline-block;
    }
    .add_p {
      padding-left: 40%;
    }
    /*头部  返回角*/
    img {
      width: 0.19rem;
      height: 0.32rem;
      position: absolute;
      top: 0.42rem;
      left: 0.2rem;
    }

    /*头部  保存*/
    .add_save {
      font-size: 0.24rem;
      position: absolute;
      top: 0;
      left: 6.05rem;

      //display: inline-block;
    }
  }
  /*地址列表*/
  .main_ln {
    position: fixed;
    top: 1.27rem;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    ul {
      .address {
        position: relative;
        overflow: hidden;
        .picker {
          position: absolute;
          top: 50%;
          left: 20%;
          margin-top: -0.9rem;
          .picker-item {
            width: 1.9rem;
          }
        }
      }
      li {
        width: 100%;
        height: 0.89rem;
        border-bottom: 0.01rem solid #ccc;
        padding-left: 0.34rem;
        line-height: 0.87rem;
        input {
        //   width: 100%;
          height: 0.88rem;
          border: none;
          outline: none;
          font-size: 0.24rem;
        }
        .odd_a {
          width: 0.22rem;
          height: 0.22rem;
		}
		span{
			display: inline-block;
			width:1.5rem;
		}
      }
    }
  }

  /*增加地址*/
}
</style>