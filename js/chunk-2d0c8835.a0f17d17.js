(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8835"],{"54cc":function(n,s,e){"use strict";e.r(s),s["default"]="\n### 性能优化\n---\n\n**如何进行网站性能优化**\n\n- content方面\n  - 减少HTTP请求：合并文件、CSS精灵、inline Image\n  - 减少DNS查询：DNS查询完成之前浏览器不能从这个主机下载任何任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询\n  - 避免重定向：多余的中间访问\n  - 使Ajax可缓存\n  - 非必须组件延迟加载\n  - 未来所需组件预加载\n  - 减少DOM元素数量\n  - 将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量\n  - 减少iframe数量\n  - 不要404\n\n- Server方面\n  - 使用CDN\n  - 添加Expires或者Cache-Control响应头\n  - 对组件使用Gzip压缩\n  - 配置ETag\n  - Flush Buffer Early\n  - Ajax使用GET进行请求\n  - 避免空src的img标签\n- Cookie方面\n  - 减小cookie大小\n  - 引入资源的域名不要包含cookie\n\n- css方面\n  - 将样式表放到页面顶部\n  - 不使用CSS表达式\n  - 不使用IE的Filter\n\n- Javascript方面\n  - 将脚本放到页面底部\n  - 将javascript和css从外部引入\n  - 压缩javascript和css\n  - 删除不需要的脚本\n  - 减少DOM访问\n  - 合理设计事件监听器\n\n- 图片方面\n  - 优化图片：根据实际颜色需要选择色深、压缩\n  - 优化css精灵\n  - 不要在HTML中拉伸图片\n  - 保证favicon.ico小并且可缓存\n\n- 移动方面\n  - 保证组件小于25k\n  - `Pack Components into a Multipart Document`\n\n**你有用过哪些前端性能优化的方法？**\n\n- 减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。\n-  前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数\n-  用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。\n-  当需要设置的样式很多时设置className而不是直接操作style\n-  少用全局变量、缓存DOM节点查找的结果。减少IO读取操作\n-  避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)\n-  图片预加载，将样式表放在顶部，将脚本放在底部  加上时间戳\n-  避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢\n\n**谈谈性能优化问题**\n\n- 代码层面：避免使用css表达式，避免使用高级选择器，通配选择器\n- 缓存利用：缓存Ajax，使用CDN，使用外部js和css文件以便缓存，添加Expires头，服务端配置Etag，减少DNS查找等\n- 请求数量：合并样式和脚本，使用css图片精灵，初始首屏之外的图片资源按需加载，静态资源延迟加载\n- 请求带宽：压缩文件，开启GZIP\n\n**代码层面的优化**\n- 用hash-table来优化查找\n\n- 少用全局变量\n\n- 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能\n\n- 用setTimeout来避免页面失去响应\n\n- 缓存DOM节点查找的结果\n\n- 避免使用CSS Expression\n\n- 避免全局查询\n\n- 避免使用with(with会创建自己的作用域，会增加作用域链长度)\n\n- 多个变量声明合并\n\n- 避免图片和iFrame等的空Src。空Src会重新加载当前页面，影响速度和效率\n\n- 尽量避免写在HTML标签中写Style属性\n\n**前端性能优化最佳实践？**\n\n* 性能评级工具（PageSpeed 或 YSlow）\n* 合理设置 HTTP 缓存：Expires 与 Cache-control\n* 静态资源打包，开启 Gzip 压缩（节省响应流量）\n* CSS3 模拟图像，图标base64（降低请求数）\n* 模块延迟(defer)加载/异步(async)加载\n* Cookie 隔离（节省请求流量）\n* localStorage（本地存储）\n* 使用 CDN 加速（访问最近服务器）\n* 启用 HTTP/2（多路复用，并行加载）\n* 前端自动化（gulp/webpack）\n"}}]);