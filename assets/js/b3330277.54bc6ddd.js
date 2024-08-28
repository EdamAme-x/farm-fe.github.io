"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[5076],{338:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var t=r(6070),i=r(8355);const s={},d="Benchmarks",c={id:"benchmark",title:"Benchmarks",description:"Introduction",source:"@site/versioned_docs/version-0.x/benchmark.md",sourceDirName:".",slug:"/benchmark",permalink:"/docs/0.x/benchmark",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/benchmark.md",tags:[],version:"0.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Plugins",permalink:"/docs/0.x/using-plugins"},next:{title:"Overview",permalink:"/docs/0.x/tutorials/overview"}},l={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Run this benchmark yourself",id:"run-this-benchmark-yourself",level:3},{value:"Data",id:"data",level:3},{value:"metrics",id:"metrics",level:2},{value:"Benchmark for all metrics",id:"benchmark-for-all-metrics",level:3},{value:"Benchmark of HMR",id:"benchmark-of-hmr",level:3},{value:"Benchmark of Startup",id:"benchmark-of-startup",level:3},{value:"Benchmark of Production Build",id:"benchmark-of-production-build",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"benchmarks",children:"Benchmarks"}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["Using Turbopack's bench cases (1000 React components), see ",(0,t.jsx)(n.a,{href:"https://turbo.build/pack/docs/benchmarks",children:"https://turbo.build/pack/docs/benchmarks"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"run-this-benchmark-yourself",children:"Run this benchmark yourself"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Test Repo\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/farm-fe/performance-compare",children:"https://github.com/farm-fe/performance-compare"})]}),"\n",(0,t.jsx)(n.p,{children:"Test Machine\uff08Linux Mint 21.1 Cinnamon\uff0c 11th Gen Intel\xa9 Core\u2122 i5-11400 @ 2.60GHz \xd7 6\uff0c 15.5 GiB\uff09"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"# Install dependencies\npnpm install\n\n# run benchmark\npnpm benchmark\n"})}),"\n",(0,t.jsx)(n.h3,{id:"data",children:"Data"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Startup"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"HMR (Root)"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"HMR (Leaf)"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Production Build"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Webpack"}),(0,t.jsx)(n.td,{children:"8035ms"}),(0,t.jsx)(n.td,{children:"345ms"}),(0,t.jsx)(n.td,{children:"265ms"}),(0,t.jsx)(n.td,{children:"11321ms"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Vite"}),(0,t.jsx)(n.td,{children:"3078ms"}),(0,t.jsx)(n.td,{children:"35ms"}),(0,t.jsx)(n.td,{children:"18ms"}),(0,t.jsx)(n.td,{children:"2266ms"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Rspack"}),(0,t.jsx)(n.td,{children:"831ms"}),(0,t.jsx)(n.td,{children:"104ms"}),(0,t.jsx)(n.td,{children:"96ms"}),(0,t.jsx)(n.td,{children:"724ms"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Farm"}),(0,t.jsx)(n.td,{children:"403ms"}),(0,t.jsx)(n.td,{children:"11ms"}),(0,t.jsx)(n.td,{children:"10ms"}),(0,t.jsx)(n.td,{children:"288ms"})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"metrics",children:"metrics"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Cold StartUp Time: The time it takes to develop a build without caching"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Hot StartUp Time: The time it takes to develop a build with caching"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Cold Production Build Time: The time it takes to build a production build without caching"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Hot Production Build Time: The time it takes to build a production build with caching"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"HMR Time: The time it takes to apply an update to a file and send it to the development server to the response"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"HMR Root: The time for updating a react component file that has no dependency"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["HMR Leaf: The time for updating a root react component, normally it is named ",(0,t.jsx)(n.code,{children:"App.tsx"})," or ",(0,t.jsx)(n.code,{children:"index.tsx"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"benchmark-for-all-metrics",children:"Benchmark for all metrics"}),"\n",(0,t.jsx)("img",{style:{width:"100%",borderRadius:"8px",border:"2px solid #8f1a7f60"},src:"/img/20231204223204.png"}),"\n",(0,t.jsx)(n.h3,{id:"benchmark-of-hmr",children:"Benchmark of HMR"}),"\n",(0,t.jsx)("img",{style:{width:"100%",borderRadius:"8px",border:"2px solid #8f1a7f60"},src:"/img/hmr-linux.png"}),"\n",(0,t.jsx)(n.h3,{id:"benchmark-of-startup",children:"Benchmark of Startup"}),"\n",(0,t.jsx)("img",{style:{width:"100%",borderRadius:"8px",border:"2px solid #8f1a7f60"},src:"/img/startup-linux.png"}),"\n",(0,t.jsx)(n.h3,{id:"benchmark-of-production-build",children:"Benchmark of Production Build"}),"\n",(0,t.jsx)("img",{style:{width:"100%",borderRadius:"8px",border:"2px solid #8f1a7f60"},src:"/img/build-linux.png"})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8355:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var t=r(758);const i={},s=t.createContext(i);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);