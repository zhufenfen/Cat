<template>
    <div class="comments">
        <div class="img1">
        <img src="../../../../static/communityImg/icon-hui@2x.png" alt>
      </div>
      <ul class="tops">
        <li class="one">仙女鱼</li>
        <li class="two">沙发</li>
      </ul>
      <li class="thr">2小时前</li>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .comments {
    width: 6.8rem;
    margin-left: 0.3rem;
    display: flex;
    justify-content: flex-left;
    align-items: center;
    margin: 0.3rem;
    .img1 {
      width: 0.64rem;
      height: 0.64rem;
      border-radius: 50%;
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .tops {
      display: inline-block;
      height: 0.64rem;
      margin-left: 0.1rem;
      li {
        color: rgba(32, 32, 32, 1);
      }
      .one {
        font-size: 0.2rem;
        letter-spacing: 0.01rem;
        color:  #F796AA ;
      }
      .two {
        font-size: 0.24rem;
      }
    }
    .thr{
        margin-left: 4.2rem;
        font-size: 0.2rem;
        color: #8f8f8f;
    }
  }
</style>