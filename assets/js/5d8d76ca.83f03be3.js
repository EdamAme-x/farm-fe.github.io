"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[2079],{5586:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=o(6070),t=o(5710);const a={},l="Lazy Compilation",r={id:"features/lazy-compilation",title:"Lazy Compilation",description:"When comes to a big project, you may want to split them into small pieces and load on demand. This can be achieved by dynamic imports.",source:"@site/docs/features/lazy-compilation.md",sourceDirName:"features",slug:"/features/lazy-compilation",permalink:"/docs/features/lazy-compilation",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/features/lazy-compilation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Environment Variables and Modes",permalink:"/docs/features/env"},next:{title:"Source Map",permalink:"/docs/features/sourcemap"}},s={},c=[{value:"Configuring Lazy Compilation",id:"configuring-lazy-compilation",level:2},{value:"How Lazy Compilation Work",id:"how-lazy-compilation-work",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"lazy-compilation",children:"Lazy Compilation"}),"\n",(0,i.jsx)(n.p,{children:"When comes to a big project, you may want to split them into small pieces and load on demand. This can be achieved by dynamic imports."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const page = React.lazy(() => import('./page')); // lazy load page\n"})}),"\n",(0,i.jsx)(n.p,{children:"By default, Farm will lazy compile these dynamic imports in development, only compile them when the module is really executed. Lazy compilation can really speedup the compiling of a large project."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Lazy Compilation are always disabled for production build."})}),"\n",(0,i.jsxs)(n.p,{children:["Note that it is important to use the ",(0,i.jsx)(n.code,{children:"dynamic import"})," properly to make ",(0,i.jsx)(n.code,{children:"lazy compilation"})," work better. For example, if one of your page has a big dependencies, but this dependencies won't be used until this page rendered, then it is necessary to make sure that this big dependencies are dynamic imported, so it won't be compiled util the page rendered."]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-lazy-compilation",children:"Configuring Lazy Compilation"}),"\n",(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.code,{children:"compilation.lazyCompilation"})," to enable or disable it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n   compilation: {\n     lazyCompilation: true,\n   },\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"how-lazy-compilation-work",children:"How Lazy Compilation Work"}),"\n",(0,i.jsxs)(n.p,{children:["When lazy compilation is enabled, Farm will analyze all of your ",(0,i.jsx)(n.code,{children:"dynamic import"})," first, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const page = React.lazy(() => import('./page'));\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Farm will treat ",(0,i.jsx)(n.code,{children:"./page"})," as a module that should be lazy compiled and won't compile it, instead, Farm will return a virtual placeholder module for ",(0,i.jsx)(n.code,{children:"./page"})," like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// ... other actions\nconst compilingModules = FarmModuleSystem.compilingModules;\n// return a promise, this promise will be resolved when lazy compilation finished.\nlet promise = Promise.resolve();\n\n// it has lazy been lazy compiling\nif (compilingModules.has(modulePath)) {\n  promise = promise.then(() => compilingModules.get(modulePath));\n} else {\n  // request the dev server for lazy compilation\n  const url = '/__lazy_compile?paths=' + paths.join(',') + `&t=${Date.now()}`;\n  promise = import(url).then((module: any) => {\n      const result: LazyCompileResult = module.default;\n      // ...\n  });\n  // ... more actions\n}\n\nexport const __farm_async = true;\nexport default promise;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Above example illustrated a basic structure of that virtual placeholder module. When the placeholder executed, it will request the dev server to compile this module and its dependencies. After getting the lazy compiled result from dev server, the placeholder module will patch these changes to Farm's runtime module system."})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5710:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>r});var i=o(758);const t={},a=i.createContext(t);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);