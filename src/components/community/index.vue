<template>
  <div class="communitys">
    <div class="communityT">
      <span :class="flag?'active':''" class="cover" @click="handleDis()">发现</span>
      <span :class="flag?'':'active'"@click="handleClick()">喵圈</span>
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
    handleDis(val) {
      this.flag = true;
      this.$router.push('/community/discover')
    },
    handleClick(){
      this.flag = false;
      this.$router.push('/community/meowCircle')
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
    height: 1.2rem; 
    span {
    display: inline-block;
    height: 0.6rem;
    font-size: 0.36rem;
  }
  .cover {
    margin-right: 0.47rem;
  }
  }
 
}
.active{
  color:rgba(255,120,120,1);
  border-bottom: 1px solid #FF7878;
}
</style>
/*community router/index footer/index static */