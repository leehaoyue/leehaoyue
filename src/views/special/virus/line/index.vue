<!-- 疫情折线图 -->
<template>
  <el-row class="virus-line">
    <el-col :span="24">
      <basicEcharts :chartName="chartName"
        :chartStyle="chartStyle"
        :options="lineData"></basicEcharts>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>