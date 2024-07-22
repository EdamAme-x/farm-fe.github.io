"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[2109],{8224:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var a=r(6070),t=r(5710),l=r(8967),s=r(7207),i=r(8382);const u={},o="@farmfe/plugin-dsv",c={id:"plugins/official-plugins/dsv",title:"@farmfe/plugin-dsv",description:"\ud83c\udf63 \u4e00\u4e2aFarm\u63d2\u4ef6\uff0c\u7528\u4e8e\u5c06.csv\u548c.tsv\u6587\u4ef6\u8f6c\u6362\u4e3aJavaScript\u6a21\u5757\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugins/official-plugins/dsv.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/dsv",permalink:"/zh/docs/plugins/official-plugins/dsv",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/dsv.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/plugin-strip",permalink:"/zh/docs/plugins/official-plugins/strip"},next:{title:"@farmfe/plugin-yaml",permalink:"/zh/docs/plugins/official-plugins/yaml"}},d={},p=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u5b9e\u9645\u793a\u4f8b",id:"\u5b9e\u9645\u793a\u4f8b",level:2}];function f(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"farmfeplugin-dsv",children:"@farmfe/plugin-dsv"}),"\n",(0,a.jsxs)(n.p,{children:["\ud83c\udf63 \u4e00\u4e2aFarm\u63d2\u4ef6\uff0c\u7528\u4e8e\u5c06",(0,a.jsx)(n.code,{children:".csv"}),"\u548c",(0,a.jsx)(n.code,{children:".tsv"}),"\u6587\u4ef6\u8f6c\u6362\u4e3aJavaScript\u6a21\u5757\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u8981\u6c42",children:"\u8981\u6c42"}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u4e2a\u63d2\u4ef6\u9700\u8981\u4e00\u4e2a",(0,a.jsx)(n.a,{href:"https://github.com/nodejs/Release",children:"LTS"}),"\u7248\u672c\u7684Node\uff08v18.0.0+\uff09\u548cFarm v1.0.0+\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"npm",label:"npm",children:(0,a.jsx)(l.A,{children:"npm install @farmfe/plugin-dsv"})}),(0,a.jsx)(i.A,{value:"yarn",label:"yarn",children:(0,a.jsx)(l.A,{children:"yarn add @farmfe/plugin-dsv"})}),(0,a.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(l.A,{children:"pnpm add @farmfe/plugin-dsv"})})]}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,a.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a",(0,a.jsx)(n.code,{children:"farm.config.js"}),(0,a.jsx)(n.a,{href:"https://www.farmfe.org/docs/config/configuring-farm",children:"\u914d\u7f6e\u6587\u4ef6"}),"\u5e76\u5bfc\u5165\u63d2\u4ef6\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { defineConfig } from '@farmfe/core';\nimport dsv from '@farmfe/plugin-dsv';\n\nexport default defineConfig({\n  plugins: [\n    [\n      dsv()\n    ]\n  ],\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5b9e\u9645\u793a\u4f8b",children:"\u5b9e\u9645\u793a\u4f8b"}),"\n",(0,a.jsx)(n.p,{children:"\u5047\u8bbe\u4f60\u6709\u4e00\u4e2a\u5305\u542b\u4e00\u4e9b\u5173\u4e8e\u7f8e\u5473\u6c34\u679c\u4fe1\u606f\u7684CSV\uff08\u6216TSV\uff09\u6587\u4ef6\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csv",children:"type,count\napples,7\npears,4\nbananas,5\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5e76\u4e14\u5047\u8bbe\u4f60\u60f3\u5728\u4ee3\u7801\u7684\u67d0\u4e2a\u90e8\u5206\u5c06\u8be5CSV\u6587\u4ef6\u4f5c\u4e3a",(0,a.jsx)(n.code,{children:"Array"}),"\u5bfc\u5165\u3002\u6dfb\u52a0\u63d2\u4ef6\u4e4b\u540e\uff08\u5982\u4e0a\u6240\u793a\uff09\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5",(0,a.jsx)(n.code,{children:"import"}),"\uff08\u6216",(0,a.jsx)(n.code,{children:"require"}),"\uff09CSV\u6587\u4ef6\u3002\u5bfc\u5165\u5c06\u63d0\u4f9b\u4e00\u4e2a",(0,a.jsx)(n.code,{children:"Array"}),"\uff0c\u5305\u542b\u4ee3\u8868CSV\u6587\u4ef6\u884c\u7684",(0,a.jsx)(n.code,{children:"Objects"}),"\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import fruit from './fruit.csv';\n\nconsole.log(fruit);\n// [\n//   { type: 'apples', count: '7' },\n//   { type: 'pears', count: '4' },\n//   { type: 'bananas', count: '5' }\n// ]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},8382:(e,n,r)=>{r.d(n,{A:()=>s});r(758);var a=r(3526);const t={tabItem:"tabItem_dhsV"};var l=r(6070);function s(e){let{children:n,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,s),hidden:r,children:n})}},7207:(e,n,r)=>{r.d(n,{A:()=>w});var a=r(758),t=r(3526),l=r(7144),s=r(5557),i=r(2227),u=r(773),o=r(7626),c=r(8041);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function f(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,l=p(e),[s,u]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[o,d]=h({queryString:r,groupId:t}),[m,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,c.Dv)(r);return[t,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),g=(()=>{const e=o??m;return f({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{g&&u(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=r(5441);const g={tabList:"tabList_tOLG",tabItem:"tabItem_ZfBa"};var b=r(6070);function x(e){let{className:n,block:r,selectedValue:a,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),c=e=>{const n=e.currentTarget,r=u.indexOf(n),t=i[r].value;t!==a&&(o(n),s(t))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...l,className:(0,t.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:t}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...n,...e}),(0,b.jsx)(j,{...n,...e})]})}function w(e){const n=(0,v.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}}}]);