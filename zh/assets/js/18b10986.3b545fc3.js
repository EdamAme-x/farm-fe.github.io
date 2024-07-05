"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[8420],{9393:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var l=r(6070),a=r(5710),t=r(2802),i=r(4816),u=r(451);const s={},o="@farmfe/plugin-yaml",c={id:"plugins/official-plugins/yaml",title:"@farmfe/plugin-yaml",description:"\u53d7 @rollup/plugin-yaml \u542f\u53d1",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugins/official-plugins/yaml.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/yaml",permalink:"/zh/docs/plugins/official-plugins/yaml",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/yaml.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/plugin-dsv",permalink:"/zh/docs/plugins/official-plugins/dsv"},next:{title:"@farmfe/plugin-virtual",permalink:"/zh/docs/plugins/official-plugins/virtual"}},d={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}];function f(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"farmfeplugin-yaml",children:"@farmfe/plugin-yaml"}),"\n",(0,l.jsxs)(n.p,{children:["\u53d7 ",(0,l.jsx)(n.a,{href:"https://www.npmjs.com/package/@rollup/plugin-yaml",children:"@rollup/plugin-yaml"})," \u542f\u53d1"]}),"\n",(0,l.jsx)(n.p,{children:"\ud83c\udf63 \u4e00\u4e2aFarm\u63d2\u4ef6\uff0c\u7528\u4e8e\u5c06YAML\u6587\u4ef6\u8f6c\u6362\u4e3aES6\u6a21\u5757\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,l.jsxs)(i.A,{children:[(0,l.jsx)(u.A,{value:"npm",label:"npm",children:(0,l.jsx)(t.A,{children:"npm install @farmfe/plugin-yaml"})}),(0,l.jsx)(u.A,{value:"yarn",label:"yarn",children:(0,l.jsx)(t.A,{children:"yarn add @farmfe/plugin-yaml"})}),(0,l.jsx)(u.A,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(t.A,{children:"pnpm add @farmfe/plugin-yaml"})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,l.jsx)(n.p,{children:"farm.config.ts"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  plugins: [\n    [\n      '@farmfe/plugin-yaml',\n      {\n        documentMode: 'single' | 'multi', // \u9ed8\u8ba4 single\n        include: Regex, // \u9ed8\u8ba4 None\n        exclude: Regex, // \u9ed8\u8ba4 None\n      },\n    ],\n  ],\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"include"})," \u6216 ",(0,l.jsx)(n.code,{children:"exclude"})," \u4f7f\u7528\u7684\u662f\u6b63\u5219\u8868\u8fbe\u5f0f\u800c\u4e0d\u662fglob\u3002\u4f8b\u5982 ",(0,l.jsx)(n.code,{children:"**/01.yaml"})," \u662f\u4e0d\u5408\u6cd5\u7684\u3002\u6b63\u786e\u7684\u8868\u8fbe\u65b9\u5f0f\u7c7b\u4f3c\u4e8e ",(0,l.jsx)(n.code,{children:'".*\\\\/01.yaml"'}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8fd9\u4e2a\u63d2\u4ef6\u5141\u8bb8\u4f60\u5728Farm\u9879\u76ee\u4e2d\u76f4\u63a5\u5bfc\u5165YAML\u6587\u4ef6\uff0c\u5e76\u5c06\u5b83\u4eec\u8f6c\u6362\u6210ES6\u6a21\u5757\u3002",(0,l.jsx)(n.code,{children:"documentMode"})," \u9009\u9879\u5141\u8bb8\u4f60\u6307\u5b9a\u5904\u7406\u5355\u4e2a\u6587\u6863\u7684YAML\u6587\u4ef6\uff08",(0,l.jsx)(n.code,{children:"single"}),"\uff09\u6216\u5305\u542b\u591a\u4e2a\u6587\u6863\u7684YAML\u6587\u4ef6\uff08",(0,l.jsx)(n.code,{children:"multi"}),"\uff09\u3002",(0,l.jsx)(n.code,{children:"include"})," \u548c ",(0,l.jsx)(n.code,{children:"exclude"})," \u9009\u9879\u8ba9\u4f60\u53ef\u4ee5\u66f4\u7ec6\u81f4\u5730\u63a7\u5236\u54ea\u4e9bYAML\u6587\u4ef6\u5e94\u8be5\u88ab\u63d2\u4ef6\u5904\u7406\uff0c\u901a\u8fc7\u6307\u5b9a\u5339\u914d\u7279\u5b9a\u683c\u5f0f\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u8fd9\u79cd\u7075\u6d3b\u6027\u8ba9\u4f60\u80fd\u591f\u5728Farm\u9879\u76ee\u4e2d\u8f7b\u677e\u5730\u5904\u7406\u548c\u5229\u7528YAML\u6570\u636e\u3002"]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(f,{...e})}):f(e)}},451:(e,n,r)=>{r.d(n,{A:()=>i});r(758);var l=r(3526);const a={tabItem:"tabItem_IyuO"};var t=r(6070);function i(e){let{children:n,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.A)(a.tabItem,i),hidden:r,children:n})}},4816:(e,n,r)=>{r.d(n,{A:()=>A});var l=r(758),a=r(3526),t=r(2692),i=r(5557),u=r(2223),s=r(7857),o=r(1966),c=r(1534);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:l,default:a}}=e;return{value:n,label:r,attributes:l,default:a}}))}(r);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function f(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,s.aZ)(t),(0,l.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(a.location.search);n.set(t,e),a.replace({...a.location,search:n.toString()})}),[t,a])]}function h(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,t=p(e),[i,s]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:t}))),[o,d]=m({queryString:r,groupId:a}),[h,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,t]=(0,c.Dv)(r);return[a,(0,l.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:a}),b=(()=>{const e=o??h;return f({value:e,tabValues:t})?e:null})();(0,u.A)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!f({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,t]),tabValues:t}}var g=r(589);const b={tabList:"tabList_Q9tq",tabItem:"tabItem_c7GU"};var v=r(6070);function x(e){let{className:n,block:r,selectedValue:l,selectValue:i,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),c=e=>{const n=e.currentTarget,r=s.indexOf(n),a=u[r].value;a!==l&&(o(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;n=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;n=s[r]??s[s.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:u.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...t,className:(0,a.A)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":l===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:a}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=h(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function A(e){const n=(0,g.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}}}]);