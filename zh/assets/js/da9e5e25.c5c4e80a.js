"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[6849],{8789:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var s=r(6070),l=r(5710),t=r(8967),i=r(7207),a=r(8382);const c={},o="@farmfe/plugin-strip",u={id:"plugins/official-plugins/strip",title:"@farmfe/plugin-strip",description:"\ud83c\udf63 \u4e00\u4e2aFarm Rust\u63d2\u4ef6\uff0c\u7528\u4e8e\u4ece\u4f60\u7684\u4ee3\u7801\u4e2d\u79fb\u9664debugger\u8bed\u53e5\u548c\u5982assert.equal\u3001console.log\u8fd9\u6837\u7684\u51fd\u6570\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugins/official-plugins/strip.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/strip",permalink:"/zh/docs/plugins/official-plugins/strip",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/strip.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/plugin-sass",permalink:"/zh/docs/plugins/official-plugins/sass"},next:{title:"@farmfe/plugin-dsv",permalink:"/zh/docs/plugins/official-plugins/dsv"}},d={},h=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"<code>include</code>",id:"include",level:3},{value:"<code>exclude</code>",id:"exclude",level:3},{value:"<code>debugger</code>",id:"debugger",level:3},{value:"<code>functions</code>",id:"functions",level:3},{value:"<code>labels</code>",id:"labels",level:3},{value:"<code>sourceMap</code>",id:"sourcemap",level:3}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"farmfeplugin-strip",children:"@farmfe/plugin-strip"}),"\n",(0,s.jsxs)(n.p,{children:["\ud83c\udf63 \u4e00\u4e2aFarm Rust\u63d2\u4ef6\uff0c\u7528\u4e8e\u4ece\u4f60\u7684\u4ee3\u7801\u4e2d\u79fb\u9664",(0,s.jsx)(n.code,{children:"debugger"}),"\u8bed\u53e5\u548c\u5982",(0,s.jsx)(n.code,{children:"assert.equal"}),"\u3001",(0,s.jsx)(n.code,{children:"console.log"}),"\u8fd9\u6837\u7684\u51fd\u6570\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8981\u6c42",children:"\u8981\u6c42"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e2a\u63d2\u4ef6\u9700\u8981\u4e00\u4e2a",(0,s.jsx)(n.a,{href:"https://github.com/nodejs/Release",children:"LTS"})," Node\u7248\u672c\uff08v18.0.0+\uff09\u548cFarm v1.0.0+\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"npm",label:"npm",children:(0,s.jsx)(t.A,{children:"npm install @farmfe/plugin-strip"})}),(0,s.jsx)(a.A,{value:"yarn",label:"yarn",children:(0,s.jsx)(t.A,{children:"yarn add @farmfe/plugin-strip"})}),(0,s.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.A,{children:"pnpm add @farmfe/plugin-strip"})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,s.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"farm.config.js"}),(0,s.jsx)(n.a,{href:"https://www.farmfe.org/docs/config/configuring-farm",children:"\u914d\u7f6e\u6587\u4ef6"}),"\u5e76\u5bfc\u5165\u63d2\u4ef6\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { defineConfig } from '@farmfe/core';\nimport strip from '@farmfe/plugin-strip';\n\nexport default defineConfig({\n  // ...\n  plugins: [\n    [\n      strip({\n        // \u63d2\u4ef6\u9009\u9879\n        functions:[ 'console.*', 'assert.*' ],\n        labels: ['unittest']\n      })\n    ]\n  ],\n  // ...\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9009\u9879",children:"\u9009\u9879"}),"\n",(0,s.jsx)(n.h3,{id:"include",children:(0,s.jsx)(n.code,{children:"include"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7c7b\u578b: ",(0,s.jsx)(n.code,{children:"String | RegExp | Array[...String|RegExp]"}),(0,s.jsx)("br",{}),"\n\u9ed8\u8ba4\u503c: ",(0,s.jsx)(n.code,{children:"['**/*.js']"}),(0,s.jsx)("br",{}),"\n\u793a\u4f8b: ",(0,s.jsx)(n.code,{children:"include: '**/*.(mjs|js)',"}),(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5b9a\u63d2\u4ef6\u5e94\u64cd\u4f5c\u7684\u6784\u5efa\u4e2d\u7684\u6587\u4ef6\u7684\u6a21\u5f0f\u6216\u6a21\u5f0f\u6570\u7ec4\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"exclude",children:(0,s.jsx)(n.code,{children:"exclude"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7c7b\u578b: ",(0,s.jsx)(n.code,{children:"String | RegExp | Array[...String|RegExp]"}),(0,s.jsx)("br",{}),"\n\u9ed8\u8ba4\u503c: ",(0,s.jsx)(n.code,{children:"[]"}),(0,s.jsx)("br",{}),"\n\u793a\u4f8b: ",(0,s.jsx)(n.code,{children:"exlude: 'tests/**/*',"}),(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5b9a\u63d2\u4ef6\u5e94_\u5ffd\u7565_\u7684\u6784\u5efa\u4e2d\u7684\u6587\u4ef6\u7684\u6a21\u5f0f\u6216\u6a21\u5f0f\u6570\u7ec4\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"debugger",children:(0,s.jsx)(n.code,{children:"debugger"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7c7b\u578b: ",(0,s.jsx)(n.code,{children:"Boolean"}),(0,s.jsx)("br",{}),"\n\u9ed8\u8ba4\u503c: ",(0,s.jsx)(n.code,{children:"true"}),(0,s.jsx)("br",{}),"\n\u793a\u4f8b: ",(0,s.jsx)(n.code,{children:"debugger: false,"}),(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4e3a",(0,s.jsx)(n.code,{children:"true"}),"\uff0c\u6307\u793a\u63d2\u4ef6\u79fb\u9664debugger\u8bed\u53e5\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"functions",children:(0,s.jsx)(n.code,{children:"functions"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7c7b\u578b: ",(0,s.jsx)(n.code,{children:"Array[...String]"}),(0,s.jsx)("br",{}),"\n\u9ed8\u8ba4\u503c: ",(0,s.jsx)(n.code,{children:"[ 'console.*', 'assert.*' ]"}),(0,s.jsx)("br",{}),"\n\u793a\u4f8b: ",(0,s.jsx)(n.code,{children:"functions: [ 'console.log', 'MyClass.Test' ],"}),(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5b9a\u63d2\u4ef6\u5c06\u76ee\u6807\u5b9a\u4f4d\u548c\u79fb\u9664\u7684\u51fd\u6570\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u6ce8\u610f\uff1a\u6307\u5b9a\u5728\u94fe\u7684\u5f00\u5934\u4f7f\u7528\u7684\u51fd\u6570\uff0c\u5982'a().b().c()'\uff0c\u5c06\u5bfc\u81f4'(void 0).b().c()'\uff0c\u8fd9\u5728\u8fd0\u884c\u65f6\u4f1a\u4ea7\u751f\u9519\u8bef\u3002"})}),"\n",(0,s.jsx)(n.h3,{id:"labels",children:(0,s.jsx)(n.code,{children:"labels"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7c7b\u578b: ",(0,s.jsx)(n.code,{children:"Array[...String]"}),(0,s.jsx)("br",{}),"\n\u9ed8\u8ba4\u503c: ",(0,s.jsx)(n.code,{children:"[]"}),(0,s.jsx)("br",{}),"\n\u793a\u4f8b: ",(0,s.jsx)(n.code,{children:"labels: ['unittest'],"}),(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(n.p,{children:["\u6307\u5b9a\u63d2\u4ef6\u5c06\u76ee\u6807\u5b9a\u4f4d\u548c\u79fb\u9664\u7684",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label",children:"\u5e26\u6807\u7b7e\u7684\u5757\u6216\u8bed\u53e5"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["\u6ce8\u610f\uff1a'",(0,s.jsx)(n.strong,{children:":"}),"'\u662f\u9690\u542b\u7684\uff0c\u4e0d\u5e94\u5728\u914d\u7f6e\u4e2d\u6307\u5b9a\u3002"]})}),"\n",(0,s.jsx)(n.h3,{id:"sourcemap",children:(0,s.jsx)(n.code,{children:"sourceMap"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7c7b\u578b: ",(0,s.jsx)(n.code,{children:"Boolean"}),(0,s.jsx)("br",{}),"\n\u9ed8\u8ba4\u503c: ",(0,s.jsx)(n.code,{children:"true"}),(0,s.jsx)("br",{}),"\n\u793a\u4f8b: ",(0,s.jsx)(n.code,{children:"sourceMap: false,"}),(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4e3a",(0,s.jsx)(n.code,{children:"true"}),"\uff0c\u6307\u793a\u63d2\u4ef6\u5728\u4ece\u6346\u7ed1\u5305\u4e2d\u79fb\u9664\u914d\u7f6e\u7684\u76ee\u6807\u540e\u76f8\u5e94\u5730\u66f4\u65b0\u6e90\u6620\u5c04\u3002"]})]})}function f(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8382:(e,n,r)=>{r.d(n,{A:()=>i});r(758);var s=r(3526);const l={tabItem:"tabItem_dhsV"};var t=r(6070);function i(e){let{children:n,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(l.tabItem,i),hidden:r,children:n})}},7207:(e,n,r)=>{r.d(n,{A:()=>w});var s=r(758),l=r(3526),t=r(7144),i=r(5557),a=r(2227),c=r(773),o=r(7626),u=r(8041);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:l}}=e;return{value:n,label:r,attributes:s,default:l}}))}(r);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const l=(0,i.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(l.location.search);n.set(t,e),l.replace({...l.location,search:n.toString()})}),[t,l])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:l}=e,t=h(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[o,d]=f({queryString:r,groupId:l}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,t]=(0,u.Dv)(r);return[l,(0,s.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:l}),b=(()=>{const e=o??x;return p({value:e,tabValues:t})?e:null})();(0,a.A)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),j(e)}),[d,j,t]),tabValues:t}}var j=r(5441);const b={tabList:"tabList_tOLG",tabItem:"tabItem_ZfBa"};var g=r(6070);function m(e){let{className:n,block:r,selectedValue:s,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),u=e=>{const n=e.currentTarget,r=c.indexOf(n),l=a[r].value;l!==s&&(o(n),i(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...t,className:(0,l.A)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:l}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,g.jsx)(m,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}}}]);