<template>
  <div>
    <div class="header">
      <div class="lt" @click="getBack()"><img src="static/myImgs/left.png"></div>
      <p>关注</p>
      <span> </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag:true,
    }
  },
  methods: {
    getBack(){
      this.$router.back();
    },
    
   
  },
};
</script>
<style lang="scss" scoped>
.header {
  z-index:99;
  width: 100%;
  height: 1.27rem;
  background:#FDDD62;
  display: flex;
  justify-content: space-between;
  align-items:center;
  .lt{
    margin-left:.51rem;
    width:.18rem;
    height:.32rem;
    img{
      width:100%;
      height: 100%;
    }
  }

  p {
    font-size: .36rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(32, 32, 32, 1);
    float:left;
  }
}
</style>
