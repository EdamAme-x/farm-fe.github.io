"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[919],{1168:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>h});var s=r(6070),l=r(5710),t=r(8967),i=r(7207),o=r(8382);const a={},c="Writing JavaScript Plugins",u={id:"plugins/writing-plugins/js-plugin",title:"Writing JavaScript Plugins",description:"A JavaScript plugin is simply a pure JavaScript object that defines a set of property hooks:",source:"@site/docs/plugins/writing-plugins/js-plugin.mdx",sourceDirName:"plugins/writing-plugins",slug:"/plugins/writing-plugins/js-plugin",permalink:"/docs/plugins/writing-plugins/js-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/writing-plugins/js-plugin.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"Writing Rust Plugins",permalink:"/docs/plugins/writing-plugins/rust-plugin"},next:{title:"Writing Runtime Plugin",permalink:"/docs/plugins/writing-plugins/runtime-plugin"}},d={},h=[{value:"Conventions",id:"conventions",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Filters",id:"filters",level:3},{value:"Module Type",id:"module-type",level:3},{value:"Create Plugin",id:"create-plugin",level:2},{value:"Develop Plugin",id:"develop-plugin",level:2},{value:"Publish Plugin",id:"publish-plugin",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"writing-javascript-plugins",children:"Writing JavaScript Plugins"}),"\n",(0,s.jsx)(n.p,{children:"A JavaScript plugin is simply a pure JavaScript object that defines a set of property hooks:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// farm.config.ts\nimport { defineConfig } from "@farmfe/core";\n\nexport default defineConfig({\n  // ...\n  plugins: [\n    // a plugin object\n    {\n      name: "my-resolve-plugin",\n      priority: 1000, // the priority of this plugin, the larger the value, the earlier the execution. Normally internal plugins is 100.\n      resolve: {\n        filters: {\n          // Only execute the hook when following conditions satisfied\n          sources: ["\\\\./index.ts"], // a regex array\n          importers: ["None"],\n        },\n        executor: async (param) => {\n          // this hook executor\n          console.log(param); // resolve params\n          // return the resolve result\n          return {\n            resolvedPath: "virtual:my-module",\n            query: {},\n            sideEffects: false,\n            external: false,\n          };\n        },\n      },\n    },\n    // load, transform are similar to resolve, refer to their types\n  ],\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"If you want to pass args to your plugins\uff0cyou can use a closure."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'// my-resolve-plugin.ts\nexport function myResolvePlugin(options: Options) {\n  const { xx } = options;\n\n  return {\n    name: "my-resolve-plugin",\n    resolve: {\n      // ...\n    },\n  };\n}\n\n// farm.config.ts\nimport { defineConfig } from "@farmfe/core";\nimport { myResolvePlugin } from "./myResolvePlugin.ts";\n\nexport default defineConfig({\n  // ...\n  plugins: [myResolvePlugin({ xx: "xx" })],\n});\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["See ",(0,s.jsx)(n.a,{href:"#create-plugin",children:"Create Plugin"})," to create a new plugin quickly based on official plugin templates."]}),"\n",(0,s.jsxs)(n.li,{children:["This document only covers how to create, develop and publish a js plugin, for more detail about the plugin hooks, see ",(0,s.jsx)(n.a,{href:"/docs/api/js-plugin-api",children:"Js Plugin Hooks"}),"."]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"conventions",children:"Conventions"}),"\n",(0,s.jsx)(n.p,{children:"For farm specific js plugins:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The Farm Js plugin should have a name with a ",(0,s.jsx)(n.code,{children:"farm-plugin-"})," prefix and clear semantics."]}),"\n",(0,s.jsxs)(n.li,{children:["Include the ",(0,s.jsx)(n.code,{children:"farm-plugin-"})," keyword in package.json."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If your plugin is only applicable to a specific framework, its name should follow the following prefix format:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"farm-plugin-vue-"}),": Prefix as a Vue plugin"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"farm-plugin-react-"}),": Prefix as a React plugin"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"farm-plugin-svelte-"}),": Prefix as a svelte plugin"]}),"\n",(0,s.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"concepts",children:"Concepts"}),"\n",(0,s.jsx)(n.p,{children:"Before you start to write your js plugin, you should know the following concepts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"filters"}),": Cause Js Plugins are much slower than Rust Plugins, your js plugin need to set explicit filters to avoid unnecessary call for js plugins hook. For example, you should set ",(0,s.jsx)(n.code,{children:"transform.filters.moduleTypes = ['js']"})," to make sure that the transform hook of your js plugin only runs for ",(0,s.jsx)(n.code,{children:".js/mjs/cjs"})," files."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"module_type"}),": The type of the module, it can be ",(0,s.jsx)(n.code,{children:"js"}),", ",(0,s.jsx)(n.code,{children:"ts"}),", ",(0,s.jsx)(n.code,{children:"css"}),", ",(0,s.jsx)(n.code,{children:"sass"}),", ",(0,s.jsx)(n.code,{children:"json"}),", etc. Farm supports ",(0,s.jsx)(n.code,{children:"js/ts/jsx/tsx"}),", ",(0,s.jsx)(n.code,{children:"css"}),", ",(0,s.jsx)(n.code,{children:"html"}),", ",(0,s.jsx)(n.code,{children:"json"}),", ",(0,s.jsx)(n.code,{children:"static assets(png, svg, etc)"})," natively. ",(0,s.jsx)(n.code,{children:"module_type"})," is returned by ",(0,s.jsx)(n.code,{children:"load"})," hook or ",(0,s.jsx)(n.code,{children:"transform"})," hook."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"resolved_path and module_id"}),": ",(0,s.jsx)(n.code,{children:"resolved_path"})," is the absolute path of the module, and ",(0,s.jsx)(n.code,{children:"module_id"})," is the unique id of the module, it's usually ",(0,s.jsx)(n.code,{children:"relative path of the module from the project root"})," + ",(0,s.jsx)(n.code,{children:"query"}),". For example, we import a module as ",(0,s.jsx)(n.code,{children:"import './a?query'"}),", the resolved_path is ",(0,s.jsx)(n.code,{children:"/project/src/a.ts"})," and the module_id is ",(0,s.jsx)(n.code,{children:"src/a.ts?query"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"context"}),": All the hooks in the plugin accept a ",(0,s.jsx)(n.code,{children:"context"})," argument, it's the compilation context of the farm project, you can use it to get the ModuleGraph, Module, Resources, etc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Resource and Resource Pot"}),": ",(0,s.jsx)(n.code,{children:"Resource"})," is the final output bundle file, and ",(0,s.jsx)(n.code,{children:"Resource Pot"})," is the abstract representation of the resource, similar to ",(0,s.jsx)(n.code,{children:"Chunk"})," of other bundlers. Inside Farm, first we will generate ",(0,s.jsx)(n.code,{children:"Resource Pots"})," from ",(0,s.jsx)(n.code,{children:"ModuleGraph"}),", render ",(0,s.jsx)(n.code,{children:"Resource Pots"})," and finally generate ",(0,s.jsx)(n.code,{children:"Resources"})," from ",(0,s.jsx)(n.code,{children:"Resource Pots"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"filters",children:"Filters"}),"\n",(0,s.jsxs)(n.p,{children:["Cause ",(0,s.jsx)(n.code,{children:"Js Plugins"})," are much slower than ",(0,s.jsx)(n.code,{children:"Rust Plugins"}),", Farm use ",(0,s.jsx)(n.code,{children:"filters"})," to control the execution of js plugin hooks. The plugin hook executes only when given ",(0,s.jsx)(n.code,{children:"filters"})," matched to improve performance. ",(0,s.jsx)(n.code,{children:"filters"})," is neccessary for some commonly used hooks, such as ",(0,s.jsx)(n.code,{children:"resolve"}),", ",(0,s.jsx)(n.code,{children:"load"}),", ",(0,s.jsx)(n.code,{children:"transform"}),", etc."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you want to transform css files, you can use ",(0,s.jsx)(n.code,{children:"transform.filters.moduleTypes = ['css']"})," to make sure that the transform hook of your js plugin only runs for ",(0,s.jsx)(n.code,{children:".css"})," files:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const myCssPlugin = {\n  name: "my-css-plugin",\n  transform: {\n    filters: {\n      // Only execute the hook when following conditions satisfied\n      // resolvedPaths: ["\\\\./index.ts"], // a regex array to match the resolvedPaths\n      moduleTypes: ["css"],\n    },\n    executor: async (param) => {\n      // transform css\n    },\n  },\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"module-type",children:"Module Type"}),"\n",(0,s.jsxs)(n.p,{children:["In Farm, every thing is ",(0,s.jsx)(n.code,{children:"First Class Citizens"}),", so Farm designs ",(0,s.jsx)(n.code,{children:"module_type"})," to identify the type of a module and handle different kinds of ModuleTypes in different plugins."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"module_type"})," returned by ",(0,s.jsx)(n.code,{children:"load"})," hook, and can be transformed by ",(0,s.jsx)(n.code,{children:"transform"})," hook. Farm supports ",(0,s.jsx)(n.code,{children:"js/ts/jsx/tsx"}),", ",(0,s.jsx)(n.code,{children:"css"}),", ",(0,s.jsx)(n.code,{children:"html"}),", ",(0,s.jsx)(n.code,{children:"json"}),", ",(0,s.jsx)(n.code,{children:"static assets(png, svg, etc)"})," natively. For these module types, you can return them directly in ",(0,s.jsx)(n.code,{children:"load"})," or ",(0,s.jsx)(n.code,{children:"transform"})," hook directly. But if you want to handle custom module types, you may need to implement ohter hooks like ",(0,s.jsx)(n.code,{children:"parse"}),", ",(0,s.jsx)(n.code,{children:"render_resource_pot_modules"}),", ",(0,s.jsx)(n.code,{children:"generate resources"}),", etc to control how to parse, render and generate resources for the custom module types."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Js Plugins don't support ",(0,s.jsx)(n.code,{children:"parse"}),", ",(0,s.jsx)(n.code,{children:"render_resource_pot_modules"}),", ",(0,s.jsx)(n.code,{children:"generate resources"})," hooks, you have to use Rust Plugins to handle custom module types."]})}),"\n",(0,s.jsx)(n.h2,{id:"create-plugin",children:"Create Plugin"}),"\n",(0,s.jsx)(n.p,{children:"Farm provides official templates to help your create your js plugins quickly:"}),"\n",(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.A,{children:[(0,s.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.A,{children:"pnpm create farm-plugin"})}),(0,s.jsx)(o.A,{value:"npm",label:"npm",children:(0,s.jsx)(t.A,{children:"npm create farm-plugin@latest"})}),(0,s.jsx)(o.A,{value:"yarn",label:"yarn",children:(0,s.jsx)(t.A,{children:"yarn create farm-plugin"})})]})}),"\n",(0,s.jsx)(n.p,{children:"then follow the prompts to create your plugin."}),"\n",(0,s.jsx)(n.p,{children:"or you can create a plugin derectly by running the following command:"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.A,{children:"pnpm create farm-plugin my-farm-plugin --type js"})}),(0,s.jsx)(o.A,{value:"npm",label:"npm",children:(0,s.jsx)(t.A,{children:"npm create my-farm-plugin --type js"})}),(0,s.jsx)(o.A,{value:"yarn",label:"yarn",children:(0,s.jsx)(t.A,{children:"yarn create my-farm-plugin --type js"})})]}),"\n",(0,s.jsxs)(n.p,{children:["Above command will create new js plugin with name ",(0,s.jsx)(n.code,{children:"my-farm-plugin"})," in the current directory. ",(0,s.jsx)(n.code,{children:"--type"})," can be ",(0,s.jsx)(n.code,{children:"rust"})," or ",(0,s.jsx)(n.code,{children:"js"})]}),"\n",(0,s.jsx)(n.h2,{id:"develop-plugin",children:"Develop Plugin"}),"\n",(0,s.jsx)(n.p,{children:"After creating the plugin, you can start to develop your plugin. The plugin is a pure JavaScript object that defines a set of property hooks:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// import { readFileSync } from 'node:fs';\nimport type { JsPlugin } from '@farmfe/core';\n\ninterface Options {\n  /* Your options here */\n}\n\nexport default function farmPlugin(options: Options): JsPlugin {\n  return {\n    name: '<FARM-JS-PLUGIN-NPM-NAME>',\n    /* Your plugin hooks here: */ \n\n    // transform: {\n    //   filters: {\n    //     moduleTypes: ['js']\n    //   },\n    //   async executor(params) {\n    //     const { content } = params;\n    //     return {\n    //       content,\n    //       moduleType: 'js'\n    //     };\n    //   }\n    // },\n    // finish: {\n    //   executor() {}\n    // }\n  };\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For more detail about the plugin hooks, see ",(0,s.jsx)(n.a,{href:"/docs/api/js-plugin-api",children:"Js Plugin Hooks"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"npm run dev"})," to compile the plugin and watch for changes. Run ",(0,s.jsx)(n.code,{children:"npm run build"})," to build the plugin."]}),"\n",(0,s.jsx)(n.h2,{id:"publish-plugin",children:"Publish Plugin"}),"\n",(0,s.jsxs)(n.p,{children:["A js plugin package is a normal npm package, you can publish it to npm registry by running ",(0,s.jsx)(n.code,{children:"npm publish"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8382:(e,n,r)=>{r.d(n,{A:()=>i});r(758);var s=r(3526);const l={tabItem:"tabItem_dhsV"};var t=r(6070);function i(e){let{children:n,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(l.tabItem,i),hidden:r,children:n})}},7207:(e,n,r)=>{r.d(n,{A:()=>w});var s=r(758),l=r(3526),t=r(7144),i=r(5557),o=r(2227),a=r(773),c=r(7626),u=r(8041);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:l}}=e;return{value:n,label:r,attributes:s,default:l}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const l=(0,i.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,a.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(l.location.search);n.set(t,e),l.replace({...l.location,search:n.toString()})}),[t,l])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:l}=e,t=h(e),[i,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[c,d]=m({queryString:r,groupId:l}),[f,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,t]=(0,u.Dv)(r);return[l,(0,s.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:l}),x=(()=>{const e=c??f;return p({value:e,tabValues:t})?e:null})();(0,o.A)((()=>{x&&a(x)}),[x]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),g(e)}),[d,g,t]),tabValues:t}}var g=r(5441);const x={tabList:"tabList_tOLG",tabItem:"tabItem_ZfBa"};var j=r(6070);function y(e){let{className:n,block:r,selectedValue:s,selectValue:i,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),u=e=>{const n=e.currentTarget,r=a.indexOf(n),l=o[r].value;l!==s&&(c(n),i(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;n=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;n=a[r]??a[a.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>a.push(e),onKeyDown:d,onClick:u,...t,className:(0,l.A)("tabs__item",x.tabItem,t?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:l}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function b(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,l.A)("tabs-container",x.tabList),children:[(0,j.jsx)(y,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,j.jsx)(b,{...e,children:d(e.children)},String(n))}}}]);