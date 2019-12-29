(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{333:function(e,t,n){"use strict";n.r(t);var r=n(0),a=function(e){var t,n,r,a,i,p=(r=void 0,a="2013-11-28 23:45:00",i="其它伪静态规则",(t={}).type=n="post",t.internal=r,t.contentType="markdown",t.slug="typecho-url-rewrite-on-bae",t.content=r,t.createdAt=new Date(13856535e5),t.updatedAt=new Date(13856535e5),t.layout=n,t.title="Typecho在BAE上的urlRewrite伪静态化app.conf",t.date=a,t.updated=a,t.draft=!0,t.hidden=!0,t.comments=!1,t.markdownHeadings=[{text:i,slug:i,level:3}],t.excerpt="<p>这两天到处找运行在BAE上的typecho怎样设置URL-Rewrite地址重写，来设置博客伪静态。因为之前部署过WordPress，所以大概也知道要用到BAE的app.conf的了，而直接用原来WP的\napp.conf肯定不行，博猪又懒得学那啥BAE的rewrite规则。</p>\n",t.permalink="/blog/2013/11/typecho-url-rewrite-on-bae",t.assets={},t.attributes=t,t),s=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=p}].concat(s);["layout","transition"].forEach((function(t){var n=e.options.PageComponent;n&&(e.options[t]=n[t]),void 0===e.options[t]&&(e.options[t]=p[t])})),p.slug&&(e.options.name="page-wrapper-"+p.slug.replace(/[^0-9a-z\-]/gi,"-"))},i=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout-manager",[n("p",[e._v("这两天到处找运行在BAE上的typecho怎样设置URL-Rewrite地址重写，来设置博客伪静态。因为之前部署过WordPress，所以大概也知道要用到BAE的app.conf的了，而直接用原来WP的\napp.conf肯定不行，博猪又懒得学那啥BAE的rewrite规则。")]),e._v(" "),n("p",[e._v("后来找到了旧版的typecho on BAE，发现里面原来是带有app.conf文件的！真是喜出望外啊！！果断拿来引用！！效果很好！马上就能启用地址重写了！伪静态成功！Yeah~~ 附上app.conf的内容：")]),e._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"apacheconf"}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-apacheconf"}},[n("code",{pre:!0,attrs:{class:"language-apacheconf"}},[e._v("handlers:\n  - expire : .jpg modify 10 years\n  - expire : .swf modify 10 years\n  - expire : .png modify 10 years\n  - expire : .gif modify 10 years\n  - expire : .JPG modify 10 years\n  - expire : .ico modify 10 years\n  - url : /usr(.)\n    "),n("span",{pre:!0,attrs:{class:"token directive-inline property"}},[e._v("script")]),e._v(" : /usr"),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$1")]),e._v("\n  - url : /admin(.)\n    "),n("span",{pre:!0,attrs:{class:"token directive-inline property"}},[e._v("script")]),e._v(" : /admin"),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$1")]),e._v("\n  - url : /index.php(.)\n    "),n("span",{pre:!0,attrs:{class:"token directive-inline property"}},[e._v("script")]),e._v(" : /index.php\n  - url : /robots.txt\n    "),n("span",{pre:!0,attrs:{class:"token directive-inline property"}},[e._v("script")]),e._v(" : /robots.txt\n  - url : (.)\n    "),n("span",{pre:!0,attrs:{class:"token directive-inline property"}},[e._v("script")]),e._v(" : /index.php")])])]),n("h3",{attrs:{id:"其它伪静态规则"}},[e._v("其它伪静态规则")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Linux Apache")])])]),e._v(" "),n("p",[e._v("新建一个.htaccess文件，将以下代码复制到.htaccess文件里，上传到typecho的根目录。（注：若你的typecho不在网站的根目录，请自行修改RewriteRule路径。）")]),e._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[n("code",{pre:!0,attrs:{class:"language-text"}},[e._v("<IfModule mod_rewrite.c>\nRewriteEngine On\nRewriteBase /\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteRule ^(.*)$ /index.php/$1 [L]\n</IfModule>")])])]),n("ul",[n("li",[n("strong",[e._v("Linux Nginx")])])]),e._v(" "),n("p",[e._v("Nginx conf：以下代码保存为 "),n("code",{pre:!0},[e._v("typecho.conf")])]),e._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[n("code",{pre:!0,attrs:{class:"language-text"}},[e._v("location / {\nindex index.html index.php;\nif (-f $request_filename/index.html) {\nrewrite (.*) $1/index.html break;\n}\nif (-f $request_filename/index.php) {\nrewrite (.*) $1/index.php;\n}\nif (!-f $request_filename) {\nrewrite (.*) /index.php;\n}\n}")])])]),n("p",[e._v("PS：在SAE上运行Typecho的伪静态&常见问题可参考"),n("saber-link",{attrs:{to:"http://www.yovisun.com/sae-typecho-question-solution.html"}},[e._v("Yovi's Blog")])],1)])}),[],!1,null,null,null);"function"==typeof a&&a(i);t.default=i.exports}}]);