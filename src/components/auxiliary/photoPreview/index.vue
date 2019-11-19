<!-- 图片预览 -->
<template>
  <div class="photoPreview" v-show="isShow">
    <el-button icon="el-icon-close"
      @click="closePreview"
      circle></el-button>
    <slot />
  </div>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>
