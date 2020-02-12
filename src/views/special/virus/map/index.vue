<!-- 疫情热力图 -->
<template>
  <el-row class="virus-map">
    <el-button type="primary"
      size="mini"
      v-if="isCountry"
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
    <el-col :span="24" v-show="isCountry">
      <el-tabs v-model="activePart">
        <el-tab-pane :key="index"
          :label="item.label"
          :name="item.name"
          v-for="(item, index) in partList">
          <el-table v-show="index===0" border
            height="250"
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
          <swiper v-show="index===1" class="pieSwiper" :options="swiperOption">
            <swiper-slide class="swiper-slide">
              <el-tag type="danger" size="mini" effect="dark">确诊比例</el-tag>
              <virusPie class="pieData" :chartName="virusPie.name+'_c'"
                :chartStyle="virusPie"
                :countPart="countPart"
                :pieces="'pieces_c'"
                :countData="pieData[countPart[0]]"></virusPie>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <el-tag type="info" size="mini" effect="dark">死亡比例</el-tag>
              <virusPie class="pieData" :chartName="virusPie.name+'_d'"
                :chartStyle="virusPie"
                :countPart="countPart"
                :pieces="'pieces_d'"
                :countData="pieData[countPart[2]]"></virusPie>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <el-tag type="success" size="mini" effect="dark">治愈比例</el-tag>
              <virusPie class="pieData" :chartName="virusPie.name+'_h'"
                :chartStyle="virusPie"
                :countPart="countPart"
                :pieces="'pieces_h'"
                :countData="pieData[countPart[3]]"></virusPie>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>