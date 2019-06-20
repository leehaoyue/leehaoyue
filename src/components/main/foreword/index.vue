<!-- 朝花夕拾（前言） -->
<template>
  <el-row class="foreword">
    <!-- 顶部图片 -->
    <el-col class="topImg" :span="24">
      <el-image class="huge hidden-sm-and-down"
        fit="cover"
        :src="require('../../../assets/foreword_1.png')">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
      <el-image class="little hidden-md-and-up"
        fit="cover"
        :src="require('../../../assets/foreword_1.png')">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
      <swiper ref="forewordSwiper">
        <swiper-slide class="swiper-slide"
          :key="index"
          v-for="(item, index) in sentence">{{item}}</swiper-slide>
      </swiper>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>