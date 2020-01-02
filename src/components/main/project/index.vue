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
    <el-col :span="24">
      <el-row :key="num"
        class="cardOuter"
        v-for="(data, num) in cardList">
        <el-divider content-position="left">
          <el-tag @click="toCompany(data.website)">{{ data.company }}</el-tag>
        </el-divider>
        <el-col class="cardList"
          shadow="hover"
          :key="index"
          :xs="12" :sm="8" :md="8" :lg="6" :xl="4"
          v-for="(item, index) in data.project">
          <el-card class="box-card">
            <i v-if="item.icon" :class="item.icon"></i>
            <img v-if="item.qrcode" class="qrcode"
              :src="link+item.qrcode"
              @click="qrcodeShow(`${link}${item.qrcode}#${new Date().getTime()}`)">
            <el-popover
              placement="top-start"
              :title="item.title"
              width="200"
              close-delay="200"
              trigger="hover">
              <article v-html="item.content"></article>
              <div slot="reference">
                <h2>
                  <img class="banner" v-if="item.banner" :src="link+item.banner"/>
                  {{item.title}}
                </h2>
                <article v-html="item.content"></article>
              </div>
            </el-popover>
            <el-link v-if="item.link" type="primary" :underline="false" @click="pageDetail(item.link)">
              <i class="el-icon-view"></i>详情地址
            </el-link>
            <el-link v-if="item.introduce" type="primary" :underline="false" @click="introduceDetail(item.introduce)">
              <i class="el-icon-s-order"></i>查看简介
            </el-link>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
    <!-- 简介 -->
    <el-dialog title="项目简介"
      :visible.sync="dialogVisible"
      width="60%">
      <video v-show="introduce.video"
        :key="index"
        v-for="(item, index) in introduce.video"
        :src="link+item"
        controls="controls"></video>
      <el-carousel v-show="introduce.image"
        height="150px">
        <el-carousel-item v-for="(item, index) in introduce.image"
          :key="index">
          <img :src="link+item">
        </el-carousel-item>
      </el-carousel>
      <article v-show="introduce.article" v-html="introduce.article"></article>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关&nbsp;闭</el-button>
      </span>
    </el-dialog>
    <!-- 二维码 -->
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