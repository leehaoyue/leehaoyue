<!-- 疫情热力图 -->
<template>
  <el-row class="virus-map">
    <el-button type="primary"
      size="mini"
      v-show="isCountry"
      @click="reback(countData)">全国</el-button>
    <el-col :span="24">
      <h4>{{country.name}}</h4>
    </el-col>
    <el-col :span="24">
      <basicEcharts :chartName="chartName"
        :chartStyle="chartStyle"
        :options="mapData"
        @chartclick="chartclick"></basicEcharts>
    </el-col>
    <el-col :span="24">
      <el-table border
        height="250"
        v-show="isCountry"
        style="width: 100%"
        :data="country.data">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :key="index"
          v-for="(item, index) in tablelabel">
            <template slot-scope="scope">
              <span :class="item.prop">{{scope.row[item.prop] || 0}}</span>
            </template>
          </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>