<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <Footer-com v-show="this.$route.meta.flag"/>
  </div>
</template>

<script>
import Footer from "./components/footer";
export default {
  name: 'App',
  components:{
    "Footer-com":Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
