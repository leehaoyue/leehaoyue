<!-- 侧边栏-子项 -->
<template>
  <el-menu-item :index="subList.index"
    v-if="$globalmethod.isEmpty(subList.children)">
    <i :class="subList.icon" v-if="subList.icon"></i>
    <span>{{subList.label}}</span>
  </el-menu-item>
  <el-submenu v-else
    :index="subList.index">
    <template slot="title">
      <i :class="subList.icon" v-if="subList.icon"></i>
      <span>{{subList.label}}</span>
    </template>
    <subList :subList="item"
      :key="index"
      v-for="(item, index) in subList.children"></subList>
  </el-submenu>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
