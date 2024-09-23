"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[60],{3432:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var s=r(6070),t=r(6247),l=r(3051),a=r(8993),i=r(1885);const o={},u="@farmfe/js-plugin-svgr",c={id:"plugins/official-plugins/js-svgr",title:"@farmfe/js-plugin-svgr",description:"Support React SVG Components for Farm.",source:"@site/docs/plugins/official-plugins/js-svgr.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/js-svgr",permalink:"/docs/plugins/official-plugins/js-svgr",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/js-svgr.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/js-plugin-sass",permalink:"/docs/plugins/official-plugins/js-sass"},next:{title:"@farmfe/js-plugin-dts",permalink:"/docs/plugins/official-plugins/js-dts"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"svgrOptions",id:"svgroptions",level:3},{value:"filters",id:"filters",level:3}];function f(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"farmfejs-plugin-svgr",children:"@farmfe/js-plugin-svgr"}),"\n",(0,s.jsxs)(n.p,{children:["Support ",(0,s.jsx)(n.code,{children:"React SVG Components"})," for Farm."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"npm",label:"npm",children:(0,s.jsx)(l.A,{children:"npm install @farmfe/js-plugin-svgr"})}),(0,s.jsx)(i.A,{value:"yarn",label:"yarn",children:(0,s.jsx)(l.A,{children:"yarn add @farmfe/js-plugin-svgr"})}),(0,s.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(l.A,{children:"pnpm add @farmfe/js-plugin-svgr"})})]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"{2,6}",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSvgr from '@farmfe/js-plugin-svgr';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSvgr({ /* options */ })\n  ]\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export interface FarmSvgrPluginOptions {\n  svgrOptions?: SvgrOptions;\n  filters?: {\n    resolvedPaths?: string[];\n  };\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"svgroptions",children:"svgrOptions"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://react-svgr.com/docs/options/",children:"svgr options"})," for more details."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import path from 'node:path';\nimport { UserConfig } from '@farmfe/core';\nimport farmJsPluginSvgr from '@farmfe/js-plugin-svgr';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSvgr({\n      svgrOptions: {\n        loadPaths: [path.resolve(process.cwd(), 'styles')]\n      }\n    })\n  ]\n}\n\nexport default config;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"filters",children:"filters"}),"\n",(0,s.jsxs)(n.p,{children:["Which files should be processed by ",(0,s.jsx)(n.code,{children:"svgr"}),". Default to ",(0,s.jsx)(n.code,{children:"{ resolvedPaths: ['\\\\.svg$'] }"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"resolvedPaths"}),": Only files under these paths will be processed. Support regex."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSvgr from '@farmfe/js-plugin-svgr';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSvgr({\n      filters: {\n        // all files end with .custom-svg will be processed\n        resolvedPaths: ['\\\\.custom-svg$'],\n      }\n    })\n  ]\n}\n\nexport default config;\n"})})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},1885:(e,n,r)=>{r.d(n,{A:()=>a});r(758);var s=r(3526);const t={tabItem:"tabItem_g4l_"};var l=r(6070);function a(e){let{children:n,hidden:r,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,a),hidden:r,children:n})}},8993:(e,n,r)=>{r.d(n,{A:()=>w});var s=r(758),t=r(3526),l=r(5118),a=r(5557),i=r(9153),o=r(9347),u=r(7056),c=r(4113);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function f(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const t=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function h(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,l=p(e),[a,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[u,d]=g({queryString:r,groupId:t}),[h,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,c.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),v=(()=>{const e=u??h;return f({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=r(4659);const v={tabList:"tabList_MeHd",tabItem:"tabItem_yam7"};var b=r(6070);function j(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),t=i[r].value;t!==s&&(u(n),a(t))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,t.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:t}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=h(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",v.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(x,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}}}]);