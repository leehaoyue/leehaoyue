export default {
  name: 'navbar',
  data() {
    return {
      logosrc: require('../../../public/img/logo.png'),
      activeIndex: 'foreword',
      list: [{
        label: '朝花夕拾',
        name: 'foreword'
      }, {
        label: '下里巴人',
        name: 'project'
      }, {
        label: '移花接木',
        name: 'notes'
      }, {
        label: '嘲风弄月',
        name: 'blog'
      }]
    };
  },
  created() {
    this.activeIndex = this.$store.state.routerInfo.params;
    this.$router.push({ path: `/${this.$store.state.routerInfo.name}/${this.$store.state.routerInfo.params}` });
  },
  methods: {
    handleSelect(info) {
      if (!this.$globalmethod.isEmpty(info)) {
        this.$router.push({ path: `/${this.$globaldata.routerDefault.name}/${info}` });
      }
    }
  }
};
