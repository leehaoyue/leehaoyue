<!-- 图片预览 -->
<template>
  <div class="photoPreview" v-if="qrcodePreview">
    <slot>加载失败</slot>
  </div>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>
