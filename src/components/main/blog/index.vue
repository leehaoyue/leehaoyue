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
    <el-col :span="24">
      <el-row class="selfInfo" :gutter="20">
        <el-col :key="index"
          :xs="24" :sm="24" :md="12" :lg="8" :xl="6"
          v-for="(item, index) in selfInfo">
          <el-divider content-position="left">
            <el-tag type="success">{{item.title}}</el-tag>
          </el-divider>
          <img :src="item.img">
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24" class="cardOuter">
      <el-timeline>
        <el-timeline-item :timestamp="data.period"
          placement="top"
          :key="num"
          v-for="(data, num) in cardList">
          <el-row>
            <el-col class="cardList"
              shadow="hover"
              :key="index"
              :xs="12" :sm="8" :md="8" :lg="6" :xl="4"
              v-for="(item, index) in data.children">
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
                  <el-popover
                    placement="top-start"
                    :title="item.title"
                    width="200"
                    close-delay="200"
                    trigger="hover">
                    <article v-html="item.content"></article>
                    <div slot="reference">
                      <h2>
                        <i :class="item.icon" :style="{color: item.iconColor}"></i>
                        {{item.title}}
                      </h2>
                      <article v-html="item.content"></article>
                    </div>
                  </el-popover>
                  <img v-if="item.qrcode" class="qrcode"
                    :src="link+item.qrcode"
                    @click="qrcodeShow(`${link}${item.qrcode}#${new Date().getTime()}`)">
                  <el-link v-if="item.link" type="primary" :underline="false" @click="pageDetail(item.link)">
                    <i class="el-icon-view"></i>详情地址
                  </el-link>
                  <el-link v-if="item.introduce" type="primary" :underline="false" @click="introduceDetail(item.introduce)">
                    <i class="el-icon-s-order"></i>查看简介
                  </el-link>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-timeline-item>
      </el-timeline>
    </el-col>
    <!-- 简介 -->
    <el-dialog title="项目简介"
      :visible.sync="dialogVisible"
      v-if="dialogVisible"
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