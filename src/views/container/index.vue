<!-- 容器 -->
<template>
  <el-container class="container">
    <el-header :height="$globaldata.container.header.height">
      <navbar></navbar>
    </el-header>
    <el-main>
      <transition name="fade">
        <keep-alive>
          <layout></layout>
        </keep-alive>
      </transition>
      <el-backtop target=".container .el-main"></el-backtop>
    </el-main>
    <el-footer :height="$globaldata.container.footer.height">
      <basebar></basebar>
    </el-footer>
  </el-container>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>
