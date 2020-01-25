<!-- 工作生活路线 -->
<template>
  <el-row class="travel">
    <el-col :span="24">
      <h1>{{ title }}</h1>
      <h4>{{ content }}
        <!-- <el-button type="primary" round @click="toMain">（{{ time }}s）跳过</el-button> -->
        <el-button type="primary" round @click="toMain">进入详情</el-button>
      </h4>
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