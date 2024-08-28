"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[6039],{7120:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var r=i(6070),s=i(8355);const d={},c="3. \u4f7f\u7528 Farm \u6784\u5efa\u751f\u4ea7\u9879\u76ee",l={id:"tutorials/build",title:"3. \u4f7f\u7528 Farm \u6784\u5efa\u751f\u4ea7\u9879\u76ee",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm \u5df2\u542f\u7528\u5bf9\u751f\u4ea7\u7248\u672c\u7684\u4ee5\u4e0b\u529f\u80fd\u7684\u652f\u6301\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorials/3-build.md",sourceDirName:"tutorials",slug:"/tutorials/build",permalink:"/zh/docs/tutorials/build",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/tutorials/3-build.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2. \u4f7f\u7528 Farm \u5f00\u53d1\u9879\u76ee",permalink:"/zh/docs/tutorials/start"},next:{title:"DevServer \u548c HMR",permalink:"/zh/docs/features/dev-server"}},t={},o=[{value:"\u914d\u7f6e\u8f93\u51fa\u76ee\u5f55",id:"\u914d\u7f6e\u8f93\u51fa\u76ee\u5f55",level:2},{value:"\u9884\u89c8\u6784\u5efa\u7684\u8d44\u6e90",id:"\u9884\u89c8\u6784\u5efa\u7684\u8d44\u6e90",level:2},{value:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",level:2},{value:"\u914d\u7f6e Tree Shake \u548c Minify",id:"\u914d\u7f6e-tree-shake-\u548c-minify",level:2},{value:"\u914d\u7f6e\u5c40\u90e8\u6253\u5305\u7b56\u7565",id:"\u914d\u7f6e\u5c40\u90e8\u6253\u5305\u7b56\u7565",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"3-\u4f7f\u7528-farm-\u6784\u5efa\u751f\u4ea7\u9879\u76ee",children:"3. \u4f7f\u7528 Farm \u6784\u5efa\u751f\u4ea7\u9879\u76ee"}),"\n",(0,r.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm \u5df2\u542f\u7528\u5bf9\u751f\u4ea7\u7248\u672c\u7684\u4ee5\u4e0b\u529f\u80fd\u7684\u652f\u6301\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Tree Shake"})}),"\uff1a\u88c1\u526a\u548c\u8fc7\u6ee4\u4e0d\u76f8\u5173\u7684\u6a21\u5757\u548c\u4ee3\u7801"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"\u538b\u7f29"})}),"\uff1a\u538b\u7f29\u5e76\u6df7\u6dc6\u8f93\u51fa\u8d44\u6e90\uff0c\u6709\u6548\u51cf\u5c0f\u4ea7\u7269\u4f53\u79ef\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"\u81ea\u52a8\u6ce8\u5165Polyfill"})}),"\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b Farm \u964d\u7ea7\u5230\u73b0\u4ee3\u6d4f\u89c8\u5668(ES7)\uff0c\u5982\u679c\u9700\u8981\u65e7\u7248\u6d4f\u89c8\u5668\u652f\u6301\uff0c\u8bf7\u914d\u7f6e",(0,r.jsx)(n.a,{href:"/docs/config/compilation-options#output-targetenv",children:(0,r.jsx)(n.code,{children:"targetEnv"})})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"\u81ea\u52a8\u5c40\u90e8\u6253\u5305"})}),"\uff1a\u6839\u636e\u4f9d\u8d56\u5173\u7cfb\u548c\u5927\u5c0f\uff0c\u5bf9\u9879\u76ee\u8fdb\u884c\u5c40\u90e8\u6253\u5305\u3002 \u5bf9\u4e8e\u6bcf\u4e2a\u8d44\u6e90\u8bf7\u6c42\uff0c\u4f1a\u751f\u6210\u5927\u7ea625\u4e2a\u8d44\u6e90\uff0c\u4ee5\u4fdd\u8bc1\u5e76\u884c\u52a0\u8f7d\u6027\u80fd\uff0c\u5e76\u5c3d\u53ef\u80fd\u63d0\u9ad8\u7f13\u5b58\u547d\u4e2d\u7387\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e\u8f93\u51fa\u76ee\u5f55",children:"\u914d\u7f6e\u8f93\u51fa\u76ee\u5f55"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"package.json"})," \u4e2d\u6dfb\u52a0\u6784\u5efa\u811a\u672c\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="package.json" {7-8}',children:'{\n   "name": "1-create-a-project",\n   "version": "1.0.0",\n   "scripts": {\n     "test": "echo \\"Error: no test specified\\" && exit 1",\n     "start": "farm start",\n     "build": "farm build",\n     "preview": "farm preview"\n   },\n   // ...ignore other fields\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540e\u6267\u884c",(0,r.jsx)(n.code,{children:"npm run build"}),"\uff0c\u6784\u5efa\u7684\u8d44\u6e90\u5c06\u88ab\u751f\u6210\u5230",(0,r.jsx)(n.code,{children:"build"}),"\u76ee\u5f55"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"build\n\u251c\u2500 favicon.ico\n\u251c\u2500 index.html\n\u251c\u2500 index_02bc.bd68e90b.js\n\u251c\u2500 index_02bc.bd68e90b.js.map\n\u251c\u2500 index_1c74.4b50f73e.js\n\u251c\u2500 index_7734.440d56a3.js\n\u251c\u2500 index_880b.4631ecee.js\n\u251c\u2500 index_8d49.63f7b906.css\n\u251c\u2500 index_8d49.63f7b906.css.map\n\u251c\u2500 index_9025.84e1f8e6.js\n\u251c\u2500 index_ca37.f2c276ef.js\n\u251c\u2500 index_ef2f.e25349d8.js\n\u251c\u2500 index_f346.369a7312.js\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u60a8\u60f3\u81ea\u5b9a\u4e49\u8d44\u6e90\u751f\u6210\u7684\u8def\u5f84\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/config/compilation-options#outputfilename",children:(0,r.jsx)(n.code,{children:"output.filename"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/config/compilation-options#outputassetsfilename",children:(0,r.jsx)(n.code,{children:"output.assetsFilename"})})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import defineConfig from '@farmfe/core';\n\nexport default defineConfig({\n  compilation: {\n    output: {\n      path: 'build',\n      filename: 'assets/[name].[hash].[ext]',\n      assetsFilename: 'static/[resourceName].[ext]'\n    }\n  }\n})\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e\u4e0a\u9762\u7684\u793a\u4f8b\uff0c\u6240\u6709",(0,r.jsx)(n.code,{children:"js/css"}),"\u5c06\u88ab\u53d1\u9001\u5230",(0,r.jsx)(n.code,{children:"build/assets/"}),"\uff08\u4f8b\u5982\uff1a",(0,r.jsx)(n.code,{children:"build/assets/index-ea54.abbe3e.js"}),"\uff09\u3002 \u6240\u6709\u9759\u6001\u8d44\u6e90\uff08\u4f8b\u5982\u56fe\u50cf\uff09\u90fd\u5c06\u53d1\u9001\u5230",(0,r.jsx)(n.code,{children:"build/static"}),"\uff08\u4f8b\u5982\uff1a",(0,r.jsx)(n.code,{children:"build/static/background.png"}),"\uff09"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9884\u89c8\u6784\u5efa\u7684\u8d44\u6e90",children:"\u9884\u89c8\u6784\u5efa\u7684\u8d44\u6e90"}),"\n",(0,r.jsxs)(n.p,{children:["\u8d44\u6e90\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(n.code,{children:"npm run Preview"}),"\u8fdb\u884c\u9884\u89c8\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ npm run preview\n\n> 3-build@1.0.0 preview\n> farm preview\n\n[ Farm ] Using config file at /root/tutorials/3-build-for-production/farm.config.ts\n[ Farm ] preview server running at: \n\n[ Farm ] > Local:   http://localhost:1911/\n[ Farm ] > Network: http://198.18.0.1:1911/\n[ Farm ] > Network: http://10.242.197.146:1911/\n[ Farm ] > Network: http://192.168.1.31:1911/\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6253\u5f00",(0,r.jsx)(n.code,{children:"http://localhost:1911/"}),"\u6765\u9884\u89c8\u9879\u76ee\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",children:"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027"}),"\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cFarm \u5c06\u9879\u76ee\u6784\u5efa\u5230\u672c\u673a\u652f\u6301",(0,r.jsx)(n.code,{children:"async/await"}),"\u7684\u73b0\u4ee3\u6d4f\u89c8\u5668\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Chrome >= 62"}),"\n",(0,r.jsx)(n.li,{children:"Firefox >= 63"}),"\n",(0,r.jsx)(n.li,{children:"Safari >= 13.1"}),"\n",(0,r.jsx)(n.li,{children:"Edge >= 79"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.a,{href:"/docs/config/compilation-options#output-targetenv",children:"output.targetEnv"})," \u6765\u914d\u7f6e\u76ee\u6807\u6d4f\u89c8\u5668\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { defineConfig } from '@farmfe/core';\n\nexport default defineConfig({\n  compilation: {\n    output: {\n      targetEnv: 'browser-legacy'\n    }\n  }\n})\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0cFarm \u4f1a\u5c06\u8bed\u6cd5\u964d\u7ea7\u4e3a ",(0,r.jsx)(n.code,{children:"es5"})," \u5e76\u81ea\u52a8\u6ce8\u5165 polyfill\u3002 \u7136\u540e\u6211\u4eec\u5fc5\u987b\u5b89\u88c5",(0,r.jsx)(n.code,{children:"core-js@3"}),"\u6765\u8fdb\u884c",(0,r.jsx)(n.code,{children:"polyfill"}),"\u6ce8\u5165\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"pnpm add -D core-js@3\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u60a8\u7684\u76ee\u6807\u662f\u65e7\u7248\u6d4f\u89c8\u5668\uff0c\u5219\u9700\u8981\u624b\u52a8\u5b89\u88c5 ",(0,r.jsx)(n.code,{children:"core-js@3"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u60f3\u66f4\u7cbe\u786e\u5730\u914d\u7f6e\u6d4f\u89c8\u5668\u76ee\u6807\uff0c\u8bf7\u53c2\u9605",(0,r.jsx)(n.a,{href:"/docs/advanced/polyfill",children:"\u8bed\u6cd5 Downgrade \u548c Polyfill"})]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e-tree-shake-\u548c-minify",children:"\u914d\u7f6e Tree Shake \u548c Minify"}),"\n",(0,r.jsxs)(n.p,{children:["\u51fa\u4e8e\u6027\u80fd\u539f\u56e0\uff0c\u50cf",(0,r.jsx)(n.code,{children:"treeShake"}),"\u548c",(0,r.jsx)(n.code,{children:"minify"}),"\u8fd9\u6837\u7684\u751f\u4ea7\u4f18\u5316\u5728",(0,r.jsx)(n.code,{children:"development"}),"\u4e2d\u9ed8\u8ba4\u88ab",(0,r.jsx)(n.code,{children:"\u7981\u7528"}),"\uff0c\u800c\u5728",(0,r.jsx)(n.code,{children:"\u751f\u4ea7"}),"\u4e2d\u9ed8\u8ba4\u88ab",(0,r.jsx)(n.code,{children:"\u542f\u7528"}),"\u3002 \u4f46\u5982\u679c\u624b\u52a8\u914d\u7f6e\u4e86",(0,r.jsx)(n.code,{children:"treeShake"}),"\u6216",(0,r.jsx)(n.code,{children:"minify"}),"\uff0c\u5219\u65e0\u8bba",(0,r.jsx)(n.code,{children:"development"}),"\u6216",(0,r.jsx)(n.code,{children:"productive"}),"\u90fd\u5c06\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6709\u5173 Tree Shake \u548c Minify \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/advanced/tree-shake",children:"Tree Shake"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/advanced/minification",children:"Minification"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6e\u5c40\u90e8\u6253\u5305\u7b56\u7565",children:"\u914d\u7f6e\u5c40\u90e8\u6253\u5305\u7b56\u7565"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u8be6\u7ec6\u4fe1\u606f\u53c2\u8003",(0,r.jsx)(n.a,{href:"/docs/advanced/partial-bundling",children:"\u5c40\u90e8\u6253\u5305"}),"\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:["Farm \u5df2\u7ecf\u542f\u7528\u4e86\u6253\u5305\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u786e\u4fdd\u60a8\u786e\u5b9e\u9700\u8981\u624b\u52a8\u914d\u7f6e\u6253\u5305\u7b56\u7565\uff0c\u53c2\u8003",(0,r.jsx)(n.a,{href:"/docs/advanced/partial-bundling",children:"\u5c40\u90e8\u6253\u5305"})," \u4e86\u89e3\u8be6\u60c5\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8355:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>l});var r=i(758);const s={},d=r.createContext(s);function c(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);