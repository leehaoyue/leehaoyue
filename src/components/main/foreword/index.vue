<!-- 朝花夕拾（前言） -->
<template>
  <el-row class="foreword"
    type="flex"
    justify="space-around">
    <!-- 轮播 -->
    <el-col class="topImg" :span="24">
      <el-image class="huge hidden-sm-and-down"
        fit="cover"
        :src="require('../../../assets/foreword_1.png')">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
      <el-image class="little hidden-md-and-up"
        fit="cover"
        :src="require('../../../assets/foreword_1.png')">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
      <swiper class="huge hidden-sm-and-down" :options="swiperOption">
        <swiper-slide class="swiper-slide"
          :key="index"
          v-for="(item, index) in sentence">{{item}}</swiper-slide>
      </swiper>
      <swiper class="little hidden-md-and-up" :options="swiperOption">
        <swiper-slide class="swiper-slide"
          :key="index"
          v-for="(item, index) in sentence">{{item}}</swiper-slide>
      </swiper>
    </el-col>
    <!-- 标签页 -->
    <el-col class="tabPage"
      :xs="24" :sm="24" :md="22" :lg="20" :xl="20">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane v-for="(item, index) in tabPage"
          :name="item.name"
          :key="index">
          <span slot="label">
            {{item.label}}<i :class="item.labelicon"></i>
          </span>
          <h2>{{item.content.title}}</h2>
          <el-divider>
            <i :class="item.dividericon"></i>
          </el-divider>
          <article>
            {{item.content.content}}
          </article>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>