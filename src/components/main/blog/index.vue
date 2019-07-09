<!-- 嘲风弄月（博客） -->
<template>
  <el-row class="blog">
    <el-col :span="24">
      <basicEcharts class="hidden-md-and-up"
        :chartName="chartData.small.name"
        :chartStyle="chartData.small.style"
        :options="chartData.option"></basicEcharts>
      <basicEcharts class="hidden-sm-and-down"
        :chartName="chartData.large.name"
        :chartStyle="chartData.large.style"
        :options="chartData.option"></basicEcharts>
    </el-col>
    <el-col class="cardList"
      shadow="hover"
      :key="index"
      :xs="12" :sm="8" :md="8" :lg="6" :xl="4"
      v-for="(item, index) in cardList">
      <el-card class="box-card"
        :body-style="{ padding: '0px' }">
        <el-image fit="cover"
          :src="item.img">
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
        <div style="padding: 14px;">
          <el-tooltip effect="dark"
            placement="top-start"
            :content="item.title"
            :hide-after="1500">
            <h2>
              <i :class="item.icon" :style="{color: item.iconColor}"></i>
              {{item.title}}
            </h2>
          </el-tooltip>
          <el-tooltip effect="dark"
            placement="bottom-start"
            :content="item.content"
            :hide-after="1500">
            <article>
              {{item.content}}
            </article>
          </el-tooltip>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>