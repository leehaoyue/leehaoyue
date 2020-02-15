<!-- 附近小区情况 -->
<template>
  <el-row class="virus-local" ref="virus-local">
    <el-col :span="24">
      <baidu-map class="bmView"
        v-loading="true"
        @ready="initMap"
        :zoom="map.zoom"
        :center="map.position"
        :scroll-wheel-zoom="true"
        :double-click-zoom="true"
        v-if="showMap && showMapCheck"
        ak="pxoraYzj7L89lC7mup893eekkBZew9jq"
        element-loading-spinner="el-icon-loading"
        element-loading-text="拼命加载中，若长时间无响应，请尝试刷新！">
        <bm-marker :position="position"
          @click="positionDetail"
          animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
        <bm-point-collection color="red"
          :points="marker"
          size="BMAP_POINT_SIZE_BIGGER"
          shape="BMAP_POINT_SHAPE_CIRCLE"
          @click="pointDetail"></bm-point-collection>
        <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
      </baidu-map>
    </el-col>
    <!-- 位置选择 -->
    <el-col :span="24" class="selectCity">
      <el-select v-model="value_p"
        placeholder="请选择省"
        @change="value_c = ''">
        <el-option
          v-for="(item, index) in cityList_p"
          :key="index"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value_c"
        placeholder="请选择市"
        @change="value_t = ''">
        <el-option
          v-for="(item, index) in cityList_c"
          :key="index"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value_t"
        placeholder="请选择区">
        <el-option
          v-for="(item, index) in cityList_t"
          :key="index"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <!-- 显示地图选项 -->
    <el-checkbox class="showMapCheck" v-model="showMapCheck">显示地图（地图加载耗时较长）</el-checkbox>
    <!-- 当前位置 -->
    <h4 class="position" v-show="!$globalmethod.isEmpty(address)">
      <i class="fa fa-map-marker" aria-hidden="true"></i>当前位置：{{address}}
    </h4>
    <!-- 无数据 -->
    <h4 class="pageNoData" v-show="$globalmethod.isEmpty(areaData)">暂无数据</h4>
    <!-- 表格点击提示 -->
    <h4 class="tableTips" v-show="!$globalmethod.isEmpty(areaData)">表格行可点击，并查看相关新闻</h4>
    <!-- 数据表格 -->
    <el-col :span="24"
      :key="index_o"
      v-for="(item_o, key_o, index_o) in areaData">
      <el-card class="box-card"
        :key="index_i"
        v-for="(item_i, key_i, index_i) in areaData[key_o]">
        <div slot="header" class="clearfix">
          <el-divider>{{ key_i }}</el-divider>
        </div>
        <div class="content"
          :key="num_o"
          v-for="(data_o, val_o, num_o) in item_o[key_i]">
          <el-divider content-position="left"><i class="el-icon-location"></i>{{ val_o }}</el-divider>
          <el-table class="localtable"
            border
            max-height="300"
            style="width: 100%"
            :data="data_o"
            @row-click="detailRow">
            <el-table-column :key="num_i"
              :prop="data_i.prop"
              :label="data_i.label"
              :fixed="num_i===0"
              show-overflow-tooltip
              v-for="(data_i, num_i) in tableData">
                <template slot-scope="scope">
                  <span>{{ data_i.fun(scope.row[data_i.prop], scope.row, position) }}</span>
                </template>
              </el-table-column>
          </el-table>
        </div>
      </el-card>
    </el-col>
    <!-- 新闻列表 -->
    <el-dialog class="newList"
      width="80%"
      title="相关新闻"
      :modal="false"
      :visible.sync="detailVisible">
      <h4>【地址】{{ detailInfo.full_address }}</h4>
      <el-divider content-position="left">新闻信息</el-divider>
      <ul>
        <li :key="index"
          v-for="(item, index) in detailInfo.article_source"
          @click="newDetailShow(item)">{{ index+1 }}、{{ item.title }}</li>
      </ul>
      <h3 v-show="$globalmethod.isEmpty(detailInfo.article_source)">暂无数据</h3>
    </el-dialog>
    <!-- 新闻详情 -->
    <el-dialog class="newDetail"
      fullscreen
      :modal="false"
      :title="newsInfo.title"
      :visible.sync="newsDetailVisible"
      @close="newsInfo.url=''">
      <iframe :src="newsInfo.url"></iframe>
    </el-dialog>
    <!-- 经纬度获取 -->
    <iframe v-if="!$globalmethod.isWeiXin() || !$globalmethod.isEmpty(that.wxposition)"
      style="display:none;"
      src="https://apis.map.qq.com/tools/geolocation?key=TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU&referer=myapp"></iframe>
    <!-- 返回整体页面顶部 -->
    <el-backtop target=".virus-local"></el-backtop>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>