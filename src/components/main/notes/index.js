import data from './data.js';
import marked from 'marked';
// import mark from './markdown/README';

export default {
  name: 'notes',
  data() {
    return {
      navList: data.navList,
      src: ''
    };
  },
  computed: {
    defaultIndex() {
      // this.src = this.getDefault(this.navList, 'children', 'index');
      return this.getDefault(this.navList, 'children', 'index');
    }
  },
  created() {
    this.src = marked('', {
      baseUrl: './markdown/README'
    });
  },
  methods: {
    selectMenu(info) {
      this.src = info;
    },
    getDefault(arrobj, key, dkey) {
      for (let item in arrobj) {
        if (Array.isArray(arrobj)) {
          if (this.$globalmethod.isEmpty(arrobj[item][key])) {
            return arrobj[item][dkey];
          }
          return this.getDefault(arrobj[item][key], key, dkey);
        }
        if (this.$globalmethod.isEmpty(item[key])) {
          return item[dkey];
        }
        return this.getDefault(item[key], key, dkey);
      }
    }
  }
};
