<!-- 嘲风弄月（博客） -->
<template>
  <el-row class="blog">
    <el-col :span="24">
      <basicEcharts class="hidden-md-and-up"
        :chartName="chartData.small.name"
        :chartStyle="chartData.small.style"
        :options="chartData.option"></basicEcharts>
      <basicEcharts class="hidden-sm-and-down"
        :chartName="chartData.large.name"
        :chartStyle="chartData.large.style"
        :options="chartData.option"></basicEcharts>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>