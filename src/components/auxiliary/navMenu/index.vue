<!-- 侧边栏 -->
<template>
  <div class="navManu">
    <el-menu :collapse="isCollapse"
      active-text-color="#67C23A"
      :default-active="defaultIndex || navList[0].index"
      class="el-menu-vertical-demo"
      @select="selectMenu">
      <subItem :key="index"
        v-for="(item, index) in navList"
        :subList="item"></subItem>
    </el-menu>
    <el-button @click="isCollapse = !isCollapse">
      <i :class="collapseIcon"></i>
    </el-button>
  </div>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
