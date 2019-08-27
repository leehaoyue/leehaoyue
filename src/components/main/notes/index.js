import data from './data.js';
import marked from 'marked';

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
      this.getContent(this.getDefault(this.navList, 'children', 'index'));
      return this.getDefault(this.navList, 'children', 'index');
    }
  },
  methods: {
    selectMenuOpen(info) {
      if (info.indexOf('/')!==-1) {
        this.src = this.getContent(info);
      }
    },
    selectMenuSub(info) {
      this.src = this.getContent(info);
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
    },
    getContent(filename) {
      import('./markdown/' + filename).then(module =>{
        this.src = marked(module.default);
      }).catch(err => {
        this.src = marked(err.message);
      });
    }
  }
};
