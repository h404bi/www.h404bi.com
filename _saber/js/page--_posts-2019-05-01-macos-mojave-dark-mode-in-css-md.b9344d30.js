(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{64:function(e,a,r){"use strict";r.r(a);var t=r(0),o=function(e){var a,r,t,o=(t=void 0,{attributes:{slug:"macos-mojave-dark-mode-in-css",layout:a="post",title:"利用 CSS 媒体查询让网页配色跟随 macOS 深色模式",keywords:"CSS,media queries,macos dark mode",description:"苹果公司的操作系统 macOS 从 10.14 Mojave 版本开始，户提供了深色模式（Dark Mode） 的外观。本文介绍利用 CSS 媒体查询（media queries）中的 prefers-color-scheme 媒体特征（media feature）做到让网页跟随 macOS Mojave 的黑暗模式进行配色自动切换。",date:r="2019-05-01 18:14:40",updated:r,cover:"/uploads/2019/05/20190501006.png",createdAt:new Date(155670568e4),updatedAt:new Date(155670568e4),type:a,permalink:"/blog/2019/05/macos-mojave-dark-mode-in-css",assets:{}},internal:t,contentType:"markdown",content:t,markdownHeadings:[],excerpt:'<p>苹果公司的操作系统 macOS 从 10.14 Mojave 版本开始，为用户提供了<a href="https://www.apple.com/cn/macos/mojave/" target="_blank" rel="noopener noreferrer noopener noreferrer">深色模式</a>的可选外观。用户可以在系统中的通用设置里选择启用深色模式，整个系统的界面会全局变为暗色调。对于夜间使用场景而言，深色模式的界面可能会显得更加友好，也更能让用户集中注意力。</p>\n'}),s=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=o}].concat(s);["layout","transition"].forEach(function(a){var r=e.options.PageComponent;r&&(e.options[a]=r[a]),void 0===e.options[a]&&(e.options[a]=o.attributes[a])}),e.options.name="page-wrapper-"+o.attributes.slug.replace(/[^0-9a-z\-]/i,"-")},s=Object(t.a)({},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("layout-manager",[r("p",[e._v("苹果公司的操作系统 macOS 从 10.14 Mojave 版本开始，为用户提供了"),r("a",{attrs:{href:"https://www.apple.com/cn/macos/mojave/",target:"_blank",rel:"noopener noreferrer"}},[e._v("深色模式")]),e._v("的可选外观。用户可以在系统中的通用设置里选择启用深色模式，整个系统的界面会全局变为暗色调。对于夜间使用场景而言，深色模式的界面可能会显得更加友好，也更能让用户集中注意力。")]),e._v(" "),r("figure",{attrs:{"data-type":"image"}},[r("img",{attrs:{src:"/static/img/loading.gif",alt:"Office 365 Dark Mode (Twitter @derek_snook)","data-src":"/uploads/2019/05/20190501001.png"}}),r("figcaption",[e._v("Office 365 Dark Mode (Twitter @derek_snook)")])]),e._v(" "),r("p",[e._v("利用苹果公司提供的"),r("a",{attrs:{href:"https://developer.apple.com/documentation/appkit/supporting_dark_mode_in_your_interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("接口")]),e._v("，各类原生桌面应用程序都开始陆续支持深色模式，可根据 macOS\n用户的系统设置进行换肤，比如 Google Chrome、Microsoft Office 等。")]),e._v(" "),r("p",[e._v("但对于 Web 应用而言，似乎还没有什么讨论。好消息是 CSS 的媒体查询（media queries）新增加了一个叫做 "),r("code",{pre:!0},[e._v("prefers-color-scheme")]),e._v(" 的媒体特征，开发者可以通过该设置特征，让网站的配色随着 macOS 系统的界面外观色调改变而改变。")]),e._v(" "),r("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"css"}},[r("pre",{pre:!0,attrs:{class:"saber-highlight-code language-css"}},[r("code",{pre:!0,attrs:{class:"language-css"}},[e._v("/* 常规浅色模式下的网页背景颜色及文本颜色 */\nbody {\n  background: #fff;\n  color: #222;\n}\n\n/* 深色模式下的网页背景颜色及文本颜色 */\n@media (prefers-color-scheme: dark) {\n  body {\n    background-color: #222;\n    color: #ddd;\n  }\n}")])])]),r("p",[r("code",{pre:!0},[e._v("prefers-color-scheme")]),e._v(" 支持三个值，分别是 "),r("code",{pre:!0},[e._v("no-preference")]),e._v("、"),r("code",{pre:!0},[e._v("light")]),e._v("、以及 "),r("code",{pre:!0},[e._v("dark")]),e._v("，对应是“无指定”、“浅色主题”以及“深色主题”。详情可以查看 "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN")]),e._v(" 说明。")]),e._v(" "),r("p",[e._v("这个还在 CSS 草案阶段的媒体特征"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v("，显然尚未被主流浏览器大规模支持，不过已经开始受到部分浏览器支持了。可以从 MDN 或者 "),r("a",{attrs:{href:"https://caniuse.com/#search=prefers-color-scheme",target:"_blank",rel:"noopener noreferrer"}},[e._v("Can I Use")]),e._v(" 上看到，Firefox 67 以及 Safari\n12.1 开始支持该媒体特征。")]),e._v(" "),r("figure",{attrs:{"data-type":"image"}},[r("img",{attrs:{src:"/static/img/loading.gif",alt:" 兼容性","data-src":"/uploads/2019/05/20190501002.png"}}),r("figcaption",[r("code",{pre:!0},[e._v("prefers-color-scheme")]),e._v(" 兼容性")])]),e._v(" "),r("p",[e._v("如果你是 macOS 用户，又正巧使用的是支持该特征的浏览器的话，可以通过切换系统的外观色调，查看到我的博客配色跟随系统色调的变化。")]),e._v(" "),r("figure",{attrs:{"data-type":"image"}},[r("img",{attrs:{src:"/static/img/loading.gif",alt:"配色跟随系统色调切换而变化","data-src":"/uploads/2019/05/20190501003.gif"}}),r("figcaption",[e._v("配色跟随系统色调切换而变化")])]),e._v(" "),r("p",[e._v("除了 Firefox 浏览器之外，也可以用 macOS 系统的 Safari 查看到效果。")]),e._v(" "),r("figure",{attrs:{"data-type":"image"}},[r("img",{attrs:{src:"/static/img/loading.gif",alt:"浅色","data-src":"/uploads/2019/05/20190501004.png"}}),r("figcaption",[e._v("浅色")])]),e._v(" "),r("figure",{attrs:{"data-type":"image"}},[r("img",{attrs:{src:"/static/img/loading.gif",alt:"深色","data-src":"/uploads/2019/05/20190501005.png"}}),r("figcaption",[e._v("深色")])]),e._v(" "),r("p",[e._v("图中的文章见《"),r("saber-link",{attrs:{to:"/blog/2019/04/recent-changes-of-my-site"}},[e._v("总结下博客最近的调整")]),e._v("》。不过其实 "),r("code",{pre:!0},[e._v("prefers-color-scheme")]),e._v(" 只是帮助做到随系统自动变化而已，网站的深浅配色系统本身还是要开发者预先设计好。")],1),e._v(" "),r("hr",{staticClass:"footnotes-sep"}),e._v(" "),r("section",{staticClass:"footnotes"},[r("ol",{staticClass:"footnotes-list"},[r("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[r("p",[r("a",{attrs:{href:"https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://drafts.csswg.org/mediaqueries-5/#descdef-media-prefers-color-scheme")]),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])])])])])},[],!1,null,null,null);"function"==typeof o&&o(s);a.default=s.exports}}]);