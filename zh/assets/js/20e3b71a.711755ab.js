"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[5706],{8039:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=n(6070),r=n(5710),l=n(8967),i=n(7207),t=n(8382);const o={},c="@farmfe/js-plugin-sass",d={id:"plugins/official-plugins/js-sass",title:"@farmfe/js-plugin-sass",description:"\u652f\u6301 sass \u7f16\u8bd1",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugins/official-plugins/js-sass.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/js-sass",permalink:"/zh/docs/plugins/official-plugins/js-sass",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/js-sass.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/js-plugin-less",permalink:"/zh/docs/plugins/official-plugins/js-less"},next:{title:"@farmfe/js-plugin-svgr",permalink:"/zh/docs/plugins/official-plugins/js-svgr"}},u={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"sassOptions",id:"sassoptions",level:3},{value:"filters",id:"filters",level:3},{value:"implementation",id:"implementation",level:3},{value:"additionalData",id:"additionaldata",level:3},{value:"globals",id:"globals",level:3}];function f(s){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"farmfejs-plugin-sass",children:"@farmfe/js-plugin-sass"}),"\n",(0,a.jsxs)(e.p,{children:["\u652f\u6301 ",(0,a.jsx)(e.code,{children:"sass"})," \u7f16\u8bd1"]}),"\n",(0,a.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(t.A,{value:"npm",label:"npm",children:(0,a.jsx)(l.A,{children:"npm install @farmfe/js-plugin-sass sass"})}),(0,a.jsx)(t.A,{value:"yarn",label:"yarn",children:(0,a.jsx)(l.A,{children:"yarn add @farmfe/js-plugin-sass sass"})}),(0,a.jsx)(t.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(l.A,{children:"pnpm add @farmfe/js-plugin-sass sass"})})]}),"\n",(0,a.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",metastring:"{2,6}",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({ /* options */ })\n  ]\n}\n"})}),"\n",(0,a.jsx)(e.h2,{id:"options",children:"Options"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"export type SassPluginOptions = {\n  sassOptions?: StringOptions<'async'>;\n  filters?: {\n    resolvedPaths?: string[];\n    moduleTypes?: string[];\n  };\n\n  /**\n   * - relative or absolute path\n   * - globals file will be added to the top of the sass file\n   * - when file changed, the file can't be hot-reloaded\n   *\n   * relative to project root or cwd\n   */\n  implementation?: string | undefined;\n  globals?: string[];\n  additionalData?:\n    | string\n    | ((content?: string, resolvePath?: string) => string | Promise<string>);\n};\n"})}),"\n",(0,a.jsx)(e.h3,{id:"sassoptions",children:"sassOptions"}),"\n",(0,a.jsxs)(e.p,{children:["\u8bf7\u53c2\u9605 ",(0,a.jsx)(e.a,{href:"https://sass-lang.com/documentation/js-api/interfaces/options/",children:"sass \u9009\u9879"}),"\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"Example:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"import path from 'node:path';\nimport { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({\n      sassOptions: {\n        loadPaths: [path.resolve(process.cwd(), 'styles')]\n      }\n    })\n  ]\n}\n\nexport default config;\n"})}),"\n",(0,a.jsx)(e.h3,{id:"filters",children:"filters"}),"\n",(0,a.jsxs)(e.p,{children:["\u54ea\u4e9b\u6587\u4ef6\u5e94\u8be5\u7531 ",(0,a.jsx)(e.code,{children:"sass"})," \u5904\u7406\u3002 \u5bf9\u4e8e load \u94a9\u5b50\u9ed8\u8ba4\u4e3a ",(0,a.jsx)(e.code,{children:"{resolvedPaths: ['\\\\.(s[ac]ss)$'] }"}),", \u5bf9\u4e8e transform \u94a9\u5b50\u9ed8\u8ba4\u4e3a ",(0,a.jsx)(e.code,{children:"{ moduleTypes: ['sass'] }"}),"\u3002"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"resolvedPaths"}),": \u4ec5\u5904\u7406\u8fd9\u4e9b\u8def\u5f84\u4e0b\u7684\u6587\u4ef6\u3002 \u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"moduleTypes"}),"\uff1a\u4ec5\u5904\u7406\u5177\u6709\u8fd9\u4e9b\u6a21\u5757\u7c7b\u578b\u7684\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"resolvedPaths"})," \u548c ",(0,a.jsx)(e.code,{children:"moduleTypes"})," \u53d6\u5e76\u96c6\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u793a\u4f8b:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({\n      filters: {\n        // all files end with .custom-css will be processed\n        resolvedPaths: ['\\\\.custom-sass$'],\n        moduleTypes: ['sass']\n      }\n    })\n  ]\n}\n\nexport default config;\n"})}),"\n",(0,a.jsx)(e.h3,{id:"implementation",children:"implementation"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"sass"})," \u7684 ",(0,a.jsx)(e.code,{children:"implementation"})," \u5305\u540d\u79f0\u3002 \u9ed8\u8ba4\u4e3a ",(0,a.jsx)(e.code,{children:"sass"}),"\u3002 \u5982\u679c\u4f60\u60f3\u4f7f\u7528",(0,a.jsx)(e.code,{children:"sass-embedded"}),"\uff0c\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a",(0,a.jsx)(e.code,{children:"sass-embedded"}),"\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({\n      implementation: 'sass-embedded'\n    })\n  ]\n}\n"})}),"\n",(0,a.jsx)(e.admonition,{type:"note",children:(0,a.jsxs)(e.p,{children:["\u60a8\u5e94\u8be5\u624b\u52a8\u5b89\u88c5 ",(0,a.jsx)(e.code,{children:"sass-embedded"}),"\u3002"]})}),"\n",(0,a.jsx)(e.h3,{id:"additionaldata",children:"additionalData"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"type AdditionalDataOption = string | ((content?: string, resolvePath?: string) => string | Promise<string>);\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u8981\u6dfb\u52a0\u5230\u6bcf\u4e2a sass \u6587\u4ef6\u7684\u9644\u52a0\u6570\u636e\u3002 \u4f8b\u5b50\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({\n      // add variables.sass to every sass file\n      additionalData: `\n        @import \"./src/styles/variables.scss\";\n      `\n    })\n  ]\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"Sass \u6587\u4ef6"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sass",metastring:'title="index.scss"',children:".foo {\n  color: @primary-color;\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"additionalData"})," \u5c06\u4f1a\u88ab\u6dfb\u52a0\u5230\u8fd9\u4e2a\u6587\u4ef6\u7684\u5934\u90e8\uff1a"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sass",metastring:'title="index.scss"',children:'@import "./src/styles/variables.scss";\n\n.foo {\n  color: @primary-color;\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u51fd\u6570\u5f62\u5f0f\u7528\u6cd5:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSass from '@farmfe/js-plugin-sass';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSass({\n      // add variables.sass to every sass file\n      additionalData: (content, resolvePath) => {\n        if (resolvePath === '/path/to/index.sass') {\n          return `\n            @import \"./src/styles/variables.sass\";\n          `;\n        }\n      }\n    })\n  ]\n}\n"})}),"\n",(0,a.jsx)(e.h3,{id:"globals",children:"globals"}),"\n",(0,a.jsxs)(e.p,{children:["\u5168\u5c40 sass \u6587\u4ef6\u3002 \u8fd9\u4e9b\u6587\u4ef6\u5c06\u6dfb\u52a0\u5230\u6bcf\u4e2a sass \u6587\u4ef6\u7684\u9876\u90e8\u3002 \u5b83\u4e0e ",(0,a.jsx)(e.code,{children:"additionalData"})," \u76f8\u540c\uff0c\u4f46\u66f4\u65b9\u4fbf\u3002"]})]})}function m(s={}){const{wrapper:e}={...(0,r.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(f,{...s})}):f(s)}},8382:(s,e,n)=>{n.d(e,{A:()=>i});n(758);var a=n(3526);const r={tabItem:"tabItem_dhsV"};var l=n(6070);function i(s){let{children:e,hidden:n,className:i}=s;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n,children:e})}},7207:(s,e,n)=>{n.d(e,{A:()=>w});var a=n(758),r=n(3526),l=n(7144),i=n(5557),t=n(2227),o=n(773),c=n(7626),d=n(8041);function u(s){return a.Children.toArray(s).filter((s=>"\n"!==s)).map((s=>{if(!s||(0,a.isValidElement)(s)&&function(s){const{props:e}=s;return!!e&&"object"==typeof e&&"value"in e}(s))return s;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof s.type?s.type:s.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(s){const{values:e,children:n}=s;return(0,a.useMemo)((()=>{const s=e??function(s){return u(s).map((s=>{let{props:{value:e,label:n,attributes:a,default:r}}=s;return{value:e,label:n,attributes:a,default:r}}))}(n);return function(s){const e=(0,c.X)(s,((s,e)=>s.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((s=>s.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(s),s}),[e,n])}function f(s){let{value:e,tabValues:n}=s;return n.some((s=>s.value===e))}function m(s){let{queryString:e=!1,groupId:n}=s;const r=(0,i.W6)(),l=function(s){let{queryString:e=!1,groupId:n}=s;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,o.aZ)(l),(0,a.useCallback)((s=>{if(!l)return;const e=new URLSearchParams(r.location.search);e.set(l,s),r.replace({...r.location,search:e.toString()})}),[l,r])]}function h(s){const{defaultValue:e,queryString:n=!1,groupId:r}=s,l=p(s),[i,o]=(0,a.useState)((()=>function(s){let{defaultValue:e,tabValues:n}=s;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((s=>s.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=n.find((s=>s.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:l}))),[c,u]=m({queryString:n,groupId:r}),[h,g]=function(s){let{groupId:e}=s;const n=function(s){return s?`docusaurus.tab.${s}`:null}(e),[r,l]=(0,d.Dv)(n);return[r,(0,a.useCallback)((s=>{n&&l.set(s)}),[n,l])]}({groupId:r}),j=(()=>{const s=c??h;return f({value:s,tabValues:l})?s:null})();(0,t.A)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,a.useCallback)((s=>{if(!f({value:s,tabValues:l}))throw new Error(`Can't select invalid tab value=${s}`);o(s),u(s),g(s)}),[u,g,l]),tabValues:l}}var g=n(5441);const j={tabList:"tabList_tOLG",tabItem:"tabItem_ZfBa"};var x=n(6070);function b(s){let{className:e,block:n,selectedValue:a,selectValue:i,tabValues:t}=s;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=s=>{const e=s.currentTarget,n=o.indexOf(e),r=t[n].value;r!==a&&(c(e),i(r))},u=s=>{let e=null;switch(s.key){case"Enter":d(s);break;case"ArrowRight":{const n=o.indexOf(s.currentTarget)+1;e=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(s.currentTarget)-1;e=o[n]??o[o.length-1];break}}e?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},e),children:t.map((s=>{let{value:e,label:n,attributes:l}=s;return(0,x.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:s=>o.push(s),onKeyDown:u,onClick:d,...l,className:(0,r.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":a===e}),children:n??e},e)}))})}function v(s){let{lazy:e,children:n,selectedValue:r}=s;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const s=l.find((s=>s.props.value===r));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((s,e)=>(0,a.cloneElement)(s,{key:e,hidden:s.props.value!==r})))})}function y(s){const e=h(s);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,x.jsx)(b,{...e,...s}),(0,x.jsx)(v,{...e,...s})]})}function w(s){const e=(0,g.A)();return(0,x.jsx)(y,{...s,children:u(s.children)},String(e))}}}]);