<!-- 工作生活路线 -->
<template>
  <el-row class="travel">
    <el-col :span="24">
      <basicEcharts :chartName="name"
        :chartStyle="style"
        :options="option"></basicEcharts>
      <div class="stars_a"></div>
      <div class="stars_b"></div>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>