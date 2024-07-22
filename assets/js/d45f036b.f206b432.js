"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[5249],{9788:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(6070),i=t(5710);const o={},a="Rust Api",c={id:"api/rust-api",title:"Rust Api",description:"You can create a Farm Rust compiler in your rust code. Example:",source:"@site/docs/api/rust-api.md",sourceDirName:"api",slug:"/api/rust-api",permalink:"/docs/api/rust-api",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/api/rust-api.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Javascript Api",permalink:"/docs/api/javascript-api"}},p={},s=[];function l(e){const r={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"rust-api",children:"Rust Api"}),"\n",(0,n.jsx)(r.p,{children:"You can create a Farm Rust compiler in your rust code. Example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-rust",children:'use farmfe_compiler::Compiler;\nuse farmfe_core::config::Config;\n\n// create farm compiler\npub fn create_farm_compiler() {\n  let config = Config::default();\n  let extra_plugins = vec![];\n\n  let compiler = Compiler::new(config, extra_plugins);\n\n  compiler\n}\n\n// compile the project\npub fn compile() {\n  let compiler = create_farm_compiler();\n  compiler.compile()\n}\n\n// perform hot update\npub fn update(compiler: Compiler) {\n  let update_result = compiler.update(vec![(String::from("/root/index.ts"), UpdateType:Update)], || {\n    // called when all update(including resource regeneration) finished\n  }, true);\n\n  // handle update_result...\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Farm Rust compiler is exported by ",(0,n.jsx)(r.a,{href:"https://docs.rs/farmfe_core/latest/farmfe_compiler",children:(0,n.jsx)(r.code,{children:"farmfe_compiler"})})," crate. Refer to ",(0,n.jsx)(r.a,{href:"https://docs.rs/farmfe_core/latest/farmfe_compiler",children:(0,n.jsx)(r.code,{children:"farmfe_compiler"})})," documentation."]})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},5710:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>c});var n=t(758);const i={},o=n.createContext(i);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);