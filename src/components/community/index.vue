<template>
  <div class="communitys">
    <div class="communityT">
      <!-- <span :class="flag?'active':''"></span> -->
      <span class="cover"@click="$router.push('/community/discover')">发现</span>
      <span @click="$router.push('/community/meowCircle')">喵圈</span>
      <!-- <component :a="a" :is="comName"></component> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Discover from "./component/discover";
import MeowCircle from "./component/meowCircle";

export default {
  components: {
    "Discover-com": Discover,
    "MeowCircle-com": MeowCircle,
  },
  data() {
    return {
      flag:true,
    };
  },
  methods: {
    // handleDis(val) {
    //   if (val == 1) {
    //     this.a = 1;
    //   } else {
    //     this.a = 2;
    //   }
    // }
  },
  watch:{
    $router(newVal,oldVal){
      console.log(newVal,oldVal);
      
    }
  },
};
</script>


<style lang="scss" scoped>
body,html {
  font-family: MicrosoftYaHei;
}
img {
  vertical-align: baseline;
}
.communitys {
  width: 100%;
  height: 100vh;
  background: #f0f2f5;
  .communityT {
    width: 100%;
    text-align: center;
    padding-top: 0.4rem;
    font-weight: 400;
    height: 0.6rem;
  }
  span {
    display: inline-block;
    height: 0.6rem;
    font-size: 0.36rem;
    // color: rgba(32, 32, 32, 1);
  }
  .cover {
    margin-right: 0.47rem;
  }
}
.active{
  color:rgba(255,120,120,1);
  border-bottom: 1px solid #FF7878;
}
</style>
/*community router/index footer/index static */