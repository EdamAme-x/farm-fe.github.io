"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[9239],{880:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=n(6070),o=n(2907);const r={},s="Minification",a={id:"features/minification",title:"Minification",description:"Farm supports production minify out of box, which is automatically enabled in production by default. It can be enable or disable via the compilation.minify option.",source:"@site/versioned_docs/version-0.x/features/minification.md",sourceDirName:"features",slug:"/features/minification",permalink:"/docs/0.x/features/minification",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/features/minification.md",tags:[],version:"0.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tree Shake",permalink:"/docs/0.x/features/tree-shake"},next:{title:"Syntax Downgrade and Polyfill",permalink:"/docs/0.x/features/polyfill"}},c={},l=[];function d(e){const i={admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"minification",children:"Minification"}),"\n",(0,t.jsxs)(i.p,{children:["Farm supports production minify out of box, which is automatically enabled ",(0,t.jsx)(i.code,{children:"in production"})," by default. It can be enable or disable via the ",(0,t.jsx)(i.code,{children:"compilation.minify"})," option."]}),"\n",(0,t.jsxs)(i.p,{children:["Using ",(0,t.jsx)(i.code,{children:"compilation.minify"})," to configure:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"export default {\n   compilation: {\n     minify: true\n   },\n};\n"})}),"\n",(0,t.jsx)(i.p,{children:"If minify is enabled:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"for js/ts modules, it will be minified and mangled, all the blank characters will be removed and the variables will be compressed."}),"\n",(0,t.jsx)(i.li,{children:"for css and html modules, all spaces will be removed."}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"Farm use swc minifier under the hood, all options of swc minifier can be used in Farm."})})]})}function f(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2907:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>a});var t=n(758);const o={},r=t.createContext(o);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);