<!-- 容器 -->
<template>
  <el-container class="container">
    <el-header><navbar></navbar></el-header>
    <el-main>
      <transition name="fade">
        <keep-alive>
          <layout></layout>
        </keep-alive>
      </transition>
    </el-main>
    <el-footer><basebar></basebar></el-footer>
  </el-container>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>
