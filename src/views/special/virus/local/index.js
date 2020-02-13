import BaiduMap from 'vue-baidu-map/components/map/Map.vue';
import BmView from 'vue-baidu-map/components/map/MapView.vue';
import BmLocalSearch from 'vue-baidu-map/components/search/LocalSearch.vue';

export default {
  name: 'virus-local',
  data() {
    return {
      cityList: [], // 省市区列表
      value_p: '', // 选中的省
      value_c: '', // 选中的市
      value_t: '', // 选中的区
      areaData: '', // 地区详情
      detailVisible: false, // 是否显示表格列详情
      detailInfo: '', // 详情信息
      newsDetailVisible: false, // 是否显示新闻详情
      newsInfo: '', // 新闻详情
      position: { // 默认北京
        lat: 39.9,
        lng: 116.3
      },
      map: { // 地图配置
        position: {
          lat: 39.9,
          lng: 116.3
        },
        zoom: 15
      },
      marker: [], // 覆盖点位
      address: '', // 当前位置
      tableData: [{ // 表格配置
        prop: 'street',
        label: '街道',
        fun: (str) => {
          return this.$globalmethod.isEmpty(str) ? '未知' : str;
        }
      }, {
        prop: 'community',
        label: '社区',
        fun: (str) => {
          return this.$globalmethod.isEmpty(str) ? '未知' : str;
        }
      }, {
        prop: 'distance',
        label: '与我距离(公里)',
        fun: (info, row, pos) => {
          let s = info,
            radLat1 = pos.lat*Math.PI / 180.0,
            radLat2 = row.lat*Math.PI / 180.0,
            a = radLat1 - radLat2,
            b = pos.lng*Math.PI / 180.0 - row.lng*Math.PI / 180.0;

          s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) + Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
          s = s * 6378.137 ;// EARTH_RADIUS;
          s = Math.round(s * 10000) / 10000;
          return this.$globalmethod.isEmpty(s) ? '-' : s.toFixed(2);
        }
      }, {
        prop: 'cnt_sum_certain',
        label: '累计确诊',
        fun: (num) => {
          return num === '-1' ? 0 : num;
        }
      }, {
        prop: 'cnt_sum_uncertain',
        label: '累计疑似',
        fun: (num) => {
          return num === '-1' ? 0 : num;
        }
      }, {
        prop: 'cnt_sum_die',
        label: '累计死亡',
        fun: (num) => {
          return num === '-1' ? 0 : num;
        }
      }, {
        prop: 'cnt_sum_recure',
        label: '累计治愈',
        fun: (num) => {
          return num === '-1' ? 0 : num;
        }
      }, {
        prop: 'cnt_inc_certain',
        label: '新增确诊',
        fun: (num) => {
          return num === '-1' ? 0 : num;
        }
      }, {
        prop: 'cnt_inc_uncertain',
        label: '新增疑似',
        fun: (num) => {
          return num === '-1' ? 0 : num;
        }
      }, {
        prop: 'cnt_inc_die',
        label: '新增死亡',
        fun: (num) => {
          return num === '-1' ? 0 : num;
        }
      }, {
        prop: 'cnt_inc_recure',
        label: '新增治愈',
        fun: (num) => {
          return num === '-1' ? 0 : num;
        }
      }]
    };
  },
  computed: {
    cityList_p() { // 省列表
      this.value_c = '';
      return this.cityList;
    },
    cityList_c() { // 市列表
      this.value_t = '';
      if (this.$globalmethod.isEmpty(this.value_p)) {
        return [];
      }
      let index = this.cityList_p.findIndex(item => {
        return item.value === this.value_p;
      });

      return this.$globalmethod.isEmpty(this.cityList_p[index]) ? [] : this.cityList_p[index].children;
    },
    cityList_t() { // 区列表
      if (this.$globalmethod.isEmpty(this.value_c)) {
        return [];
      }
      let index = this.cityList_c.findIndex(item => {
        return item.value === this.value_c;
      });

      return this.$globalmethod.isEmpty(this.cityList_c[index]) ? [] : this.cityList_c[index].children;
    },
    location() { // 选中的地点
      this.marker = [];
      let arr = [], obj = this.cityList_t;

      for (let i=0; obj.length ;i++) {
        arr.push({
          lng: obj[i].lng,
          lat: obj[i].lat
        });
      }
      arr.push(this.position);
      this.$set(this, 'marker', arr);
      return {
        province: this.value_p,
        city: this.value_c,
        district: this.value_t
      };
    }
  },
  watch: {
    location: {
      handler() {
        this.getAreaData();
      },
      deep: true
    },
    position: {
      handler(n) {
        this.getAddress(n);
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    this.getCityList();
  },
  methods: {
    // 获取地理位置(经纬度)
    getLocation() {
      let that = this;

      window.addEventListener('message', event => {
        if (!that.$globalmethod.isEmpty(event.data) && event.data.lat && event.data.lng) {
          that.position.lat = event.data.lat;
          that.position.lng = event.data.lng;
        }
      }, false);
    },
    // 获取地理位置(省市区)
    getAddress(params) {
      this.$axios.getData({
        baseURL: process.env.VUE_APP_WJWVIRUSCOUNT,
        url: '/api/getLocationByGps',
        method: 'get',
        params: params
      }).then(res => {
        let province = res.data.data.strProvinceCN,
          city = res.data.data.strCity,
          town = res.data.data.strDistrict;

        this.value_p = province;
        this.value_c = city;
        this.value_t = town;
        this.address = `${province},${city},${town}`;
      });
    },
    // 初始化地图
    initMap() {
      this.$set(this, 'map', {
        position: this.position,
        zoom: 15
      });
    },
    // 获取城市列表
    getCityList() {
      this.$axios.getData({
        baseURL: process.env.VUE_APP_WJWVIRUSCOUNT,
        url: '/api/getPositionNew',
        method: 'get'
      }).then(res => {
        this.$set(this, 'cityList', this.treeDeal(res.data.position));
        this.getLocation();
      });
    },
    // 树形处理
    treeDeal(res) {
      let arr = [];

      if (this.$globalmethod.isEmpty(res)) {
        return null;
      }
      for (let i in res) {
        if (this.$globalmethod.isEmpty(res[i])) {
          arr.push({
            value: i,
            label: i
          });
        } else {
          arr.push({
            value: i,
            label: i,
            children: this.treeDeal(res[i])
          });
        }
      }
      return arr;
    },
    // 获取地区详情
    getAreaData() {
      this.$axios.getData({
        baseURL: process.env.VUE_APP_WJWVIRUSCOUNT,
        url: '/api/getCommunity',
        method: 'get',
        params: this.location
      }).then(res => {
        this.$set(this, 'areaData', res.data.community);
      });
    },
    // 表格行详情
    detailRow(info) {
      this.detailInfo = info;
      this.detailVisible = true;
    },
    // 新闻详情
    newDetailShow(info) {
      this.newsDetailVisible = true;
      this.newsInfo = info;
    }
  },
  components: {
    BaiduMap,
    BmView,
    BmLocalSearch
  }
};
