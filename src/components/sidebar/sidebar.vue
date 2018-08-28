<template>
  <div class="sidebar">
    <div class="sidebar__logo-wrap">
      <img src="" alt="">
    </div>
    <ul class="sidebar__container">
      <li>
        <a href="">概况</a>
      </li>
      <li>
        <a href="">商品</a>
      </li>
      <li>
        <a href="">订单</a>
      </li>
      <li>
        <a href="">装修</a>
      </li>
      <li>
        <a href="">客户</a>
      </li>
      <li>
        <a href="">营销</a>
      </li>
      <li>
        <a href="">资讯</a>
      </li>
      <li>
        <a href="">微信</a>
      </li>
      <li>
        <a href="">设置</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "sidebar"
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
    left: 42px;
    top: 10px;
  }
  .sidebar .sidebar__container {
    padding: 6px 11px;
    counter-reset: sidebar-index;
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
  }


</style>
