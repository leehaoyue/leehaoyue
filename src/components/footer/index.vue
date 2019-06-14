<template>
  <el-menu class="el-menu-demo navbar"
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect">
    <el-menu-item :index="item.name"
      v-for="(item,index) in list"
      :key="index">{{item.label}}</el-menu-item>
  </el-menu>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>