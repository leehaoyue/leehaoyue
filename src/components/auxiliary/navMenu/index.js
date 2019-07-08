import subItem from './sub/index.vue';

export default {
  name: 'navManu',
  props: {
    navList: null,
    defaultIndex: null
  },
  data() {
    return {
      isCollapse: false,
      defaultActive: this.defaultIndex
    };
  },
  computed: {
    collapseIcon() {
      return ['fa fa fa-angle-double-left', 'fa fa fa-angle-double-right'][Number(this.isCollapse)];
    }
  },
  methods: {
    selectMenuOpen(info) {
      this.defaultActive = info;
      this.$emit('selectMenuOpen', info);
    },
    selectMenuClose(info) {
      this.$emit('selectMenuClose', info);
    },
    selectMenuSub(info) {
      this.defaultActive = info;
      this.$emit('selectMenuSub', info);
    }
  },
  components: {
    subItem
  }
};
