<template>
  <div>
    <div class="header">
      <div class="lt" @click="getBack()"><img src="static/myImgs/left.png"></div>
      <p>关注</p>
      <p>粉丝</p>
      <span> </span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getBack(){
      this.$router.back();
    }
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 1.27rem;
  display: flex;
  justify-content: space-between;
  align-items:center;
  .lt{
    margin-left:.51rem;
  }

  p {
    font-size: 36px;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(32, 32, 32, 1);
    float:left;
  }
}
</style>
