<template>
    <div class="header-bar">
      <div class="header__user-wrap">
        <div class="header__icon"></div>
        <el-dropdown>
          <span class="el-dropdown-link">
            漳州握手轮胎贸易<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>漳州握手轮胎贸易</el-dropdown-item>
            <el-dropdown-item>账号设置</el-dropdown-item>
            <el-dropdown-item>切换店铺</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="header__icon-wrap"></div>
      <div class="header__icon-wrap note__icon-wrap">
        <div class="header__icon"></div>
        <el-badge :value="12" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
      </div>
      <div class="header__qq-service">
        <a href="">
          <i class="el-icon-service"></i>
          专属客服：59471972
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "header-vue"
    }
</script>

<style scoped>

</style>
