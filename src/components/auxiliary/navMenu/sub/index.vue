<!-- 侧边栏-子项 -->
<template>
  <div class="subList">
    <template slot="title">
      <i :class="subList.icon" v-if="subList.icon"></i>
      <span>{{subList.label}}</span>
    </template>
    <el-submenu v-if="!$globalmethod.isEmpty(subList.children)">
      <model :subList="item"
        :key="index"
        v-for="(item, index) in item.children"></model>
    </el-submenu>
  </div>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
