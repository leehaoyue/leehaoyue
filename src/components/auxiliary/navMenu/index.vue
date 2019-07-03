<!-- 侧边栏 -->
<template>
  <el-menu
    default-active="1"
    class="navManu el-menu-vertical-demo">
    <el-submenu :index="index"
      :key="index"
      v-for="(item, index) in navList">
      <template slot="title">
        <i :class="item.icon" v-if="item.icon"></i>
        <span>{{item.label}}</span>
      </template>
      <div v-if="!$globalmethod.isEmpty(item.children)">
        <el-submenu :index="data.index"
            :key="num"
            v-for="(data, num) in item.children">
          <sub :subList="data"></sub>
        </el-submenu>
      </div>
    </el-submenu>
  </el-menu>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
