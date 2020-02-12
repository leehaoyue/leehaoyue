<!-- 附近小区情况 -->
<template>
  <el-row class="virus-local" ref="virus-local">
    <el-col :span="24">
      <el-cascader v-model="location"
        :options="cityList"
        clearable
        size="medium"
        @change="handleChange"></el-cascader>
    </el-col>
    <!-- 返回整体页面顶部 -->
    <el-backtop target=".virus-local"></el-backtop>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>