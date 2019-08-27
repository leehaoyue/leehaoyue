<!-- 移花接木（笔记） -->
<template>
  <el-row class="notes" type="flex">
    <el-col class="navList">
      <navMenu :navList="navList"
        :defaultIndex="defaultIndex"
        @selectMenuOpen="selectMenuOpen"
        @selectMenuSub="selectMenuSub"></navMenu>
    </el-col>
    <el-col class="markdownPreview">
      <article v-html="src"></article>
      <el-backtop target=".markdownPreview"></el-backtop>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>