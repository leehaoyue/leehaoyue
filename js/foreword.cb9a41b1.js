(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["foreword"],{"176f":function(t,e,a){t.exports=a.p+"img/foreword_1.311dbf66.png"},5610:function(t,e,a){},"7ec2":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",{staticClass:"foreword",attrs:{type:"flex",justify:"space-around"}},[s("el-col",{staticClass:"topImg",attrs:{span:24}},[s("el-image",{staticClass:"huge hidden-sm-and-down",attrs:{fit:"cover",src:a("176f")}},[s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v("\n        加载中"),s("span",{staticClass:"dot"},[t._v("...")])]),s("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"el-icon-picture-outline"})])]),s("el-image",{staticClass:"little hidden-md-and-up",attrs:{fit:"cover",src:a("176f")}},[s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v("\n        加载中"),s("span",{staticClass:"dot"},[t._v("...")])]),s("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"el-icon-picture-outline"})])]),s("swiper",{staticClass:"huge hidden-sm-and-down",attrs:{options:t.swiperOption}},t._l(t.sentence,function(e,a){return s("swiper-slide",{key:a,staticClass:"swiper-slide"},[s("p",[t._v(t._s(e))])])}),1),s("swiper",{staticClass:"little hidden-md-and-up",attrs:{options:t.swiperOption}},t._l(t.sentence,function(e,a){return s("swiper-slide",{key:a,staticClass:"swiper-slide"},[s("p",[t._v(t._s(e))])])}),1)],1),s("el-col",{staticClass:"tabPage",attrs:{xs:24,sm:24,md:22,lg:20,xl:20}},[s("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tabPage,function(e,a){return s("el-tab-pane",{key:a,attrs:{name:e.name}},[s("span",{attrs:{slot:"label"},slot:"label"},[t._v("\n          "+t._s(e.label)),s("i",{class:e.labelicon})]),s("h2",[t._v(t._s(e.content.title))]),s("el-divider",[s("i",{class:e.dividericon})]),s("article",{domProps:{innerHTML:t._s(e.content.content)}})],1)}),1)],1)],1)},i=[],n={sentence:["一个好的程序员是那种过单行线马路都要往两边看的人。","程序有问题时不要担心。如果所有东西都没问题，你就失业了。","程序员的麻烦在于，你无法弄清他在捣腾什么，当你最终弄明白时，也许已经晚了。","我想大部分人都知道通常一个程序员会具有的美德。当然了，有三种：懒惰，暴躁，傲慢。","编程时要保持这种心态：就好象将来要维护你这些代码的人是一位残暴的精神病患者，而且他知道你住在哪。","一个人写的烂软件将会给另一个人带来一份全职工作。","如果建筑工人像程序员写软件那样盖房子，那第一只飞来的啄木鸟就能毁掉人类文明。","这世界最有可能毁灭的方式——大多数专家都同意——是次意外。这就是为什么会有我们，我们是计算机专家，我们创造意外。","我们这个行业有个特别奇怪的现象：不仅我们不从失败里吸取教训，同时也不从成功中学习经验。","一种新技术一旦开始流行，你要么坐上压路机，要么成为铺路石。","如果没能一次成功，那就叫它 1.0 版吧。","所有的程序员都是编剧，所有的计算机都是烂演员。","工作进度上越早落后，你就会有越充足的时间赶上。","当有这样的一种编程语言出现：它能让程序员用简单的英语编程，你将会发现，程序员都开始不会说英语。","为什么我们没有时间把事情做对，却总有时间把事情做过头？","傻瓜都能写出计算机能理解的程序。优秀的程序员写出的是人类能读懂的代码。","任何你写的代码，超过 6 个月不去看它，当你再看时，都像是别人写的。"],article:[{}]},l={name:"foreword",data:function(){return{sentence:n.sentence,article:n.article,swiperOption:{loop:!0,effect:"fade",fadeEffect:{crossFade:!0},autoplay:{delay:3e3}},activeName:"first",tabPage:[{name:"first",label:"愚公移山",labelicon:"fa fa-angle-right",dividericon:"fa fa-leaf",content:""},{name:"second",label:"草木皆兵",labelicon:"fa fa-angle-right",dividericon:"fa fa-envira",content:""}]}},created:function(){for(var t in this.tabPage)this.getTabPage(t)},methods:{getTabPage:function(t){var e=this;this.$axios.getData({url:"/foreword/tabPage"}).then(function(a){e.tabPage[t].content=a.data[t]})}}},r=l,o=(a("9ec8"),a("2877")),c=Object(o["a"])(r,s,i,!1,null,null,null);e["default"]=c.exports},"9ec8":function(t,e,a){"use strict";var s=a("5610"),i=a.n(s);i.a}}]);