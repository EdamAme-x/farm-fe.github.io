"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[8295],{9775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=t(6070),s=t(5710),a=t(2802),i=t(4816),l=t(451);const o={},u="@farmfe/js-plugin-dts",c={id:"plugins/official-plugins/js-dts",title:"@farmfe/js-plugin-dts",description:"\u652f\u6301 .d.ts \u6587\u4ef6\u3002 \u8be5\u63d2\u4ef6\u7528\u4e8e\u6784\u5efa\u7684\u5de5\u5177\u5e93\uff0c\u4e3a\u60a8\u7684 ts \u4ee3\u7801\u751f\u6210\u201c.d.ts\u201d",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.x/plugins/official-plugins/js-dts.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/js-dts",permalink:"/zh/docs/0.x/plugins/official-plugins/js-dts",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/plugins/official-plugins/js-dts.mdx",tags:[],version:"0.x",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/js-plugin-svgr",permalink:"/zh/docs/0.x/plugins/official-plugins/js-svgr"},next:{title:"\u793e\u533a\u63d2\u4ef6",permalink:"/zh/docs/0.x/plugins/community-plugins"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2}];function f(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"farmfejs-plugin-dts",children:"@farmfe/js-plugin-dts"}),"\n",(0,r.jsxs)(n.p,{children:["\u652f\u6301 ",(0,r.jsx)(n.code,{children:".d.ts"})," \u6587\u4ef6\u3002 \u8be5\u63d2\u4ef6\u7528\u4e8e\u6784\u5efa\u7684\u5de5\u5177\u5e93\uff0c\u4e3a\u60a8\u7684 ts \u4ee3\u7801\u751f\u6210\u201c.d.ts\u201d"]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(l.A,{value:"npm",label:"npm",children:(0,r.jsx)(a.A,{children:"npm install @farmfe/js-plugin-dts"})}),(0,r.jsx)(l.A,{value:"yarn",label:"yarn",children:(0,r.jsx)(a.A,{children:"yarn add @farmfe/js-plugin-dts"})}),(0,r.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(a.A,{children:"pnpm add @farmfe/js-plugin-dts"})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"{2,6}",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginDts from '@farmfe/js-plugin-dts';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginDts({ /* options */ })\n  ]\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { ts, Diagnostic } from 'ts-morph';\n\nexport interface DtsPluginOptions {\n  /**\n   * Depends on the root directory\n   */\n  root?: string;\n\n  /**\n   * Declaration files output directory\n   */\n  outputDir?: string | string[];\n\n  /**\n   * set the root path of the entry files\n   */\n  entryRoot?: string;\n\n  /**\n   * Project init compilerOptions using by ts-morph\n   */\n  compilerOptions?: ts.CompilerOptions | null;\n\n  /**\n   * Project init tsconfig.json file path by ts-morph\n   */\n  tsConfigPath?: string;\n\n  /**\n   * set include glob\n   */\n  include?: string | string[];\n\n  /**\n   * set exclude glob\n   */\n  exclude?: string | string[];\n\n  /**\n   * Whether copy .d.ts source files into outputDir\n   *\n   * @default false\n   */\n  copyDtsFiles?: boolean;\n\n  /**\n   * Whether emit nothing when has any diagnostic\n   *\n   * @default false\n   */\n  noEmitOnError?: boolean;\n\n  /**\n   * Whether skip typescript diagnostics\n   *\n   * @default true\n   */\n  skipDiagnostics?: boolean;\n\n  /**\n   * Customize typescript lib folder path\n   *\n   * @default undefined\n   */\n  libFolderPath?: string;\n\n  /**\n   * According to the length to judge whether there is any type error\n   */\n  afterDiagnostic?: (diagnostics: Diagnostic[]) => void | Promise<void>;\n}\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},451:(e,n,t)=>{t.d(n,{A:()=>i});t(758);var r=t(3526);const s={tabItem:"tabItem_IyuO"};var a=t(6070);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},4816:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(758),s=t(3526),a=t(2692),i=t(5557),l=t(2223),o=t(7857),u=t(1966),c=t(1534);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,d]=h({queryString:t,groupId:s}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,c.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),b=(()=>{const e=u??g;return f({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=t(589);const b={tabList:"tabList_Q9tq",tabItem:"tabItem_c7GU"};var v=t(6070);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),s=l[t].value;s!==r&&(u(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(x,{...e,...n})]})}function w(e){const n=(0,m.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}}}]);