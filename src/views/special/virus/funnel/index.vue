<!-- 疫情漏斗图 -->
<template>
  <el-row class="virus-funnel">
    <el-col :span="24">
      <basicEcharts :chartName="chartName"
        :chartStyle="chartStyle"
        :options="funnelData"
        @chartclick="chartclick"></basicEcharts>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>