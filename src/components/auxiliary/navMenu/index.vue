<!-- 侧边栏 -->
<template>
  <div class="navManu">
    <el-menu class="el-menu-vertical-demo hidden-sm-and-down"
      active-text-color="#67C23A"
      :collapse="isCollapse"
      :default-active="defaultActive || navList[0].index"
      @open="selectMenuOpen"
      @close="selectMenuClose"
      @select="selectMenuSub">
      <subItem :key="index"
        v-for="(item, index) in navList"
        :subList="item"></subItem>
    </el-menu>
    <el-menu class="el-menu-vertical-demo hidden-md-and-up"
      mode="horizontal"
      menu-trigger="click"
      active-text-color="#67C23A"
      :unique-opened="true"
      :collapse="isCollapse"
      :default-active="defaultIndex || navList[0].index"
      @open="selectMenuOpen"
      @close="selectMenuClose"
      @select="selectMenuSub">
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
