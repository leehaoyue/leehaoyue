export default {
  name: 'navbar',
  data() {
    return {
      activeIndex: 'foreword',
      list: [{
        label: '朝花夕拾',
        name: 'foreword'
      }, {
        label: '下里巴人',
        name: 'project'
      }, {
        label: '嘲风弄月',
        name: 'blog'
      }, {
        label: '移花接木',
        name: 'notes'
      }]
    }
  },
  methods: {
    handleSelect() {}
  }
}