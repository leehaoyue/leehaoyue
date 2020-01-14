export default {
  name: 'navbar',
  data() {
    return {
      logosrc: require('../../../public/img/logo.png'),
      activeIndex: 'foreword',
      list: [{
        label: '朝花夕拾-前言赘述',
        name: 'foreword'
      }, {
        label: '下里巴人-项目经历',
        name: 'project'
      }, {
        label: '移花接木-资料笔记',
        name: 'notes'
      }, {
        label: '嘲风弄月-个人练手',
        name: 'blog'
      }]
    };
  },
  created() {
    this.activeIndex = this.$store.state.routerInfo.name;
    this.$router.push(this.$store.state.routerInfo.path);
  },
  methods: {
    toMain() {
      this.$router.push({name: 'travel'});
    },
    handleSelect(info) {
      if (!this.$globalmethod.isEmpty(info)) {
        this.$router.push({name: info});
        this.activeIndex = info;
      }
    }
  }
};
