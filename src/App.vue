<template>
  <div id="app">
    <sidebar></sidebar>
    <div class="container">
      <header-bar></header-bar>
      <div class="app">
        <div class="app-inner">
          <transition :name="transitionName" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
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
  },
  data(){
    return {
      name:'slide-down'
    }
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
  color: #2c3e50;
  height: 100%;
}

.container {
  padding-left: $sidebar_width;
  padding-top: $header_bar_height;
  width: auto;
  height: calc(100% - 60px);
  background-color: #f6f6f6;
}

.slide-bottom-leave-active {
  opacity: 0;
  transition: all .25s cubic-bezier(.55,0,.1,1);
  -webkit-transform: translate(0, 100px);
  transform: translate(0, 30px);
}
.slide-bottom-enter {
  /*opacity: 0;*/
  -webkit-transform: translate(0, -30px);
  transition: all .5s cubic-bezier(.55,0,.1,1);
  transform: translate(0, -30px);
}

</style>
