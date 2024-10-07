"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[4832],{7893:(e,t,a)=>{a.d(t,{A:()=>j});var n=a(758),s=a(3526),r=a(6776),i=a(9289),l=a(4840),o=a(3593),c=a(5557),d=a(9797);function m(e){const{pathname:t}=(0,c.zy)();return(0,n.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_yUhf",sidebarItemTitle:"sidebarItemTitle_XnrL",sidebarItemList:"sidebarItemList_g6kw",sidebarItem:"sidebarItem_Ouzz",sidebarItemLink:"sidebarItemLink_U6LU",sidebarItemLinkActive:"sidebarItemLinkActive_nl12"};var g=a(6070);function h(e){let{sidebar:t}=e;const a=m(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,s.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,s.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,s.A)(u.sidebarItemList,"clean-list"),children:a.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=a(8588);function f(e){let{sidebar:t}=e;const a=m(t.items);return(0,g.jsx)("ul",{className:"menu__list",children:a.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function x(e){return(0,g.jsx)(p.GX,{component:f,props:e})}function b(e){let{sidebar:t}=e;const a=(0,i.l)();return t?.items.length?"mobile"===a?(0,g.jsx)(x,{sidebar:t}):(0,g.jsx)(h,{sidebar:t}):null}function j(e){const{sidebar:t,toc:a,children:n,...i}=e,l=t&&t.items.length>0;return(0,g.jsx)(r.A,{...i,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(b,{sidebar:t}),(0,g.jsx)("main",{className:(0,s.A)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:n}),a&&(0,g.jsx)("div",{className:"col col--2",children:a})]})})})}},1433:(e,t,a)=>{a.d(t,{A:()=>M});a(758);var n=a(3526),s=a(6383),r=a(6070);function i(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var l=a(4840);const o={title:"title_P9vA"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,s.e)(),{permalink:c,title:d}=a,m=i?"h1":"h2";return(0,r.jsx)(m,{className:(0,n.A)(o.title,t),children:i?d:(0,r.jsx)(l.A,{to:c,children:d})})}var d=a(3593),m=a(7093),u=a(6486);const g={container:"container_p_cs"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,m.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function f(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function x(e){let{className:t}=e;const{metadata:a}=(0,s.e)(),{date:i,readingTime:l}=a,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,n.A)(g.container,"margin-vert--md",t),children:[(0,r.jsx)(p,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsx)(h,{readingTime:l})]})]});var c}function b(e){return e.href?(0,r.jsx)(l.A,{...e}):(0,r.jsx)(r.Fragment,{children:e.children})}function j(e){let{author:t,className:a}=e;const{name:s,title:i,url:l,imageURL:o,email:c}=t,d=l||c&&`mailto:${c}`||void 0;return(0,r.jsxs)("div",{className:(0,n.A)("avatar margin-bottom--sm",a),children:[o&&(0,r.jsx)(b,{href:d,className:"avatar__photo-link",children:(0,r.jsx)("img",{className:"avatar__photo",src:o,alt:s})}),s&&(0,r.jsxs)("div",{className:"avatar__intro",children:[(0,r.jsx)("div",{className:"avatar__name",children:(0,r.jsx)(b,{href:d,children:(0,r.jsx)("span",{children:s})})}),i&&(0,r.jsx)("small",{className:"avatar__subtitle",children:i})]})]})}const v={authorCol:"authorCol_rEv0",imageOnlyAuthorRow:"imageOnlyAuthorRow_eeIp",imageOnlyAuthorCol:"imageOnlyAuthorCol_giuQ"};function A(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,s.e)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t}));return(0,r.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",l?v.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,n.A)(!l&&"col col--6",l?v.imageOnlyAuthorCol:v.authorCol),children:(0,r.jsx)(j,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(x,{}),(0,r.jsx)(A,{})]})}var _=a(2402),k=a(3546);function P(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,s.e)();return(0,r.jsx)("div",{id:i?_.blogPostContainerID:void 0,className:(0,n.A)("markdown",a),children:(0,r.jsx)(k.A,{children:t})})}var w=a(5747),y=a(9733),L=a(2425);function T(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function I(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(T,{})})}function U(){const{metadata:e,isBlogPostPage:t}=(0,s.e)(),{tags:a,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,u=a.length>0;if(!(u||m||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,n.A)("row","margin-top--sm",w.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(L.A,{tags:a})})}),e&&(0,r.jsx)(y.A,{className:(0,n.A)("margin-top--sm",w.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,n.A)("col",{"col--9":m}),children:(0,r.jsx)(L.A,{tags:a})}),m&&(0,r.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":u}),children:(0,r.jsx)(I,{blogPostTitle:i,to:e.permalink})})]})}function M(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,s.e)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,n.A)(l,a),children:[(0,r.jsx)(N,{}),(0,r.jsx)(P,{children:t}),(0,r.jsx)(U,{})]})}},5585:(e,t,a)=>{a.d(t,{A:()=>i});a(758);var n=a(3526),s=a(4840),r=a(6070);function i(e){const{permalink:t,title:a,subLabel:i,isNext:l}=e;return(0,r.jsxs)(s.A,{className:(0,n.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},2425:(e,t,a)=>{a.d(t,{A:()=>d});a(758);var n=a(3526),s=a(3593),r=a(4840);const i={tag:"tag__vwl",tagRegular:"tagRegular_nDH0",tagWithCount:"tagWithCount_f5ct"};var l=a(6070);function o(e){let{permalink:t,label:a,count:s,description:o}=e;return(0,l.jsxs)(r.A,{href:t,title:o,className:(0,n.A)(i.tag,s?i.tagWithCount:i.tagRegular),children:[a,s&&(0,l.jsx)("span",{children:s})]})}const c={tags:"tags_LuOv",tag:"tag_eWj_"};function d(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,n.A)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:c.tag,children:(0,l.jsx)(o,{...e})},e.permalink)))})]})}},6383:(e,t,a)=>{a.d(t,{e:()=>o,i:()=>l});var n=a(758),s=a(1288),r=a(6070);const i=n.createContext(null);function l(e){let{children:t,content:a,isBlogPostPage:s=!1}=e;const l=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:s});return(0,r.jsx)(i.Provider,{value:l,children:t})}function o(){const e=(0,n.useContext)(i);if(null===e)throw new s.dV("BlogPostProvider");return e}},5257:(e,t,a)=>{a.d(t,{k:()=>d,J:()=>m});var n=a(6139),s=a(6544),r=a(209);var i=a(6383);const l=e=>new Date(e).toISOString();function o(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function c(e,t,a){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function d(e){const{siteConfig:t}=(0,s.A)(),{withBaseUrl:a}=(0,n.hH)(),{metadata:{blogDescription:r,blogTitle:i,permalink:d}}=e,m=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:i,description:r,blogPost:e.items.map((e=>function(e,t,a){const{assets:n,frontMatter:s,metadata:r}=e,{date:i,title:d,description:m,lastUpdatedAt:u}=r,g=n.image??s.image,h=s.keywords??[],p=`${t.url}${r.permalink}`,f=u?l(u):void 0;return{"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:d,name:d,description:m,datePublished:i,...f?{dateModified:f}:{},...o(r.authors),...c(g,a,d),...h?{keywords:h}:{}}}(e.content,t,a)))}}function m(){const e=function(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:a}=(0,i.e)(),{siteConfig:d}=(0,s.A)(),{withBaseUrl:m}=(0,n.hH)(),{date:u,title:g,description:h,frontMatter:p,lastUpdatedAt:f}=a,x=t.image??p.image,b=p.keywords??[],j=f?l(f):void 0,v=`${d.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:g,name:g,description:h,datePublished:u,...j?{dateModified:j}:{},...o(a.authors),...c(x,m,g),...b?{keywords:b}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}},7093:(e,t,a)=>{a.d(t,{W:()=>c});var n=a(758),s=a(6544);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=a.select(t),r=a.pluralForms.indexOf(s);return n[Math.min(r,n.length-1)]}(a,t,e)}}}}]);