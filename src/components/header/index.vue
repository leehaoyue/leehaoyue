<!-- 导航菜单 -->
<template>
  <el-menu class="el-menu-demo navbar"
    :default-active="activeIndex"
    mode="horizontal"
    active-text-color="#fff"
    @select="handleSelect">
    <el-menu-item>
      <el-image fit="contain"
        :src="logosrc">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
    </el-menu-item>
    <el-menu-item :index="item.name"
      v-for="(item,index) in list"
      :key="index">{{item.label}}</el-menu-item>
  </el-menu>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>