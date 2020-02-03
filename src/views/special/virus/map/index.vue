<!-- 疫情热力图 -->
<template>
  <el-row class="virus-map">
    <el-col :span="24">
      <basicEcharts :chartName="chartName"
        :chartStyle="chartStyle"
        :options="mapData"></basicEcharts>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>