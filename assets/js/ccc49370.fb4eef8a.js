"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[6103],{78665:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(63366),l=a(67294),r=a(86010),i=a(77019),o=a(39960),s="sidebar_q+wC",c="sidebarItemTitle_9G5K",m="sidebarItemList_6T4b",u="sidebarItem_cjdF",d="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs",v=a(95999);function p(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var h=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,h),c=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},c&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},39360:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(67294),l=a(41217),r=a(78665),i=a(41916),o=a(95999),s=a(39960);var c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(53810),u=a(51575);var d=function(e){var t,a=e.content,o=e.sidebar,s=a.frontMatter,d=a.assets,g=a.metadata,v=g.title,p=g.description,h=g.nextItem,E=g.prevItem,f=g.date,b=g.tags,Z=g.authors,N=s.hide_table_of_contents,_=s.keywords,k=s.toc_min_heading_level,y=s.toc_max_heading_level,T=null!=(t=d.image)?t:s.image;return n.createElement(r.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:o,toc:!N&&a.toc&&a.toc.length>0?n.createElement(u.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:y}):void 0},n.createElement(l.Z,{title:v,description:p,keywords:_,image:T},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:f}),Z.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:Z.map((function(e){return e.url})).filter(Boolean).join(",")}),b.length>0&&n.createElement("meta",{property:"article:tag",content:b.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:s,assets:d,metadata:g,isBlogPostPage:!0},n.createElement(a,null)),(h||E)&&n.createElement(c,{nextItem:h,prevItem:E}))}},86753:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(67294),l=a(95999),r=a(87462),i=a(63366),o=a(86010),s="iconEdit_mS5F",c=["className"];var m=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(53810);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(m,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},39649:function(e,t,a){a.d(t,{N:function(){return d},Z:function(){return g}});var n=a(63366),l=a(87462),r=a(67294),i=a(86010),o=a(95999),s=a(53810),c="anchorWithStickyNavbar_y2LR",m="anchorWithHideOnScrollNavbar_3ly5",u=["id"],d=function(e){var t=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))},g=function(e){return"h1"===e?d:(t=e,function(e){var a,d=e.id,g=(0,n.Z)(e,u),v=(0,s.LU)().navbar.hideOnScroll;return d?r.createElement(t,(0,l.Z)({},g,{className:(0,i.Z)("anchor",(a={},a[m]=v,a[c]=!v,a)),id:d}),g.children,r.createElement("a",{className:"hash-link",href:"#"+d,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,g)});var t}},73491:function(e,t,a){var n=a(87462),l=a(63366),r=a(67294),i=a(12859),o=a(39960),s=a(19055),c=a(39649),m=a(7488),u=["mdxType","originalType"];var d={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var n=e.props,i=(n.mdxType,n.originalType,(0,l.Z)(n,u));return r.createElement(e.props.originalType,i)}return e}(e)}));return r.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(s.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(o.Z,e)},pre:function(e){var t,a=e.children;return(0,r.isValidElement)(a)&&(0,r.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?a.props.children:r.createElement(s.Z,(0,r.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=r.createElement(r.Fragment,null,t.filter((function(e){return e!==a})));return r.createElement(m.Z,(0,n.Z)({},e,{summary:a}),l)},h1:(0,c.Z)("h1"),h2:(0,c.Z)("h2"),h3:(0,c.Z)("h3"),h4:(0,c.Z)("h4"),h5:(0,c.Z)("h5"),h6:(0,c.Z)("h6")};t.Z=d},51575:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),l=a(63366),r=a(67294),i=a(86010),o=a(25002),s="tableOfContents_vrFS",c=["className"];var m=function(e){var t=e.className,a=(0,l.Z)(e,c);return r.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},r.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},25002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(87462),l=a(63366),r=a(67294),i=a(53810),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,g=void 0===d?void 0:d,v=e.minHeadingLevel,p=e.maxHeadingLevel,h=(0,l.Z)(e,o),E=(0,i.LU)(),f=null!=v?v:E.tableOfContents.minHeadingLevel,b=null!=p?p:E.tableOfContents.maxHeadingLevel,Z=(0,i.DA)({toc:t,minHeadingLevel:f,maxHeadingLevel:b}),N=(0,r.useMemo)((function(){if(u&&g)return{linkClassName:u,linkActiveClassName:g,minHeadingLevel:f,maxHeadingLevel:b}}),[u,g,f,b]);return(0,i.Si)(N),r.createElement(s,(0,n.Z)({toc:Z,className:c,linkClassName:u},h))}},8727:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(67294),l=a(86010),r=a(95999),i=a(39960),o="tag_WK-t",s="tagRegular_LXbV",c="tagWithCount_S5Zl";var m=function(e){var t,a=e.permalink,r=e.name,m=e.count;return n.createElement(i.Z,{href:a,className:(0,l.Z)(o,(t={},t[s]=!m,t[c]=m,t))},r,m&&n.createElement("span",null,m))},u="tags_NBRY",d="tag_F03v";function g(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(u,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:d},n.createElement(m,{name:t,permalink:a}))}))))}},82593:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),l=a(46616),r=a(87385),i=a(16573),o=a(1020),s=a(53597),c=a(37332),m=a(75341),u=a(70431),d=a(38168),g=a(44276),v="shareButtons_1MQy",p=function(e){var t=e.title,a=e.hashtags,p=e.style,h=window.location.href;return n.createElement("div",{className:v,style:p},n.createElement(l.Z,{url:h,title:t,hashtags:a},n.createElement(r.Z,{round:!0,size:32})),n.createElement(i.Z,{url:h,title:t,hashtag:null==a?void 0:a[0]},n.createElement(o.Z,{round:!0,size:32})),n.createElement(s.Z,{url:h,title:t},n.createElement(c.Z,{round:!0,size:32})),n.createElement(m.Z,{url:h,title:t},n.createElement(u.Z,{round:!0,size:32})),n.createElement(d.Z,{url:h,title:t},n.createElement(g.Z,{round:!0,size:32})))}},41916:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(67294),l=a(86010),r=a(3905),i=a(95999),o=a(39960),s=a(44996),c=a(53810),m=a(73491),u=a(86753),d="blogPostTitle_RC3s",g="blogPostData_A2Le",v="blogPostDetailsFull_2lop",p=a(8727),h="image_9q7L";var E=function(e){var t=e.author,a=t.name,l=t.title,r=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:r},n.createElement("img",{className:h,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:r,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},f="authorCol_8c0z";function b(e){var t=e.authors,a=e.assets;return 0===t.length?null:n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var r;return n.createElement("div",{className:(0,l.Z)("col col--6",f),key:t},n.createElement(E,{author:Object.assign({},e,{imageURL:null!=(r=a.authorsImageUrls[t])?r:e.imageURL})}))})))}var Z=a(91262),N=a(82593);var _=function(e){var t,a,h,E,f=(h=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return h(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,s.C)().withBaseUrl,k=e.children,y=e.frontMatter,T=e.assets,L=e.metadata,P=e.truncated,C=e.isBlogPostPage,w=void 0!==C&&C,x=L.date,I=L.formattedDate,S=L.permalink,A=L.tags,H=L.readingTime,M=L.title,B=L.editUrl,O=L.authors,R=null!=(t=T.image)?t:y.image,U=!w&&P,z=A.length>0;return n.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=w?"h1":"h2",n.createElement("header",null,n.createElement(Z.Z,null,(function(){return w?n.createElement(N.Z,{title:M+" | OSSInsight",hashtags:y.keywords}):void 0})),n.createElement(E,{className:d,itemProp:"headline"},w?M:n.createElement(o.Z,{itemProp:"url",to:S},M)),n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:x,itemProp:"datePublished"},I),void 0!==H&&n.createElement(n.Fragment,null," \xb7 ",f(H))),n.createElement(b,{authors:O,assets:T}))),R&&n.createElement("meta",{itemProp:"image",content:_(R,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(r.Zo,{components:m.Z},k)),n.createElement(Z.Z,null,(function(){return w?n.createElement(n.Fragment,null,n.createElement("br",null),n.createElement(N.Z,{title:M+" | OSSInsight",hashtags:y.keywords})):void 0})),(z||P)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[v]=w,a))},z&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":U})},n.createElement(p.Z,{tags:A})),w&&B&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:B})),U&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":z})},n.createElement(o.Z,{to:L.permalink,"aria-label":"Read more about "+M},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}}}]);