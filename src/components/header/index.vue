<!-- 导航菜单 -->
<template>
  <el-menu class="el-menu-demo navbar"
    :default-active="activeIndex"
    mode="horizontal"
    active-text-color="#fff"
    @select="handleSelect">
    <el-menu-item @click="toMain">
      <el-tooltip class="item" effect="light" content="进入差旅历程" placement="bottom-start">
        <el-image fit="contain"
          :src="logosrc">
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </el-tooltip>
    </el-menu-item>
    <el-menu-item class="hidden-sm-and-down"
      v-for="(item,index) in list"
      :index="item.name"
      :key="index">{{item.label}}</el-menu-item>
    <el-menu-item class="littel hidden-md-and-up">
      <el-dropdown trigger="click"
        @command="handleSelect">
        <span class="el-dropdown-link">
          <i class="fa fa-align-justify"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(item,index) in list"
            :command="item.name"
            :key="index">{{item.label}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu-item>
  </el-menu>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>