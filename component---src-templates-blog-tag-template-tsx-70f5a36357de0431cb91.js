(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9SWC":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var n=a("q1tI"),i=a.n(n),r=a("BBkP"),o=a("CMDK"),l=a("Br3Z");t.default=function(e){var t=e.pageContext.tag,a=e.data.allMarkdownRemark;return i.a.createElement(o.a,null,i.a.createElement(r.a,{title:"Blog Articles By Tag: "+t}),i.a.createElement(l.a,{data:a}))};var d="3147908283"},Br3Z:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a("9eSz"),i=a.n(n),r=a("q1tI"),o=a.n(r),l=a("vOnD"),d=a("Hf4c"),c=a("SHYe"),p=a("lWB3"),g=a("ZGSP"),m=(a("y7hu"),a("Wbzz")),s=function(e){for(var t=e.currentPage,a=e.linkPrefix,n=e.totalPages,i=[],r=0;r<n;r++){var l=r+1,d=1===l?"":"/"+l;i.push({page:l,link:a+d})}return o.a.createElement(f,null,i.map((function(e){return o.a.createElement(h,{key:"page-"+e.page,className:e.page===t?"active":void 0},o.a.createElement(u,{to:e.link},e.page))})))},f=l.b.ol.withConfig({displayName:"pagination__Container",componentId:"ws4qeo-0"})(["margin:20px 0;padding:0;list-style-type:none;"]),h=l.b.li.withConfig({displayName:"pagination__Page",componentId:"ws4qeo-1"})(["display:inline-block;margin:0 5px;border-radius:5px;padding:0;background-color:#f40010;&.active,&:hover{background-color:#b7020a;}"]),u=Object(l.b)(m.Link).withConfig({displayName:"pagination__PageLink",componentId:"ws4qeo-2"})(["display:flex;align-items:center;justify-content:center;width:30px;height:30px;line-height:30px;color:#fff;"]),x=function(e){var t=e.currentPage,a=e.data.edges,n=e.totalPages;return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null,a.map((function(e){var t,a,n,r=e.node,l=(null==r||null===(t=r.frontmatter)||void 0===t?void 0:t.tags)?r.frontmatter.tags.filter((function(e){return e&&e.length>0})):[],m=null==r||null===(a=r.frontmatter.featuredImage)||void 0===a||null===(n=a.childImageSharp)||void 0===n?void 0:n.fluid;return o.a.createElement(y,{key:"article-"+r.id},o.a.createElement(g.a,{to:r.frontmatter.path},m&&o.a.createElement(i.a,{fluid:m}),o.a.createElement(d.d,null,r.frontmatter.title)),o.a.createElement(c.a,{data:r}),o.a.createElement(p.a,{tags:l}))}))),t&&n&&o.a.createElement(s,{currentPage:t,linkPrefix:"/blog",totalPages:n}))},b=l.b.ul.withConfig({displayName:"blog-articles__Container",componentId:"mhnhff-0"})(["display:flex;flex:0 0 auto;flex-direction:column;margin:0;width:100%;max-width:800px;list-style-type:none;"]),y=l.b.li.withConfig({displayName:"blog-articles__Article",componentId:"mhnhff-1"})(["margin-bottom:15px;@media only screen and (min-width:800px){border:1px solid #ccc;}"])},Hf4c:function(e,t,a){"use strict";a.d(t,"e",(function(){return i})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return d}));var n=a("vOnD"),i=n.b.div.withConfig({displayName:"article-elements__ArticleWrapper",componentId:"sc-17wo9z6-0"})(["display:flex;flex:1 1 auto;flex-direction:column;"]),r=n.b.article.withConfig({displayName:"article-elements__Article",componentId:"sc-17wo9z6-1"})(["display:flex;flex:1 1 auto;flex-direction:column;margin-bottom:40px;padding-bottom:20px;@media only screen and (min-width:800px){border:1px solid #ccc;border-top:0 none;}"]),o=n.b.header.withConfig({displayName:"article-elements__ArticleHeader",componentId:"sc-17wo9z6-2"})([""]),l=n.b.h1.withConfig({displayName:"article-elements__ArticleTitle",componentId:"sc-17wo9z6-3"})(["margin:20px 20px 10px;font-size:2em;@media only screen and (min-width:800px){margin:20px 50px 10px;}"]),d=n.b.div.withConfig({displayName:"article-elements__ArticleContent",componentId:"sc-17wo9z6-4"})(["> *{padding-right:20px;padding-left:20px;}> h1 > a.anchor.before,> h2 > a.anchor.before,> h3 > a.anchor.before,> h4 > a.anchor.before,> h5 > a.anchor.before,> h6 > a.anchor.before{padding-right:4px;transform:translateX(0px);}> blockquote{padding:30px 20px;}> table{th:first-child,td:first-child{padding-left:20px;}th:last-child,td:last-child{padding-right:20px;}}> .gatsby-highlight{padding-right:0;padding-left:0;> pre{padding:30px 20px;}}@media only screen and (min-width:800px){> *{padding-right:50px;padding-left:50px;}> h1 > a.anchor.before,> h2 > a.anchor.before,> h3 > a.anchor.before,> h4 > a.anchor.before,> h5 > a.anchor.before,> h6 > a.anchor.before{transform:translateX(30px);}> blockquote{padding:30px 50px;}> table{th:first-child,td:first-child{padding-left:50px;}th:last-child,td:last-child{padding-right:50px;}}> .gatsby-highlight{> pre{padding-right:50px;padding-left:50px;}}}"])},SHYe:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n),r=a("vOnD"),o=a("ZGSP"),l=function(e){var t=e.data,a=t.fields,n=t.frontmatter;return i.a.createElement(d,null,i.a.createElement(c,{to:n.authorUrl},i.a.createElement(p,{src:n.authorImageUrl}),n.author)," ","・ ",n.date," ・ ",a.readingTime.text)},d=r.b.div.withConfig({displayName:"blog-article-metadata__Metadata",componentId:"sc-1g6yg7a-0"})(["display:flex;flex-direction:row;align-items:center;margin:0 20px 20px;font-size:0.778em;@media only screen and (min-width:800px){margin:0 50px 20px;}"]),c=Object(r.b)(o.a).withConfig({displayName:"blog-article-metadata__AuthorLink",componentId:"sc-1g6yg7a-1"})(["display:flex;flex:0 0 auto;flex-direction:row;align-items:center;color:#666;"]),p=r.b.img.withConfig({displayName:"blog-article-metadata__AuthorImage",componentId:"sc-1g6yg7a-2"})(["flex:0 0 auto;margin-right:0.5em;border-radius:15px;width:30px;"])},lWB3:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n),r=a("vOnD"),o=a("ZGSP"),l=function(e){var t=e.tags;return i.a.createElement(i.a.Fragment,null,t.length>0&&i.a.createElement(d,null,t.map((function(e){return i.a.createElement(c,{key:e},i.a.createElement(p,{to:"/blog/tags/"+e},e))}))))},d=r.b.ul.withConfig({displayName:"blog-article-tags__Tags",componentId:"sc-1hloirr-0"})(["margin:0 20px 20px;list-style-type:none;@media only screen and (min-width:800px){margin:0 50px 20px;}"]),c=r.b.li.withConfig({displayName:"blog-article-tags__Tag",componentId:"sc-1hloirr-1"})(["display:inline-block;margin:0 5px 5px 0;border-radius:4px;padding:0;background-color:#f40010;font-size:0.722em;letter-spacing:0.05em;color:#fff;"]),p=Object(r.b)(o.a).withConfig({displayName:"blog-article-tags__TagLink",componentId:"sc-1hloirr-2"})(["display:block;padding:5px 15px;color:#fff;"])}}]);
//# sourceMappingURL=component---src-templates-blog-tag-template-tsx-70f5a36357de0431cb91.js.map