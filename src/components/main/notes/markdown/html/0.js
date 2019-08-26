export default `
## Doctype作用？标准模式与怪异模式（兼容模式）各有什么区别？

1. 这个声明的目的是防止浏览器在渲染文档时，切换到我们称为“怪异模式（兼容模式）”的渲染模式。“<!DOCTYPE html>" 确保浏览器按照最佳的相关规范进行渲染，而不是使用一个不符合规范的渲染模式。[【详情】](https://developer.mozilla.org/zh-CN/docs/Glossary/Doctype)
2. 在怪异模式下，排版会模拟 Navigator 4 与 Internet Explorer 5 的非标准行为。为了支持在网络标准被广泛采用前，就已经建好的网站，这么做是必要的。在标准模式下，行为即（但愿如此）由 HTML 与 CSS 的规范描述的行为。[【详情】](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode#What_are_the_differences_between_the_modes.3F)

## [HTML5为什么只需要写 !DOCTYPE HTML？](https://developer.mozilla.org/zh-CN/docs/Glossary/HTML)

1. HTML5不基于[SGML](https://developer.mozilla.org/zh-TW/docs/Glossary/SGML)（Standard Generalized Markup Language 标准通用标记语言），因此不需要对DTD（DTD 文档类型定义）进行引用，但是需要DOCTYPE来规范浏览器行为
2. HTML4.01基于SGML，所以需要引用DTD。才能告知浏览器文档所使用的文档类型，如下：<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

## [行内元素有哪些？块级元素有哪些？空(void)元素有那些？](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)

1. [行内元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elements)：a、span、img、input、select
2. [块级元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements)：div、ul、ol、li、dl、dt、dd、h1、p
3. [空元素](https://www.w3school.com.cn/html/html_elements.asp)：br、hr、link、meta、source

## 无样式内容闪烁（FOUC）Flash of Unstyle Content

1. [@import](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@import)导入CSS文件会等到文档加载完后再加载CSS样式表。因此，在页面DOM加载完成到CSS导入完成之间会有一段时间页面上的内容是没有样式的。
2. 解决方法：使用[link](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link)标签加载CSS样式文件。因为link是顺序加载的，这样页面会等到CSS下载完之后再下载HTML文件，这样先布局好，就不会出现FOUC问题。

## 对浏览器内核的理解？

1. IE浏览器内核（-ms-）：Trident内核，也是俗称的IE内核； 
2. Chrome浏览器内核（-webkit-）：统称为Chromium内核或Chrome内核，以前是Webkit内核，现在是Blink内核； 
3. Firefox浏览器内核（-moz-）：Gecko内核，俗称Firefox内核； 
4. Safari浏览器内核：Webkit内核； 
5. Opera浏览器内核（-o-）：最初是自己的Presto内核，后来是Webkit，现在是Blink内核； 
6. 360浏览器、猎豹浏览器内核：IE+Chrome双内核； 
7. 搜狗、遨游、QQ浏览器内核：Trident（兼容模式）+Webkit（高速模式）； 
8. 百度浏览器、世界之窗内核：IE内核； 
9. 2345浏览器内核：以前是IE内核，现在也是IE+Chrome双内核；
`;
