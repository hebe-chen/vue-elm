<template>
  <div class="sidebar">
    <div class="sidebar__logo-wrap">
      <img src="/static/images/avatar_logo.png" alt="">
    </div>
    <ul class="sidebar__container">
      <li v-for="(item,index) in sidebarItem">
        <router-link :to="item.path"><span class="sidebar__icon" :class=" 'sidebar__icon-' + index"></span>{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    import { routes } from "../../router";

    export default {
        name: "sidebar",
        data(){
          return {
            sidebarItem:routes
          }
        }
    }
</script>

<style scoped>
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width:124px;
    background: linear-gradient(189deg,#297adc,#3b95ff);
    z-index: 111;
  }
  .sidebar .sidebar__logo-wrap{
    height: 60px;
    width: 100%;
  }
  .sidebar .sidebar__logo-wrap img {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 42px;;
    top: 10px;
  }
  .sidebar .sidebar__container {
    padding: 6px 11px;
  }
  .sidebar .sidebar__container a {
    position: relative;
    height: 42px;
    line-height: 38px;
    display: block;
    color: hsla(0,0%,100%,.6);
    padding-left: 38px;
    font-weight: 800;
    transition: all .25s;
    text-align: left;
  }
  .sidebar .sidebar__container .sidebar__icon {
    width: 14px;
    height: 14px;
    position: absolute;
    left: 12px;
    top: 12px;
    background: url("/static/images/sprite_side_nor.png") no-repeat 0 0/14px;
  }
  .sidebar .sidebar__container .sidebar__icon-2 {
    background-position: 0 -14px;
  }
  .sidebar .sidebar__container .sidebar__icon-3 {
    background-position: 0 -28px;
  }
  .sidebar .sidebar__container .sidebar__icon-4 {
    background-position: 0 -42px;
  }
  .sidebar .sidebar__container .sidebar__icon-5 {
    background-position: 0 -56px;
  }
  .sidebar .sidebar__container .sidebar__icon-6 {
    background-position: 0 -70px;
  }
  .sidebar .sidebar__container .sidebar__icon-7 {
    background-position: 0 -84px;
  }
  .sidebar .sidebar__container .sidebar__icon-8 {
    background-position: 0 -98px;
  }
  .sidebar .sidebar__container .sidebar__icon-9 {
    background-position: 0 -112px;
  }
  .sidebar .sidebar__container a.router-link-active, .sidebar .sidebar__container a:hover {
    color: #fff;
  }
  .sidebar .sidebar__container a.router-link-active .sidebar__icon, .sidebar .sidebar__container a:hover .sidebar__icon {
    background-image: url("/static/images/sprite_side_sel.png");
  }



</style>
