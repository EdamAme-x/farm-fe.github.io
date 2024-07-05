"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[8893],{7134:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=i(6070),r=i(5710);const t={},l="\u6982\u89c8",o={id:"plugins/writing-plugins/overview",title:"\u6982\u89c8",description:"Farm \u91c7\u7528\u5b8c\u5168\u63d2\u4ef6\u5316\u7684\u5f62\u5f0f\uff0c\u63d0\u4f9b\u4e86\u591a\u79cd\u7c7b\u578b\u7684\u63d2\u4ef6\u6765\u5e72\u9884 Farm \u7684\u51e0\u4e4e\u6240\u6709\u884c\u4e3a\uff0cFarm \u652f\u6301\u7684\u4e3b\u8981\u63d2\u4ef6\u7c7b\u578b\u5206\u4e3a\u4ee5\u4e0b\u51e0\u7c7b\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.x/plugins/writing-plugins/overview.md",sourceDirName:"plugins/writing-plugins",slug:"/plugins/writing-plugins/overview",permalink:"/zh/docs/0.x/plugins/writing-plugins/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/plugins/writing-plugins/overview.md",tags:[],version:"0.x",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"\u793e\u533a\u63d2\u4ef6",permalink:"/zh/docs/0.x/plugins/community-plugins"},next:{title:"Rust Plugins",permalink:"/zh/docs/0.x/plugins/writing-plugins/rust-plugin"}},u={},c=[];function a(n){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u6982\u89c8",children:"\u6982\u89c8"}),"\n",(0,s.jsx)(e.p,{children:"Farm \u91c7\u7528\u5b8c\u5168\u63d2\u4ef6\u5316\u7684\u5f62\u5f0f\uff0c\u63d0\u4f9b\u4e86\u591a\u79cd\u7c7b\u578b\u7684\u63d2\u4ef6\u6765\u5e72\u9884 Farm \u7684\u51e0\u4e4e\u6240\u6709\u884c\u4e3a\uff0cFarm \u652f\u6301\u7684\u4e3b\u8981\u63d2\u4ef6\u7c7b\u578b\u5206\u4e3a\u4ee5\u4e0b\u51e0\u7c7b\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u7f16\u8bd1\u63d2\u4ef6"}),"\uff1a\u5e72\u9884\u3001\u589e\u5f3a Farm \u7684\u7f16\u8bd1\u80fd\u529b\uff0c\u652f\u6301\u4f7f\u7528 Rust\uff08\u63a8\u8350\uff09\u4ee5\u53ca Js \u7f16\u5199\u63d2\u4ef6"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u8fd0\u884c\u65f6\u63d2\u4ef6"}),"\uff1a\u5e72\u9884\u3001\u589e\u5f3a Farm \u7684\u8fd0\u884c\u65f6\u80fd\u529b\uff0c\u4f7f\u7528 Js \u7f16\u5199"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Dev Server \u63d2\u4ef6"}),"\uff1a\u5e72\u9884\u3001\u589e\u5f3a Farm \u7684 Dev Server\uff0c\u4f8b\u5982\u6302\u8f7d\u66f4\u591a\u53d8\u91cf\uff0c\u6ce8\u518c middleware \u7b49"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["To use a Rust plugin, configuring ",(0,s.jsx)(e.code,{children:"plugins"})," in ",(0,s.jsx)(e.code,{children:"farm.config.ts"}),"."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import { defineFarmConfig } from '@farmfe/core/dist/config';\n\ndefineFarmConfig({\n  // ...\n  plugins: [\n    { /*..*/ }, // Js plugin, a object with hook defined\n    '@farmfe/plugin-react', // rust plugin package name\n  ]\n})\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"Farm support both rust plugins and js plugins:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/docs/plugins/rust-plugin",children:"Rust Plugin"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/docs/plugins/js-plugin",children:"Js plugin"})}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},5710:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>o});var s=i(758);const r={},t=s.createContext(r);function l(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);