<!-- 新型冠状病毒资讯 -->
<template>
  <el-row class="virus" ref="virus">
    <!-- 刷新整体页面 -->
    <el-button class="refresh" icon="el-icon-refresh-left" type="primary" circle @click="refresh"></el-button>
    <!-- 打开新闻列表 -->
    <el-button class="newsList" icon="el-icon-message" type="primary" circle @click="openNewsList"></el-button>
    <!-- 打开附近疫情 -->
    <el-button class="localMap" icon="el-icon-location" type="primary" circle @click="openLocalMap"></el-button>
    <!-- 数据更新时间 -->
    <el-col :span="22" :offset="1" class="update-info">
      <el-tag>上次刷新时间：{{ updateTime }}</el-tag>
      <el-tag type="warning">数据来源：卫健委、网易新闻等机构企业</el-tag>
    </el-col>
    <!-- 疫情热力图 -->
    <el-col :span="22" :offset="1" class="map-info">
      <el-divider content-position="left"><h3><i class="el-icon-map-location"/>各地疫情实时分布热力图</h3></el-divider>
      <el-tag type="info" size="mini" effect="plain">地图可下钻</el-tag>
      <virusMap :chartName="chartInfo.virusMap.name"
        :chartStyle="chartInfo.virusMap"
        :countData="countData"
        :countPart="countPart" />
    </el-col>
    <!-- 疫情数据表、漏斗图 -->
    <el-col :span="22" :offset="1" class="conut-info">
      <el-divider content-position="left"><h3><i class="el-icon-s-order"/>各地疫情实时统计</h3></el-divider>
      <div class="conut-legend">
        <el-button type="danger" size="mini">确诊&nbsp;-&nbsp;{{ countTotal.confirm }}</el-button>
        <!-- <el-button type="warning" size="mini">疑似&nbsp;-&nbsp;{{ countTotal.suspect }}</el-button> -->
        <el-button type="info" size="mini">死亡&nbsp;-&nbsp;{{ countTotal.dead }}</el-button>
        <el-button type="success" size="mini">治愈&nbsp;-&nbsp;{{ countTotal.heal }}</el-button>
      </div>
      <el-tabs v-model="activePart">
        <el-tab-pane :key="index"
          :label="item.label"
          :name="item.name"
          v-for="(item, index) in partList">
          <!-- 漏斗图 -->
          <virusFunnel v-show="index===1"
            :chartName="chartInfo.virusFunnel.name"
            :chartStyle="chartInfo.virusFunnel"
            :countData="countData"
            :countPart="countPart" />
          <!-- 树形图 -->
          <el-tree v-show="index===0"
            :data="countData"
            :props="countProps">
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
        </el-tab-pane>
      </el-tabs>
    </el-col>
    <!-- 作者信息 -->
    <el-col :span="22" :offset="1" class="author-info">
      <el-tag type="success">Powered by LeeHaoYue</el-tag>
      <el-tag type="info">持续更新中。。。</el-tag>
    </el-col>
    <!-- 新闻列表 -->
    <el-drawer class="news-list"
      :title="`实时新闻【${$globalmethod.timeFilter(new Date().getTime(), 'yyyy-mm-dd/hh:mm')}】`"
      size="90%"
      :visible.sync="newsdrawer"
      direction="rtl">
      <el-row class="news-list-inner" ref="news">
        <el-col :span="24">
          <el-timeline>
            <el-timeline-item :timestamp="item.time"
              placement="top"
              v-for="(item, index) in newsList.list"
              :key="index">
              <el-card>
                <h4>{{ item.title }}</h4>
                <p>{{ item.detail }}</p>
                <el-button type="text" @click="newsDetial(item)">详情</el-button>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-col>
        <!-- 返回新闻列表顶部 -->
        <el-backtop target=".news-list-inner"></el-backtop>
      </el-row>
    </el-drawer>
    <!-- 新闻详情 -->
    <el-dialog class="newsView"
      top="0"
      width="100%"
      :title="newsTitle"
      :modal="false"
      :visible.sync="newsDetialShow">
      <iframe :src="newsLink" id="newsDetial" />
    </el-dialog>
    <!-- 附近疫情 -->
    <el-dialog class="localView"
      title="附近疫情"
      :fullscreen="true"
      :visible.sync="localShow">
      <virusLocal />
    </el-dialog>
    <!-- 返回整体页面顶部 -->
    <el-backtop target=".virus"></el-backtop>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>