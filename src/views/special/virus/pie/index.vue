<!-- 疫情饼图 -->
<template>
  <el-row class="virus-pie">
    <el-col :span="24">
      <basicEcharts :chartName="chartName"
        :chartStyle="chartStyle"
        :options="pieData"
        @chartclick="chartclick"></basicEcharts>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>