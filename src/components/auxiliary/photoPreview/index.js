export default {
  name: 'photoPreview',
  props: {
    show: null
  },
  data() {
    return {
      isShow: false
    };
  },
  watch: {
    show: {
      handler(n) {
        this.isShow = typeof n === 'boolean' ? n : !this.$globalmethod.isEmpty(n);
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    closePreview() {
      this.isShow = false;
    }
  }
};
