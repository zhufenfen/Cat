<template>
  <div class="main">
    <div class="pic">
      <img src="static/myImgs/not.png" alt>
      <p>暂无数据哦</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .pic {
    width: 2.97rem;
    height: 2.97rem;
    img {
      width: 100%;
    }
    p {
      display: block;
      margin-top: 0.8rem;
      margin-left: 0.6rem;
      width: 1.6rem;
      height: 0.33rem;
      font-size: 0.32rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(143, 143, 143, 1);
      line-height: 0.9rem;
      text-align: center;
    }
  }
}
</style>