<!-- 新型冠状病毒资讯 -->
<template>
  <el-row class="virus">
    <el-button class="refresh" icon="el-icon-refresh-left" type="primary" circle @click="refresh"></el-button>
    <el-col :span="22" :offset="1" class="map-info">
      <el-divider content-position="left"><h3><i class="el-icon-map-location"/>各地疫情实时分布热力图</h3></el-divider>
      <basicEcharts :chartName="name"
        :chartStyle="chartStyle"
        :options="mapData"></basicEcharts>
    </el-col>
    <el-col :span="22" :offset="1" class="conut-info">
      <el-divider content-position="left"><h3><i class="el-icon-s-order"/>各地疫情实时统计</h3></el-divider>
      <div class="conut-legend">
        <el-button type="danger" size="mini">确诊&nbsp;-&nbsp;{{ countTotal.confirm }}</el-button>
        <!-- <el-button type="warning" size="mini">疑似&nbsp;-&nbsp;{{ countTotal.suspect }}</el-button> -->
        <el-button type="info" size="mini">死亡&nbsp;-&nbsp;{{ countTotal.dead }}</el-button>
        <el-button type="success" size="mini">治愈&nbsp;-&nbsp;{{ countTotal.heal }}</el-button>
      </div>
      <el-tree :data="countData" :props="countProps">
        <span class="custom-tree-node" slot-scope="{ node, data }">
        <span class="btn-lb">{{ node.label }}</span>
        <span class="btn-gp">
          <el-button type="danger" plain>{{ data.confirm || 0 }}</el-button>
          <el-divider direction="vertical"></el-divider>
          <!-- <el-button type="warning" plain>{{ data.suspect || 0 }}</el-button>
          <el-divider direction="vertical"></el-divider> -->
          <el-button type="info" plain>{{ data.dead || 0 }}</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button type="success" plain>{{ data.heal || 0 }}</el-button>
        </span>
      </span>
      </el-tree>
    </el-col>
    <el-backtop target=".virus"></el-backtop>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>