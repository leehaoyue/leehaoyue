import chartdata from './data.js';
import virusPie from '../pie/index.vue';

export default {
  name: 'virus-map',
  props: {
    chartName: '',
    chartStyle: '',
    countData: '',
    countPart: ''
  },
  data() {
    return {
      virusPie: { // 饼图配置
        name: 'virusEchartsPie',
        width: '85vw',
        height: '40vh'
      },
      mapDetial: {
        name: '',
        mapType: '',
        data: ''
      },
      isCountry: false,
      country: {
        name: '全国',
        data: ''
      },
      tablelabel: [{
        prop: 'name',
        label: '地区'
      }, {
        prop: this.countPart[0],
        label: '确诊'
      }, {
        prop: this.countPart[2],
        label: '死亡'
      }, {
        prop: this.countPart[3],
        label: '治愈'
      }],
      activePart: 'table',
      partList: [{
        label: '数据表统计',
        name: 'table'
      }, {
        label: '饼图占比统计',
        name: 'pie'
      }],
      swiperOption: {
        loop: false,
        effect: 'coverflow',
        fadeEffect: {
          slideShadows: true,
          shadow: true
        },
        autoplay: true,
        observer: true,
        observeParents: true,
        autoplayDisableOnInteraction: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    };
  },
  watch: {
    countData: {
      handler(n) {
        this.reback(n);
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    mapData() {
      let obj = this.$lodash.cloneDeep(chartdata);

      obj.option.geo.map = this.mapDetial.name;
      obj.option.series[0].mapType = this.mapDetial.mapType;
      obj.option.series[0].data = this.mapDetial.data;
      return obj.option;
    },
    pieData() {
      let arr = this.mapDetial.data,
        arr_c = [],
        arr_d = [],
        arr_h = [],
        param = {};

      if (!this.$globalmethod.isEmpty(arr)) {
        arr.forEach(item => {
          arr_c.push({
            name: item.name,
            value: item.value
          });
          arr_d.push({
            name: item.name,
            value: item.value_d
          });
          arr_h.push({
            name: item.name,
            value: item.value_h
          });
        });
      }
      param[this.countPart[0]] = arr_c;
      param[this.countPart[2]] = arr_d;
      param[this.countPart[3]] = arr_h;
      return param;
    },
    datadetail() {
      return this.options;
    }
  },
  mounted() {},
  methods: {
    reback(n) { // 返回全国
      this.activePart = 'table';
      this.country = {
        name: '全国',
        data: []
      };
      this.isCountry = false;
      if (!this.$globalmethod.isEmpty(n)) {
        let arr = [];

        n.forEach(item => {
          arr.push({
            name: item.name,
            value: item[this.countPart[0]] || 0,
            value_d: item[this.countPart[2]] || 0,
            value_h: item[this.countPart[3]] || 0
          });
        });
        this.$set(this, 'mapDetial', {
          name: 'china',
          mapType: 'china',
          data: arr
        });
      }
    },
    chartclick(param) { // 下钻
      let obj = this.countData.find(item => {
          return item.name === param.name;
        }),
        end = ['市', '区', '地区', '盟', '自治州'],
        city = ['北京', '天津', '上海', '重庆'],
        arr = [];

      this.isCountry = true;
      if (!this.$globalmethod.isEmpty(obj)) {
        this.country = {
          name: param.name,
          data: obj.children
        };
        obj.children.forEach(item => {
          arr.push({
            name: end.find(data => item.name.indexOf(data)>=0) ? item.name : city.find(data => param.name.indexOf(data)>=0) ? item.name==='浦东' ? item.name+'新区' : item.name+'区' : item.name+'市',
            value: item[this.countPart[0]] || 0,
            value_d: item[this.countPart[2]] || 0,
            value_h: item[this.countPart[3]] || 0
          });
        });
        this.$set(this, 'mapDetial', {
          name: param.name,
          mapType: param.name,
          data: arr
        });
      }
    }
  },
  components: {
    virusPie
  }
};
