<template>
  <dir class="header">
    <div class="lt" @click="getBack()">
      <img src="static/myImgs/left.png">
    </div>
    <div class="title">
      <div class="pay">关注</div>
      <div class="fans">粉丝</div>
    </div>
    <span></span>
  </dir>
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
  margin-top: 0;
  background: #fddd62;
  display: flex;
  justify-content: space-between;
  line-height: 1.27rem;
  font-size: 36px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(32, 32, 32, 1);
  line-height: 72px;
  .lt{
        margin-top: .24rem;
    }
  .title {
    width: 2.1rem;
    display: flex;
    line-height: 1.27rem;
    justify-content: space-between;
    div {
      display: inline-block;
    }
    
  }
}
</style>