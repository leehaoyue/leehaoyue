import data from './data.js';

export default {
  name: 'blog',
  data() {
    return {
      chartData: {
        small: {
          style: {
            width: '50vw',
            height: '50vw',
            margin: 'auto'
          },
          name: 'blogSmall'
        },
        large: {
          style: {
            width: '20vw',
            height: '20vw',
            margin: 'auto'
          },
          name: 'blogLarge'
        },
        option: data.option
      },
      selfInfo: data.selfInfo,
      introduce: {},
      dialogVisible: false,
      cardList: '',
      qrcodePreview: null
    };
  },
  computed: {
    link() {
      let link = window.location.origin+window.location.pathname;

      return link.substring(0, link.length-1);
    }
  },
  created() {
    this.getCardList();
  },
  methods: {
    // 获取项目列表
    getCardList() {
      this.$axios.getData({
        url: '/blog/card'
      }).then(res => {
        this.cardList = res.data;
      });
    },
    // 二维码地址
    qrcodeShow(link) {
      this.qrcodePreview = link;
    },
    // 打开项目地址
    pageDetail(link) {
      window.open(link);
    },
    // 查看项目详情
    introduceDetail(info) {
      this.introduce = info;
      this.dialogVisible = true;
    }
  }
};
