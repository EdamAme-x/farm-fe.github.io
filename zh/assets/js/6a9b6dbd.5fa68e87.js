"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[117],{848:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=i(6070),r=i(5710);const s={},o="\u4ece Vite \u8fc1\u79fb",c={id:"migration/from-vite",title:"\u4ece Vite \u8fc1\u79fb",description:"Vite \u63d2\u4ef6\u5982 unocss \u4e0e Vite \u6df1\u5ea6\u96c6\u6210\uff0c\u7531\u4e8e\u5185\u90e8\u8bbe\u8ba1\u7684\u5dee\u5f02\uff0c\u8fd9\u4e9b\u63d2\u4ef6\u53ef\u80fd\u4e0e Farm \u4e0d\u517c\u5bb9\u3002\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u5176\u4ed6\u65b9\u6cd5\uff0c\u5982 unocss postcss \u63d2\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/migration/from-vite.md",sourceDirName:"migration",slug:"/migration/from-vite",permalink:"/zh/docs/migration/from-vite",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/migration/from-vite.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Svelte",permalink:"/zh/docs/frameworks/svelte"},next:{title:"Benchmarks",permalink:"/zh/docs/benchmark"}},d={},a=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u4ece-vite-\u8fc1\u79fb",children:"\u4ece Vite \u8fc1\u79fb"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Vite \u63d2\u4ef6\u5982 ",(0,t.jsx)(n.code,{children:"unocss"})," \u4e0e ",(0,t.jsx)(n.code,{children:"Vite"})," \u6df1\u5ea6\u96c6\u6210\uff0c\u7531\u4e8e\u5185\u90e8\u8bbe\u8ba1\u7684\u5dee\u5f02\uff0c\u8fd9\u4e9b\u63d2\u4ef6\u53ef\u80fd\u4e0e Farm \u4e0d\u517c\u5bb9\u3002\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u5176\u4ed6\u65b9\u6cd5\uff0c\u5982 ",(0,t.jsx)(n.code,{children:"unocss postcss"})," \u63d2\u4ef6\u3002"]})}),"\n",(0,t.jsxs)(n.p,{children:["\u4ece Vite \u8fc1\u79fb\u975e\u5e38\u7b80\u5355\uff0c\u56e0\u4e3a Farm \u4e0e Vite \u517c\u5bb9\u3002\u60a8\u9700\u8981\u505a\u7684\u5c31\u662f\u5c06 ",(0,t.jsx)(n.code,{children:"vite.config.ts"})," \u8f6c\u6362\u4e3a ",(0,t.jsx)(n.code,{children:"farm.config.ts"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u53c2\u8003",(0,t.jsx)(n.a,{href:"/zh/docs/config/configuring-farm",children:"Configuring Farm"})," \u5c06 farm \u914d\u7f6e\u9009\u9879\u6620\u5c04\u5230 vite \u914d\u7f6e"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5bf9\u4e8e ",(0,t.jsx)(n.code,{children:"Vite Plugins"}),"\uff0c\u5c06 ",(0,t.jsx)(n.code,{children:"vite.config.ts"})," \u4e2d\u7684",(0,t.jsx)(n.code,{children:"plugins"}),"\u79fb\u52a8\u5230 ",(0,t.jsx)(n.code,{children:"farm.config.ts"})," \u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"vitePlugins"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4e00\u4e9b Vite \u914d\u7f6e\u9009\u9879\u5728 Farm \u4e2d\u662f\u4e0d\u9700\u8981\u7684\uff0c\u4f8b\u5982 ",(0,t.jsx)(n.code,{children:"optimizeDeps"}),"\uff0c\u60a8\u53ef\u4ee5\u5728\u8fc1\u79fb\u5230 Farm \u65f6\u5ffd\u7565\u8fd9\u4e9b\u9009\u9879"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5bf9\u4e8e SSR\uff0c\u60a8\u9700\u8981\u5c06\u5176\u91cd\u6784\u4e3a",(0,t.jsx)(n.a,{href:"/zh/docs/advanced/ssr",children:"Farm SSR"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u5df2\u5c06 ",(0,t.jsx)(n.a,{href:"https://github.com/farm-fe/farm-soybean-admin",children:"Real Vite Admin Project"})," \u8fc1\u79fb\u5230 Farm\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b\u6b64\u8fc1\u79fb\u793a\u4f8b"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},5710:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(758);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);