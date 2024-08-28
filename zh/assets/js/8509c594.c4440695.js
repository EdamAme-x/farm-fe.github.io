"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[5092],{4041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var a=t(6070),r=t(8355),s=t(7072);const c={},i="React",l={id:"frameworks/react",title:"React",description:"\u57fa\u4e8e Farm \u521b\u5efa\u4e00\u4e2a React \u9879\u76ee\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/frameworks/react.mdx",sourceDirName:"frameworks",slug:"/frameworks/react",permalink:"/zh/docs/frameworks/react",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/frameworks/react.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vanilla",permalink:"/zh/docs/frameworks/vanilla"},next:{title:"Vue",permalink:"/zh/docs/frameworks/vue"}},o={},d=[{value:"\u521b\u5efa React \u9879\u76ee",id:"\u521b\u5efa-react-\u9879\u76ee",level:3},{value:"\u96c6\u6210 <code>emotion</code>",id:"\u96c6\u6210-emotion",level:3},{value:"\u96c6\u6210 <code>svgr</code>",id:"\u96c6\u6210-svgr",level:3}];function m(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"react",children:"React"}),"\n",(0,a.jsxs)(n.p,{children:["\u57fa\u4e8e ",(0,a.jsx)(n.code,{children:"Farm"})," \u521b\u5efa\u4e00\u4e2a ",(0,a.jsx)(n.code,{children:"React"})," \u9879\u76ee\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Farm"})," \u63d0\u4f9b\u4e24\u79cd\u65b9\u6848\u6765\u652f\u6301\u521b\u5efa ",(0,a.jsx)(n.code,{children:"React"})," \u9879\u76ee:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"create-farm"})," \u811a\u624b\u67b6\u521b\u5efa\u811a\u624b\u67b6\u9879\u76ee"]}),"\n",(0,a.jsxs)(n.li,{children:["\u4f60\u53ef\u4ee5\u6839\u636e\u5f53\u524d\u6587\u6863\u624b\u52a8\u521b\u5efa\u4e00\u4e2a ",(0,a.jsx)(n.code,{children:"React"})," \u9879\u76ee"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u521b\u5efa-react-\u9879\u76ee",children:"\u521b\u5efa React \u9879\u76ee"}),"\n",(0,a.jsx)(s.k,{command:"npm create farm@latest"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728 ",(0,a.jsx)(n.code,{children:"Select Framework"})," \u4e2d\u9009\u62e9 ",(0,a.jsx)(n.code,{children:"React"})," \u6a21\u7248"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Farm"})," \u9700\u8981\u901a\u8fc7\u6ce8\u518c ",(0,a.jsx)(n.code,{children:"@farmfe/plugin-react"})," \u63d2\u4ef6\u6765\u5bf9 ",(0,a.jsx)(n.code,{children:"React"})," \u9879\u76ee\u8fdb\u884c\u652f\u6301\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="farm.config.ts"',children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  plugins: ['@farmfe/plugin-react'],\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@farmfe/plugin-react"})," \u63d2\u4ef6\u7531 ",(0,a.jsx)(n.code,{children:"Rust"})," \u7f16\u5199, \u56e0\u6b64\u4f60\u4e0d\u9700\u8981\u663e\u5f0f\u5f15\u5165, \u901a\u8fc7\u4f20\u9012\u4e00\u4e2a\u5b57\u7b26\u4e32\u5305\u540d\u5373\u53ef\u6ce8\u518c\u3002"]}),"\n",(0,a.jsxs)(n.h3,{id:"\u96c6\u6210-emotion",children:["\u96c6\u6210 ",(0,a.jsx)(n.code,{children:"emotion"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7\u6ce8\u518c ",(0,a.jsx)(n.code,{children:"@swc/plugin-emotion"})," \u63d2\u4ef6\u6765\u5bf9 ",(0,a.jsx)(n.code,{children:"emotion"})," \u8fdb\u884c\u652f\u6301\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="farm.config.ts"',children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  compilation: {\n    script: {\n      plugins: [\n        {\n          name: '@swc/plugin-emotion',\n          options: {},\n          filters: {\n            moduleTypes: ['tsx'],\n          },\n        },\n      ],\n    },\n  },\n  plugins: [['@farmfe/plugin-react', { \"runtime\": \"automatic\", \"importSource\": \"@emotion/react\" }]],\n});\n\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="src/index.tsx"',children:"import { css } from '@emotion/react';\n\nconst color = 'white';\n\nexport function Main() {\n  return (\n    <div\n      onClick={() => setCount((c) => c + 1)}\n      css={css`\n        padding: 32px;\n        background-color: hotpink;\n        font-size: 24px;\n        border-radius: 4px;\n        &:hover {\n          color: ${color};\n        }\n      `}\n    >\n      {a}: {count}\n    </div>\n  );\n}\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"\u96c6\u6210-svgr",children:["\u96c6\u6210 ",(0,a.jsx)(n.code,{children:"svgr"})]}),"\n",(0,a.jsx)(n.p,{children:"SVGR \u662f\u4e00\u4e2a\u7528\u4e8e\u5c06 SVG \u8f6c\u6362\u4e3a React \u7ec4\u4ef6\u7684\u5de5\u5177\uff0cFarm \u63d0\u4f9b\u4e86 Js \u63d2\u4ef6\u6765\u652f\u6301 SVGR\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="farm.config.ts"',children:"import { defineConfig } from '@farmfe/core';\nimport farmJsPluginSvgr from '@farmfe/js-plugin-svgr';\n\nexport default defineConfig(async (env) => {\n  return {\n    plugins: [\n      [\n        '@farmfe/plugin-react',\n        {\n          refresh: process.env.NODE_ENV === 'development',\n          development: process.env.NODE_ENV === 'development'\n        }\n      ],\n      farmJsPluginSvgr()\n    ]\n  };\n});\n\n\u5f00\u53d1\u73af\u5883\u65f6\u8fd0\u884c\n\n<PackageManagerTabs command=\"npm run dev\" />\n\n\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u8fdb\u884c\u6253\u5305\n\n<PackageManagerTabs command=\"npm run build\" />\n\n\u9884\u89c8\u751f\u4ea7\u73af\u5883\u6253\u5305\u4e4b\u540e\u6784\u5efa\u7684\u4ea7\u7269\n\n<PackageManagerTabs command=\"npm run preview\" />\n\n\n\u5982\u82e5\u60f3\u67e5\u770b\u793a\u4f8b\u8be6\u60c5: [React \u793a\u4f8b](https://github.com/farm-fe/farm/tree/main/examples/react)\n"})})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},7072:(e,n,t)=>{t.d(n,{k:()=>y});var a=t(758);const r=(0,a.createContext)({tabData:{},setTabData:()=>{}}),s="container__nVC",c="tab-list_aJ1t",i="tab_J4Y8",l="not-selected_sRGg",o="selected_erAK",d="no-scrollbar_vtMC";var m=t(6070);const f=e=>function(e){return!(!e||"object"!=typeof e||!("label"in e))}(e)?e.label||e.value:e,h=(0,a.forwardRef)(((e,n)=>{const{values:t,defaultValue:h,onChange:u,children:p,groupId:x,tabPosition:g="left",tabContainerClassName:j}=e,v=a.Children.toArray(p).filter((e=>!("string"==typeof e&&""===e.trim())));let b=t||[];0===b.length&&(b=a.Children.map(v,(e=>(0,a.isValidElement)(e)?{label:e.props?.label,value:e.props?.value||e.props?.label}:{label:void 0,value:void 0})));const{tabData:w,setTabData:y}=(0,a.useContext)(r),[C,k]=(0,a.useState)((()=>void 0===h?0:b.findIndex((e=>"string"==typeof e?e===h:!(!e||"object"!=typeof e||!("value"in e))&&e.value===h)))),[M,Z]=function(e,n){void 0===n&&(n=null);const[t,r]=(0,a.useState)((()=>"undefined"==typeof window?n:localStorage.getItem(e)??n)),s=(0,a.useCallback)((n=>{r((t=>{const a="function"==typeof n?n(t):n;return null==a?localStorage.removeItem(e):localStorage.setItem(e,a),a}))}),[e]);return(0,a.useEffect)((()=>{const t=t=>{t.key===e&&r(localStorage.getItem(e)??n)};return window.addEventListener("storage",t),()=>{window.removeEventListener("storage",t)}}),[e,n]),[t,s]}(`tabs.${x}`,C),R=(0,a.useMemo)((()=>x?void 0!==w[x]?w[x]:Number.parseInt(M):C),[w[x]]);(0,a.useEffect)((()=>{if(x){const e=Number.parseInt(M);R!==e&&y({...w,[x]:e})}}),[M]),(0,a.useEffect)((()=>{S(x?R:C)}),[x,R,C]);const[A,S]=(0,a.useState)(x?R:C);return(0,m.jsxs)("div",{className:s,ref:n,children:[(0,m.jsx)("div",{className:j,children:b.length?(0,m.jsx)("div",{className:`${c} ${d}`,style:{display:"flex",justifyContent:"center"===g?"center":"flex-start"},children:b.map(((e,n)=>(0,m.jsx)("div",{className:`${i} ${A===n?o:l}`,onClick:()=>{const e=n;u?.(e),S(e),x?(y({...w,[x]:e}),Z(e)):k(e)},children:f(e)},n)))}):null}),(0,m.jsx)("div",{children:a.Children.toArray(v)[A]})]})}));function u(e){let{children:n,...t}=e;return(0,m.jsx)("div",{...t,className:"rounded px-2",children:n})}var p=t(6411);function x(e){return(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 256 256",...e,children:[(0,m.jsx)("path",{fill:"#C12127",d:"M0 256V0h256v256z"}),(0,m.jsx)("path",{fill:"#FFF",d:"M48 48h160v160h-32V80h-48v128H48z"})]})}function g(e){return(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 128 128",...e,children:(0,m.jsxs)("g",{fill:"#2c8ebb",children:[(0,m.jsx)("path",{d:"M99.24 80.71C94.9 80.76 91.1 83 87.89 85c-6 3.71-9 3.47-9 3.47l-.1-.17c-.41-.67 1.92-6.68-.69-13.84c-2.82-7.83-7.3-9.72-6.94-10.32c1.53-2.59 5.36-6.7 6.89-14.36c.91-4.64.67-12.28-1.39-16.28c-.38-.74-3.78 1.24-3.78 1.24s-3.18-7.09-4.07-7.66c-2.87-1.84-6 7.61-6 7.61a14 14 0 0 0-11.71 4.5a9.64 9.64 0 0 1-3.85 2.27c-.41.14-.91.12-2.15 3.47c-1.9 5.07 3.24 10.81 3.24 10.81s-6.13 4.33-8.4 9.72a24.78 24.78 0 0 0-1.75 11.68s-4.36 3.78-4.64 7.68a12.87 12.87 0 0 0 1.77 7.83a1.94 1.94 0 0 0 2.63.91s-2.9 3.38-.19 4.81c2.47 1.29 6.63 2 8.83-.19c1.6-1.6 1.92-5.17 2.51-6.63c.14-.34.62.57 1.08 1a10 10 0 0 0 1.36 1s-3.9 1.68-2.3 5.51c.53 1.27 2.42 2.08 5.51 2.06c1.15 0 13.76-.72 17.12-1.53a4.33 4.33 0 0 0 2.61-1.46a63 63 0 0 0 15.49-7c4.74-3.09 6.68-3.93 10.51-4.84c3.16-.75 2.95-5.65-1.24-5.58z"}),(0,m.jsx)("path",{d:"M64 2a62 62 0 1 0 62 62A62 62 0 0 0 64 2zm37.3 87.83c-3.35.81-4.91 1.44-9.41 4.36a67 67 0 0 1-15.56 7.18a8.71 8.71 0 0 1-3.64 1.77c-3.81.93-16.88 1.63-17.91 1.63h-.24c-4 0-6.27-1.24-7.49-2.54c-3.4 1.7-7.8 1-11-.69a5.55 5.55 0 0 1-3-3.9a6 6 0 0 1 0-2.06a6.66 6.66 0 0 1-.79-1A16.38 16.38 0 0 1 30 84.52c.29-3.73 2.87-7.06 4.55-8.83A28.56 28.56 0 0 1 36.61 64a26.82 26.82 0 0 1 6.82-9c-1.65-2.78-3.33-7.06-1.7-11.42c1.17-3.11 2.13-4.84 4.24-5.58a6.84 6.84 0 0 0 2.51-1.34A17.65 17.65 0 0 1 60.34 31c.19-.48.41-1 .65-1.46c1.6-3.4 3.3-5.31 5.29-6a4.88 4.88 0 0 1 4.4.5c.65.43 1.48 1 3.9 6a4.69 4.69 0 0 1 2.85-.1a3.81 3.81 0 0 1 2.39 1.94c2.47 4.74 2.8 13.19 1.72 18.62a33.8 33.8 0 0 1-5.84 13.31a25.73 25.73 0 0 1 5.77 9.43a25.42 25.42 0 0 1 1.41 10.41A28.7 28.7 0 0 0 86 81.91c3.06-1.89 7.68-4.74 13.19-4.81a6.62 6.62 0 0 1 7 5.7a6.35 6.35 0 0 1-4.89 7.03z"})]})})}function j(e){return(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 128 128",...e,children:[(0,m.jsx)("path",{fill:"#f8ab00",d:"M0 .004V40h39.996V.004Zm43.996 0V40h40V.004Zm44.008 0V40H128V.004Zm0 43.996v39.996H128V44Z"}),(0,m.jsx)("path",{fill:"#4c4c4c",d:"M43.996 44v39.996h40V44ZM0 87.996v40h39.996v-40Zm43.996 0v40h40v-40Zm44.008 0v40H128v-40Z"})]})}function v(e){return(0,m.jsxs)("svg",{id:"Bun",width:"1.2em",height:"1.2em",viewBox:"0 0 80 70",...e,children:[(0,m.jsx)("path",{id:"Shadow",d:"M71.09,20.74c-.16-.17-.33-.34-.5-.5s-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5A26.46,26.46,0,0,1,75.5,35.7c0,16.57-16.82,30.05-37.5,30.05-11.58,0-21.94-4.23-28.83-10.86l.5.5.5.5.5.5.5.5.5.5.5.5.5.5C19.55,65.3,30.14,69.75,42,69.75c20.68,0,37.5-13.48,37.5-30C79.5,32.69,76.46,26,71.09,20.74Z"}),(0,m.jsxs)("g",{id:"Body",children:[(0,m.jsx)("path",{id:"Background",d:"M73,35.7c0,15.21-15.67,27.54-35,27.54S3,50.91,3,35.7C3,26.27,9,17.94,18.22,13S33.18,3,38,3s8.94,4.13,19.78,10C67,17.94,73,26.27,73,35.7Z",style:{fill:"#fbf0df"}}),(0,m.jsx)("path",{id:"Bottom_Shadow","data-name":"Bottom Shadow",d:"M73,35.7a21.67,21.67,0,0,0-.8-5.78c-2.73,33.3-43.35,34.9-59.32,24.94A40,40,0,0,0,38,63.24C57.3,63.24,73,50.89,73,35.7Z",style:{fill:"#f6dece"}}),(0,m.jsx)("path",{id:"Light_Shine","data-name":"Light Shine",d:"M24.53,11.17C29,8.49,34.94,3.46,40.78,3.45A9.29,9.29,0,0,0,38,3c-2.42,0-5,1.25-8.25,3.13-1.13.66-2.3,1.39-3.54,2.15-2.33,1.44-5,3.07-8,4.7C8.69,18.13,3,26.62,3,35.7c0,.4,0,.8,0,1.19C9.06,15.48,20.07,13.85,24.53,11.17Z",style:{fill:"#fffefc"}}),(0,m.jsx)("path",{id:"Top",d:"M35.12,5.53A16.41,16.41,0,0,1,29.49,18c-.28.25-.06.73.3.59,3.37-1.31,7.92-5.23,6-13.14C35.71,5,35.12,5.12,35.12,5.53Zm2.27,0A16.24,16.24,0,0,1,39,19c-.12.35.31.65.55.36C41.74,16.56,43.65,11,37.93,5,37.64,4.74,37.19,5.14,37.39,5.49Zm2.76-.17A16.42,16.42,0,0,1,47,17.12a.33.33,0,0,0,.65.11c.92-3.49.4-9.44-7.17-12.53C40.08,4.54,39.82,5.08,40.15,5.32ZM21.69,15.76a16.94,16.94,0,0,0,10.47-9c.18-.36.75-.22.66.18-1.73,8-7.52,9.67-11.12,9.45C21.32,16.4,21.33,15.87,21.69,15.76Z",style:{fill:"#ccbea7",fillRule:"evenodd"}}),(0,m.jsx)("path",{id:"Outline",d:"M38,65.75C17.32,65.75.5,52.27.5,35.7c0-10,6.18-19.33,16.53-24.92,3-1.6,5.57-3.21,7.86-4.62,1.26-.78,2.45-1.51,3.6-2.19C32,1.89,35,.5,38,.5s5.62,1.2,8.9,3.14c1,.57,2,1.19,3.07,1.87,2.49,1.54,5.3,3.28,9,5.27C69.32,16.37,75.5,25.69,75.5,35.7,75.5,52.27,58.68,65.75,38,65.75ZM38,3c-2.42,0-5,1.25-8.25,3.13-1.13.66-2.3,1.39-3.54,2.15-2.33,1.44-5,3.07-8,4.7C8.69,18.13,3,26.62,3,35.7,3,50.89,18.7,63.25,38,63.25S73,50.89,73,35.7C73,26.62,67.31,18.13,57.78,13,54,11,51.05,9.12,48.66,7.64c-1.09-.67-2.09-1.29-3-1.84C42.63,4,40.42,3,38,3Z"})]}),(0,m.jsxs)("g",{id:"Mouth",children:[(0,m.jsx)("g",{id:"Background-2","data-name":"Background",children:(0,m.jsx)("path",{d:"M45.05,43a8.93,8.93,0,0,1-2.92,4.71,6.81,6.81,0,0,1-4,1.88A6.84,6.84,0,0,1,34,47.71,8.93,8.93,0,0,1,31.12,43a.72.72,0,0,1,.8-.81H44.26A.72.72,0,0,1,45.05,43Z",style:{fill:"#b71422"}})}),(0,m.jsxs)("g",{id:"Tongue",children:[(0,m.jsx)("path",{id:"Background-3","data-name":"Background",d:"M34,47.79a6.91,6.91,0,0,0,4.12,1.9,6.91,6.91,0,0,0,4.11-1.9,10.63,10.63,0,0,0,1-1.07,6.83,6.83,0,0,0-4.9-2.31,6.15,6.15,0,0,0-5,2.78C33.56,47.4,33.76,47.6,34,47.79Z",style:{fill:"#ff6164"}}),(0,m.jsx)("path",{id:"Outline-2","data-name":"Outline",d:"M34.16,47a5.36,5.36,0,0,1,4.19-2.08,6,6,0,0,1,4,1.69c.23-.25.45-.51.66-.77a7,7,0,0,0-4.71-1.93,6.36,6.36,0,0,0-4.89,2.36A9.53,9.53,0,0,0,34.16,47Z"})]}),(0,m.jsx)("path",{id:"Outline-3","data-name":"Outline",d:"M38.09,50.19a7.42,7.42,0,0,1-4.45-2,9.52,9.52,0,0,1-3.11-5.05,1.2,1.2,0,0,1,.26-1,1.41,1.41,0,0,1,1.13-.51H44.26a1.44,1.44,0,0,1,1.13.51,1.19,1.19,0,0,1,.25,1h0a9.52,9.52,0,0,1-3.11,5.05A7.42,7.42,0,0,1,38.09,50.19Zm-6.17-7.4c-.16,0-.2.07-.21.09a8.29,8.29,0,0,0,2.73,4.37A6.23,6.23,0,0,0,38.09,49a6.28,6.28,0,0,0,3.65-1.73,8.3,8.3,0,0,0,2.72-4.37.21.21,0,0,0-.2-.09Z"})]}),(0,m.jsxs)("g",{id:"Face",children:[(0,m.jsx)("ellipse",{id:"Right_Blush","data-name":"Right Blush",cx:"53.22",cy:"40.18",rx:"5.85",ry:"3.44",style:{fill:"#febbd0"}}),(0,m.jsx)("ellipse",{id:"Left_Bluch","data-name":"Left Bluch",cx:"22.95",cy:"40.18",rx:"5.85",ry:"3.44",style:{fill:"#febbd0"}}),(0,m.jsx)("path",{id:"Eyes",d:"M25.7,38.8a5.51,5.51,0,1,0-5.5-5.51A5.51,5.51,0,0,0,25.7,38.8Zm24.77,0A5.51,5.51,0,1,0,45,33.29,5.5,5.5,0,0,0,50.47,38.8Z",style:{fillRule:"evenodd"}}),(0,m.jsx)("path",{id:"Iris",d:"M24,33.64a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,24,33.64Zm24.77,0a2.07,2.07,0,1,0-2.06-2.07A2.07,2.07,0,0,0,48.75,33.64Z",style:{fill:"#fff",fillRule:"evenodd"}})]})]})}function b(e){if(!e?.includes("install"))return e;const n=e.split(" ").filter((e=>!e.startsWith("-")&&!e.startsWith("--"))).join(" ");return"yarn install"===n||"bun install"===n?e:e.replace("install","add")}function w(e,n){let t=e;return["npm","yarn","pnpm","bun"].forEach((e=>{const a=new RegExp(`\\b${e}\\b`,"g");t=t.replace(a,n)})),t}function y(e){let n,{command:t,skip:a=!0,additionalTabs:r=[]}=e;const s={npm:(0,m.jsx)(x,{}),yarn:(0,m.jsx)(g,{}),pnpm:(0,m.jsx)(j,{}),bun:(0,m.jsx)(v,{})};if(r.forEach((e=>{s[e.tool]=e.icon})),"string"==typeof t?(n={npm:`npm ${t}`,yarn:`yarn ${t}`,pnpm:`pnpm ${t}`,bun:`bun ${t}`},r.forEach((e=>{n[e.tool]=a?w(t,e.tool):`${e.tool} ${t}`}))):n=t,n.yarn&&(n.yarn=b(n.yarn)),n.bun&&(n.bun=b(n.bun)),a){["npm","yarn","pnpm","bun"].forEach((e=>{n[e]=w(t,e)}))}return(0,m.jsx)(h,{groupId:"package.manager",values:Object.entries(n).map((e=>{let[n]=e;return(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center",fontSize:15},children:[s[n],(0,m.jsx)("span",{style:{marginLeft:6,marginBottom:2},children:n})]},n)})),children:Object.entries(n).map((e=>{let[n,t]=e;return(0,m.jsx)(u,{children:(0,m.jsx)(p.A,{className:"my-2",children:t})},n)}))})}}}]);