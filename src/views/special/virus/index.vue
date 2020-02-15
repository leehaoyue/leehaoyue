<!-- 新型冠状病毒资讯 -->
<template>
  <el-row class="virus" ref="virus">
    <!-- 刷新整体页面 -->
    <el-button class="refresh" icon="el-icon-refresh-left" type="primary" circle @click="refresh"></el-button>
    <!-- 打开新闻列表 -->
    <el-button class="newsList" icon="el-icon-message" type="primary" circle @click="openNewsList"></el-button>
    <!-- 打开医院列表 -->
    <el-button class="hospitalList" icon="el-icon-office-building" type="primary" circle @click="openHospitalList"></el-button>
    <!-- 打开附近疫情 -->
    <el-button class="localMap" icon="el-icon-location" type="primary" circle @click="openLocalMap"></el-button>
    <!-- 数据更新时间 -->
    <el-col :span="22" :offset="1" class="update-info">
      <!-- <el-tag>上次刷新时间：{{ updateTime }}</el-tag> -->
      <el-tag type="warning">数据来源：卫健委、网易新闻等机构企业</el-tag>
    </el-col>
    <!-- 疫情热力图 -->
    <el-col :span="22" :offset="1" class="map-info">
      <el-divider content-position="left"><h3><i class="el-icon-map-location"/>各地疫情分布</h3></el-divider>
      <el-tag type="info" size="mini" effect="plain">地图可下钻【数据：现存确诊】</el-tag>
      <virusMap :chartName="chartInfo.virusMap.name"
        :chartStyle="chartInfo.virusMap"
        :countData="countData"
        :countPart="countPart" />
    </el-col>
    <!-- 疫情趋势图 -->
    <el-col :span="22" :offset="1" class="trend-info">
      <el-divider content-position="left"><h3><i class="el-icon-data-line"/>疫情趋势分析</h3></el-divider>
      <virusLine :chartName="chartInfo.virusTrend.name"
        :chartStyle="chartInfo.virusTrend"
        :countData="trendData" />
    </el-col>
    <!-- 疫情数据表、漏斗图 -->
    <el-col :span="22" :offset="1" class="conut-info">
      <el-divider content-position="left"><h3><i class="el-icon-s-order"/>各地疫情统计</h3></el-divider>
      <el-tabs v-model="activePart">
        <el-tab-pane :key="index"
          :label="item.label"
          :name="item.name"
          v-for="(item, index) in partList">
          <!-- 树形图(国内) -->
          <div class="conut-legend" v-show="index===0">
            <el-button type="primary" size="mini">
              现存确诊：{{ countTotal.confirm - countTotal.heal }}
            </el-button>
            <el-button type="danger" size="mini">
              确诊：{{ countTotal.confirm }}<br/>
              较昨日：<span v-if="ystdata.ystconfirm">+</span>{{ ystdata.ystconfirm }}
            </el-button>
            <el-button type="warning" size="mini">
              疑似：{{ countTotal.suspect }}<br/>
              较昨日：<span v-if="ystdata.ystsuspect">+</span>{{ ystdata.ystsuspect }}
            </el-button>
            <el-button type="info" size="mini">
              死亡：{{ countTotal.dead }}<br/>
              较昨日：<span v-if="ystdata.ystdead">+</span>{{ ystdata.ystdead }}
            </el-button>
            <el-button type="success" size="mini">
              治愈：{{ countTotal.heal }}<br/>
              较昨日：<span v-if="ystdata.ystheal">+</span>{{ ystdata.ystheal }}
            </el-button>
          </div>
          <el-tree v-show="index===0"
            :data="countData"
            :props="countProps">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span class="btn-lb">{{ node.label }}</span>
              <span class="btn-gp">
                <el-button type="primary" plain>{{ data.confirm - data.heal }}</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="danger" plain>{{ data.confirm }}</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="warning" plain>{{ data.suspect }}</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="info" plain>{{ data.dead }}</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="success" plain>{{ data.heal }}</el-button>
              </span>
            </span>
          </el-tree>
          <!-- 树形图(国外) -->
          <div class="conut-legend" v-show="index===1">
            <el-button type="primary" size="mini">现存确诊&nbsp;-&nbsp;{{ countDataForeign.total.confirm - countDataForeign.total.heal }}</el-button>
            <el-button type="danger" size="mini">确诊&nbsp;-&nbsp;{{ countDataForeign.total.confirm }}</el-button>
            <el-button type="warning" size="mini">疑似&nbsp;-&nbsp;{{ countDataForeign.total.suspect }}</el-button>
            <el-button type="info" size="mini">死亡&nbsp;-&nbsp;{{ countDataForeign.total.dead }}</el-button>
            <el-button type="success" size="mini">治愈&nbsp;-&nbsp;{{ countDataForeign.total.heal }}</el-button>
          </div>
          <el-tree v-show="index===1"
            :data="countDataForeign.list"
            :props="countProps">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span class="btn-lb">{{ node.label }}</span>
              <span class="btn-gp">
                <el-button type="primary" plain>{{ data.confirm - data.heal }}</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="danger" plain>{{ data.confirm }}</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="warning" plain>{{ data.suspect }}</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="info" plain>{{ data.dead }}</el-button>
                <el-divider direction="vertical"></el-divider>
                <el-button type="success" plain>{{ data.heal }}</el-button>
              </span>
            </span>
          </el-tree>
          <!-- 漏斗图 -->
          <swiper v-show="index===2" class="pieSwiper" :options="swiperOption">
            <swiper-slide class="swiper-slide" :key="num"
                v-for="(data, num) in countPart">
              <el-tag :type="['danger', 'warning', 'info', 'success'][num]" size="mini" effect="dark">
                {{ ['确诊', '疑似', '死亡', '治愈'][num] }}
              </el-tag>
              <virusFunnel :countPart="[data, num]"
                :chartName="chartInfo.virusFunnel.name+'_'+num"
                :chartStyle="chartInfo.virusFunnel"
                :countData="countData" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </el-tab-pane>
      </el-tabs>
    </el-col>
    <!-- 作者信息 -->
    <el-col :span="22" :offset="1" class="author-info">
      <el-tag type="success">Powered by LeeHaoYue</el-tag>
      <el-tag type="info">持续更新中。。。</el-tag>
    </el-col>
    <!-- 新闻列表 -->
    <el-drawer class="newsHospital-list"
      size="90%"
      direction="rtl"
      :title="isNews ? '热点新闻' : '医疗机构'"
      :visible.sync="newsHospitalDrawer">
      <el-row class="newsHospital-list-inner" ref="newsHospital">
        <el-col :span="24">
          <el-timeline>
            <el-timeline-item :timestamp="isNews ? item.time : item.detail"
              placement="top"
              v-for="(item, index) in NHList"
              :key="index">
              <el-card>
                <h4>{{ item.title }}</h4>
                <p v-show="isNews">{{ item.detail }}</p>
                <el-button type="text" @click="newsHospitalDetial(item)">详情</el-button>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-col>
        <!-- 返回新闻列表顶部 -->
        <el-backtop target=".newsHospital-list-inner"></el-backtop>
      </el-row>
    </el-drawer>
    <!-- 新闻详情 -->
    <el-dialog class="newsHospitalView"
      top="0"
      width="100%"
      :title="newsHospitalTitle"
      :modal="false"
      :visible.sync="newsHospitalDetialShow">
      <iframe :src="newsHospitalLink" id="newsHospitalDetial" />
    </el-dialog>
    <!-- 附近疫情 -->
    <el-dialog class="localView"
      title="附近疫情"
      :fullscreen="true"
      :visible.sync="localShow">
      <virusLocal :wxposition="wxposition" />
    </el-dialog>
    <!-- 返回整体页面顶部 -->
    <el-backtop target=".virus"></el-backtop>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>