<!-- 下里巴人（作品） -->
<template>
  <el-row class="project">
    <!-- 顶部Echarts模型 -->
    <el-col class="echartsModel" :span="24">
      <basicEcharts class="animals" :chartName="animals.name"
        :chartStyle="animals.style"
        :options="animals.options"></basicEcharts>
      <basicEcharts class="wordClouds" :chartName="wordClouds.name"
        :chartStyle="wordClouds.style"
        :options="wordClouds.options"></basicEcharts>
    </el-col>
    <el-col class="cardList"
      shadow="hover"
      :key="index"
      :xs="12" :sm="8" :md="8" :lg="6" :xl="4"
      v-for="(item, index) in cardList">
      <el-card class="box-card">
        <i :class="item.icon"></i>
        <img class="qrcode"
          :src="link+item.qrcode"
          @click="qrcodeShow(`${link}${item.qrcode}#${new Date().getTime()}`)">
        <el-tooltip effect="dark"
          placement="top-start"
          :content="item.title"
          :hide-after="3000">
          <h2>{{item.title}}</h2>
        </el-tooltip>
        <el-tooltip effect="dark"
          placement="bottom-start"
          :content="item.content"
          :hide-after="3000">
          <article>
            {{item.content}}
          </article>
        </el-tooltip>
        <el-link type="primary" :underline="false" @click="pageDetail(item.link)">
          <i class="el-icon-view el-icon--right"></i>查看详情
        </el-link>
      </el-card>
    </el-col>
    <photoPreview :show="qrcodePreview">
      <el-image :src="qrcodePreview">
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
      <h1>扫描识别二维码</h1>
    </photoPreview>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>