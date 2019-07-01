<!-- 下里巴人（作品） -->
<template>
  <el-row class="project">
    <!-- 顶部Echarts模型 -->
    <el-col class="echartsModel" :span="24">
      <basicEcharts class="animals" :chartName="animals.name"
        :chartStyle="animals.style"
        :options="animals.options"></basicEcharts>
      <basicEcharts class="wordClouds" :chartName="wordClouds.name"
        :chartStyle="wordClouds.style"
        :options="wordClouds.options"></basicEcharts>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>