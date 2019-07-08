<!-- 底部信息 -->
<template>
  <el-row class="basebar">
    <el-col :span="24">
      <basicEcharts :chartName="name"
        :chartStyle="style"
        :options="option"></basicEcharts>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>