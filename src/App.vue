<template>
  <div id="app">
    <sidebar></sidebar>
    <div class="container">
      <header-bar></header-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Sidebar from "./components/sidebar/sidebar"
  import HeaderBar from "./components/header-bar/header-bar"


export default {
  name: 'App',
  components:{
    Sidebar,
    HeaderBar
  }
}
</script>

<style lang="scss">
  // sidebar              v
  $sidebar_width: 124px;
  // header bar          v
  $header_bar_height: 60px;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.container {
  padding-left: $sidebar_width;
  padding-top: $header_bar_height;
  width: auto;
  height: calc(100% - 60px);
}

</style>
