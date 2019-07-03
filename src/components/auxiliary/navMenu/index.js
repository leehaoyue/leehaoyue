import subItem from './sub/index.vue';

export default {
  name: 'navManu',
  props: {
    navList: null,
    defaultIndex: null
  },
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    collapseIcon() {
      return ['fa fa fa-angle-double-left', 'fa fa fa-angle-double-right'][Number(this.isCollapse)];
    }
  },
  methods: {
    selectMenu(info) {
      this.$emit('selectMenu', info);
    }
  },
  components: {
    subItem
  }
};
