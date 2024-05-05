"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[8879],{2338:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=s(1527),r=s(5696);const l={},t="\u4f7f\u7528\u63d2\u4ef6",c={id:"using-plugins",title:"\u4f7f\u7528\u63d2\u4ef6",description:"Farm\u652f\u63014\u79cd\u63d2\u4ef6\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/using-plugins.md",sourceDirName:".",slug:"/using-plugins",permalink:"/zh/docs/using-plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/using-plugins.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/quick-start"},next:{title:"\u8d21\u732e\u6307\u5357",permalink:"/zh/docs/contribution"}},o={},d=[{value:"Farm \u7f16\u8bd1\u63d2\u4ef6",id:"farm-\u7f16\u8bd1\u63d2\u4ef6",level:2},{value:"\u4f7f\u7528 Rust \u63d2\u4ef6",id:"\u4f7f\u7528-rust-\u63d2\u4ef6",level:3},{value:"\u4f7f\u7528 Js \u63d2\u4ef6",id:"\u4f7f\u7528-js-\u63d2\u4ef6",level:3},{value:"\u4f7f\u7528 Vite/Rollup/Unplugin \u63d2\u4ef6",id:"\u4f7f\u7528-viterollupunplugin-\u63d2\u4ef6",level:2},{value:"Farm \u8fd0\u884c\u65f6\u63d2\u4ef6",id:"farm-\u8fd0\u884c\u65f6\u63d2\u4ef6",level:2},{value:"\u4f7f\u7528 SWC \u63d2\u4ef6",id:"\u4f7f\u7528-swc-\u63d2\u4ef6",level:2}];function u(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u4f7f\u7528\u63d2\u4ef6",children:"\u4f7f\u7528\u63d2\u4ef6"}),"\n",(0,i.jsx)(e.p,{children:"Farm\u652f\u63014\u79cd\u63d2\u4ef6\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"Farm \u7f16\u8bd1\u63d2\u4ef6"})}),"\uff1a\u652f\u6301 Rust \u63d2\u4ef6\u548c Js \u63d2\u4ef6\uff0c\u91c7\u7528 rollup \u98ce\u683c\u7684 hooks\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"Vite/Rollup/Unplugin \u63d2\u4ef6"})}),"\uff1aFarm \u5f00\u7bb1\u5373\u7528\u652f\u6301 Vite/Rollup/Unplugin \u63d2\u4ef6"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"Farm \u8fd0\u884c\u65f6\u63d2\u4ef6"})}),"\uff1a\u4e3a Farm \u7684\u8fd0\u884c\u65f6\u7cfb\u7edf\u6dfb\u52a0\u529f\u80fd\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"Swc \u63d2\u4ef6"})}),"\uff1aFarm \u5f00\u7bb1\u5373\u7528\u652f\u6301 Swc \u63d2\u4ef6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["\u5982\u4f55\u7f16\u5199\u81ea\u5df1\u7684\u63d2\u4ef6\uff0c\u8bf7\u53c2\u8003",(0,i.jsx)(e.a,{href:"/docs/plugins/writing-plugins/overview",children:"\u63d2\u4ef6"})]})}),"\n",(0,i.jsx)(e.h2,{id:"farm-\u7f16\u8bd1\u63d2\u4ef6",children:"Farm \u7f16\u8bd1\u63d2\u4ef6"}),"\n",(0,i.jsx)(e.p,{children:"\u9996\u5148\uff0c\u5b89\u88c5\u60a8\u9700\u8981\u7684\u63d2\u4ef6\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"pnpm add -D @farmfe/plugin-sass @farmfe/js-plugin-postcss\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"plugins"})," \u914d\u7f6e Farm \u7f16\u8bd1\u63d2\u4ef6\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:'import farmPostcssPlugin from "@farmfe/js-plugin-postcss";\n\nexport default defineConfig({\n  // ...\n  plugins: [\n     // Rust\u63d2\u4ef6\uff0c\u914d\u7f6e\u5176\u5305\u540d\n    "@farmfe/plugin-sass",\n    // JS\u63d2\u4ef6\uff0c\u914d\u7f6e\u63d2\u4ef6\u5bf9\u8c61\n    farmPostcssPlugin()\n  ],\n});\n'})}),"\n",(0,i.jsx)(e.p,{children:"Farm\u7f16\u8bd1\u63d2\u4ef6\u67092\u79cd\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"Rust Plugins"})}),"\uff1a\u7528 Rust \u7f16\u5199\uff0c\u5177\u6709\u6700\u4f73\u6027\u80fd\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"Js Plugins"})}),"\uff1a\u7528JS/TS\u7f16\u5199\uff0c\u7528\u4e8e\u517c\u5bb9\u5f53\u524d\u7684JS\u751f\u6001\u7cfb\u7edf"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u4f7f\u7528-rust-\u63d2\u4ef6",children:"\u4f7f\u7528 Rust \u63d2\u4ef6"}),"\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"package name"})," \u6765\u914d\u7f6e Rust \u63d2\u4ef6\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:'export default defineConfig({\n  // ...\n  plugins: [\n    "@farmfe/plugin-sass",\n  ],\n});\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u5bf9\u4e8e\u4e0a\u9762\u7684\u4f8b\u5b50\uff0cFarm \u5c06\u89e3\u6790\u5305 ",(0,i.jsx)(e.code,{children:"@farmfe/plugin-sass"})," \u5e76\u5c06\u5176\u89c6\u4e3a Farm Rust \u63d2\u4ef6\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u8981\u4e3a Rust \u63d2\u4ef6\u914d\u7f6e\u9009\u9879\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,i.jsx)(e.code,{children:"\u6570\u7ec4\u8bed\u6cd5"}),"\uff0c\u5982",(0,i.jsx)(e.code,{children:"[packageName, optionsObject]"}),"\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:'export default defineConfig({\n  // ...\n  plugins: [\n    // \u4f7f\u7528\u6570\u7ec4\u8bed\u6cd5\u6765\u914d\u7f6e Rust \u63d2\u4ef6\n    [\n      // Rust \u63d2\u4ef6\u7684\u540d\u79f0\n      "@farmfe/plugin-sass",\n      // Rust \u63d2\u4ef6\u7684\u9009\u9879\n      {\n        additionalData: \'@use "@/global-variables.scss";\'\n      }\n    ],\n  ],\n});\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u76ee\u524d Farm \u5b98\u65b9\u652f\u6301 2 \u4e2a Rust \u63d2\u4ef6\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"@farmfe/plugin-react"})}),"\uff1aFarm rust \u63d2\u4ef6\uff0c\u7528\u4e8e React jsx \u7f16\u8bd1\u548c React-refresh \u6ce8\u5165\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.code,{children:"@farmfe/plugin-sass"})}),"\uff1a\u7528\u4e8e scss \u6587\u4ef6\u7f16\u8bd1\u7684 Farm rust \u63d2\u4ef6\uff0c\u5185\u90e8\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"sass-embedded"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["\u8981\u4e86\u89e3\u6709\u5173 rust \u63d2\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.jsx)(e.a,{href:"/docs/plugins/official-plugins/overview#rust-%E6%8F%92%E4%BB%B6",children:"Rust \u63d2\u4ef6"})]})}),"\n",(0,i.jsx)(e.h3,{id:"\u4f7f\u7528-js-\u63d2\u4ef6",children:"\u4f7f\u7528 Js \u63d2\u4ef6"}),"\n",(0,i.jsx)(e.p,{children:"Farm JS \u63d2\u4ef6\u662f\u4e00\u4e2a\u4ee5\u65b9\u6cd5\u4e3a\u94a9\u5b50\u7684 JS \u5bf9\u8c61\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:'import farmPostcssPlugin from "@farmfe/js-plugin-postcss";\n\nexport default defineConfig({\n  plugins: [\n    farmPostcssPlugin({\n      // ... \u914d\u7f6e postcss \u9009\u9879\n    })\n  ],\n});\n'})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"farmPostcssPlugin()"}),"\u8fd4\u56de\u4e00\u4e2a\u63d2\u4ef6\u5bf9\u8c61\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5176\u53c2\u6570\u4f20\u9012\u4efb\u4f55 postcss \u9009\u9879\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,i.jsx)(e.code,{children:"priority"}),"\u6765\u63a7\u5236\u63d2\u4ef6\u7684\u987a\u5e8f\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts" {10,11}',children:'import farmPostcssPlugin from "@farmfe/js-plugin-postcss";\n\nexport default defineConfig({\n  plugins: [\n    {\n      ...farmPostcssPlugin({\n        // ... configure postcss options\n      }),\n      // larger priority will be executed first, priority of internal plugin are 100.\n      priority: 1000,\n    }\n  ],\n});\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u5185\u90e8\u63d2\u4ef6\u7684\u4f18\u5148\u7ea7\u90fd\u662f100\uff0c\u5982\u679c\u60f3\u8ba9\u63d2\u4ef6\u5148\u6267\u884c\uff0c\u5c31\u8bbe\u7f6e\u5927\u4e8e100\uff0c\u5426\u5219\u8bbe\u7f6e\u5c0f\u4e8e100\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u4f60\u60f3\u5feb\u901f\u6dfb\u52a0 Farm JS \u63d2\u4ef6\uff0c\u53ea\u9700\u914d\u7f6e\u4e00\u4e2a\u63d2\u4ef6\u5bf9\u8c61\u5373\u53ef\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import readFileSync from 'fs';\n\nexport default defineConfig({\n  plugins: [\n    // \u914d\u7f6e\u81ea\u5b9a\u4e49\u63d2\u4ef6\n    {\n      // \u63d2\u4ef6\u540d\u79f0\uff0c\u5fc5\u586b\n      name: 'my-first-farm-plugin',\n      // \u8fd9\u4e2a\u63d2\u4ef6\u7684\u4f18\u5148\u7ea7\uff0c\u503c\u8d8a\u5927\u5148\u6267\u884c\uff0c\u9ed8\u8ba4100\u3002\n      priority: 1000,\n      // \u5b9a\u4e49\u4e00\u4e2a\u52a0\u8f7d\u94a9\u5b50\u6765\u786e\u5b9a\u5982\u4f55\u52a0\u8f7d\u6a21\u5757\n      load: {\n        // \u4e3a\u4e86\u63d0\u9ad8\u6027\u80fd\uff0c\u5982\u679c\u6a21\u5757\u4e0e\u8fc7\u6ee4\u5668\u4e0d\u5339\u914d\uff0c\u5c06\u88ab\u8df3\u8fc7\u3002\n        filters: {\n          // \u4ec5\u5bf9 .png \u6587\u4ef6\u6267\u884c\u3002\n          resolvedPaths: ['\\\\.txt$']\n        },\n        // \u8be5\u94a9\u5b50\u7684\u6267\u884c\u56de\u8c03\n        executor: (params, context) => {\n          const { resolvedPath } = params;\n          const content = readFileSync(resolvedPath, 'utf-8');\n\n          return {\n            content: `export default '${content}'`,\n            moduleType: 'js'\n          }\n        }\n      }\n    }\n  ],\n});\n"})}),"\n",(0,i.jsx)(e.admonition,{type:"warning",children:(0,i.jsxs)(e.p,{children:["Farm \u4e2d\u7684 js \u63d2\u4ef6\u9700\u8981 ",(0,i.jsx)(e.code,{children:"filters"}),"\u3002 \u56e0\u4e3aJs Plugin\u5b9e\u5728\u662f\u592a\u6162\u4e86\uff0c\u6211\u4eec\u5e94\u8be5\u5c3d\u91cf\u907f\u514d\u6267\u884c\u5b83\u3002\u914d\u7f6e filters \u540e\uff0c\u5bf9\u4e8e\u90a3\u4e9b\u4e0d\u7b26\u5408\u8fc7\u6ee4\u5668\u7684\u6a21\u5757\uff0cFarm \u6839\u672c\u4e0d\u4f1a\u4e3a\u5b83\u4eec\u89e6\u53d1 js \u63d2\u4ef6\u94a9\u5b50\uff01 \u8fd9\u610f\u5473\u7740 Farm \u53ea\u5728 Rust \u4fa7\u5c31\u80fd\u5b89\u5168\u3001\u5e76\u53d1\u5730\u8fdb\u884c\u5904\u7406\uff0c\u4ee5\u6700\u5927\u5316\u63d0\u5347\u7f16\u8bd1\u6027\u80fd\u3002"]})}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Farm Js \u63d2\u4ef6\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,i.jsx)(e.a,{href:"/docs/plugins/official-plugins/overview#js-%E6%8F%92%E4%BB%B6",children:"JS \u63d2\u4ef6"})]})}),"\n",(0,i.jsx)(e.h2,{id:"\u4f7f\u7528-viterollupunplugin-\u63d2\u4ef6",children:"\u4f7f\u7528 Vite/Rollup/Unplugin \u63d2\u4ef6"}),"\n",(0,i.jsx)(e.p,{children:"Farm \u517c\u5bb9 Vite \u63d2\u4ef6\uff0cVite \u63d2\u4ef6\u53ef\u4ee5\u76f4\u63a5\u5728 Farm \u4e2d\u914d\u7f6e\u4f7f\u7528\u3002 \u9996\u5148\u9700\u8981\u5b89\u88c5 vite \u63d2\u4ef6\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"pnpm add @vitejs/plugin-vue @vitejs/plugin-vue-jsx vite -D\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u7136\u540e\u5c31\u53ef\u4ee5\u901a\u8fc7",(0,i.jsx)(e.code,{children:"farm.config.ts"}),"\u4e2d\u7684",(0,i.jsx)(e.code,{children:"vitePlugins"}),"\u76f4\u63a5\u4f7f\u7528vite\u63d2\u4ef6\u4e86\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import vue from '@vitejs/plugin-vue',\nimport vueJsx from '@vitejs/plugin-vue-jsx';\n\nexport default defineConfig({\n  // \u914d\u7f6evite\u63d2\u4ef6\n  vitePlugins: [\n    vue(),\n    vueJsx()\n  ]\n});\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u4e3a\u4e86\u63d0\u9ad8 vite \u63d2\u4ef6\u7684\u6027\u80fd\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u8fd4\u56de",(0,i.jsx)(e.code,{children:"\u8fc7\u6ee4\u5668"}),"\u7684",(0,i.jsx)(e.code,{children:"\u51fd\u6570\u8bed\u6cd5"}),"\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import vue from '@vitejs/plugin-vue',\n\n// // \u4f7f\u7528Farm \u4e2d Vite \u63d2\u4ef6\u7684\u51fd\u6570\u8bed\u6cd5\nfunction configureVitePluginVue() {\n  // \u8fd4\u56de\u63d2\u4ef6\u53ca\u5176\u8fc7\u6ee4\u5668\n  return {\n    // \u4f7f\u7528 vue \u63d2\u4ef6\n    vitePlugin: vue(),\n    // \u4e3a\u5176\u914d\u7f6e\u8fc7\u6ee4\u5668\u3002 \u4e0d\u5339\u914d\u7684\u6a21\u5757\u8def\u5f84\u5c06\u88ab\u8df3\u8fc7\u3002\n    filters: ['\\\\.vue$', '\\\\\\\\0.+']\n  };\n}\n\nexport default defineConfig({\n  vitePlugins: [\n    configureVitePluginVue\n  ]\n});\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528 unplugin\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"pnpm add unplugin-auto-import unplugin-vue-components -D\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 ",(0,i.jsx)(e.code,{children:"vitePlugins"})," \u4e2d\u914d\u7f6e\uff0c\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"unplugin/vite"})," \u6216\u8005 ",(0,i.jsx)(e.code,{children:"unplugin/rollup"})," \u652f\u6301:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"import vue from '@vitejs/plugin-vue',\nimport AutoImport from 'unplugin-auto-import/vite'\nimport Components from 'unplugin-vue-components/vite'\nimport { ElementPlusResolver } from 'unplugin-vue-components/resolvers'\n\nexport default defineConfig({\n  vitePlugins: [\n    vue(),\n    // ...\n    AutoImport({\n      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],\n    }),\n    Components({\n      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],\n    }),\n  ]\n});\n"})}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["\u76ee\u524d\uff0c\u60a8\u53ef\u4ee5\u5728 Farm \u4e2d\u4f7f\u7528",(0,i.jsx)(e.code,{children:"unplugin/farm"}),"\u3001",(0,i.jsx)(e.code,{children:"unplugin/vite"}),"\u548c",(0,i.jsx)(e.code,{children:"unplugin/rollup"}),"\u3002\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f",(0,i.jsx)(e.code,{children:"unplugin/vite"}),"\u6216",(0,i.jsx)(e.code,{children:"unplugin/Rolup"}),"\uff0c\u6709\u4e9b\u5c5e\u6027\u53ef\u80fd\u8fd8\u6ca1\u6709\u5b8c\u5168\u9002\u914d\uff0c\u6216\u8005 Farm \u56e2\u961f\u8ba4\u4e3a\u8be5 ",(0,i.jsx)(e.code,{children:"api"})," \u4e0d\u5177\u5907\u9002\u914d\u6761\u4ef6\uff0c\u53ef\u4ee5\u63d0\u4f9b",(0,i.jsx)(e.a,{href:"https://github.com/farm-fe/farm/issues/new/choose",children:"issues"})," ."]})}),"\n",(0,i.jsx)(e.h2,{id:"farm-\u8fd0\u884c\u65f6\u63d2\u4ef6",children:"Farm \u8fd0\u884c\u65f6\u63d2\u4ef6"}),"\n",(0,i.jsxs)(e.p,{children:["Farm\u6709\u4e00\u4e2a\u8fd0\u884c\u65f6\u6a21\u5757\u7cfb\u7edf\u6765\u63a7\u5236\u5982\u4f55\u52a0\u8f7d\u548c\u6267\u884c\u6a21\u5757\u3002 \u914d\u7f6e ",(0,i.jsx)(e.code,{children:"compilation.runtime.plugins"})," \u4ee5\u6dfb\u52a0\u66f4\u591a\u8fd0\u884c\u65f6\u63d2\u4ef6\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"export default defineConfig({\n  compilation: {\n    // \u914d\u7f6e Farm \u8fd0\u884c\u65f6\u6a21\u5757\u7cfb\u7edf\n    runtime: {\n      plugins: [\n        // \u8fd0\u884c\u65f6\u63d2\u4ef6\u5305\n        require.resolve('farm-plugin-runtime-mock'),\n        // \u672c\u5730\u8fd0\u884c\u65f6\u63d2\u4ef6\n        path.join(process.cwd(), \"build/runtime-plugin.ts\")\n      ]\n    }\n  }\n});\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u60a8\u5fc5\u987b\u914d\u7f6e\u6307\u5411\u8fd0\u884c\u65f6\u63d2\u4ef6\u7684\u8def\u5f84\u3002 \u63a8\u8350\u4f7f\u7528 ",(0,i.jsx)(e.strong,{children:"\u7edd\u5bf9\u8def\u5f84"})," \u4ee5\u907f\u514d\u8def\u5f84\u95ee\u9898\u3002"]}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["\u8981\u4e86\u89e3\u6709\u5173\u8fd0\u884c\u65f6\u63d2\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.jsx)(e.a,{href:"/docs/plugins/writing-plugins/runtime-plugin",children:"\u8fd0\u884c\u65f6\u63d2\u4ef6"})]})}),"\n",(0,i.jsx)(e.h2,{id:"\u4f7f\u7528-swc-\u63d2\u4ef6",children:"\u4f7f\u7528 SWC \u63d2\u4ef6"}),"\n",(0,i.jsxs)(e.p,{children:["Swc Plugin \u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728Farm\u4e2d\u4f7f\u7528\uff0c\u914d\u7f6e",(0,i.jsx)(e.code,{children:"compilation.script.plugins"}),"\u6765\u6dfb\u52a0SWC\u63d2\u4ef6\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import jsPluginVue from '@farmfe/js-plugin-vue';\n\nexport default defineConfig({\n   compilation: {\n     script: {\n       plugins: [{\n       //swc\u63d2\u4ef6\u7684\u5305\u540d\n         name: 'swc-plugin-vue-jsx',\n         // \u8be5swc\u63d2\u4ef6\u7684\u9009\u9879\n         options: {\n           \"transformOn\": true,\n           \"optimize\": true\n         },\n        // \u5f53\u8fc7\u6ee4\u5668\u5339\u914d\u65f6\u63d2\u4ef6\u6267\u884c\u3002\n         filters: {\n           // resolvedPaths: [\".+\"]\n           moduleTypes: ['tsx', 'jsx'],\n         }\n       }]\n     }\n   },\n   plugins: [jsPluginVue()],\n});\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6570\u7ec4\u7684\u6bcf\u4e2a\u63d2\u4ef6\u9879\u5305\u542b\u4e09\u4e2a\u5b57\u6bb5\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"name"}),"\uff1aswc\u63d2\u4ef6\u7684\u5305\u540d"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"options"}),"\uff1a\u4f20\u9012\u7ed9swc\u63d2\u4ef6\u7684\u914d\u7f6e\u9879"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"filters"}),"\uff1a\u6267\u884c\u63d2\u4ef6\u7684\u54ea\u4e9b\u6a21\u5757\uff0c\u5fc5\u987b\u914d\u7f6e\uff0c\u652f\u6301",(0,i.jsx)(e.code,{children:"resolvedPaths"}),"\u548c",(0,i.jsx)(e.code,{children:"moduleTypes"}),"\u8fd9\u4e24\u4e2a\u8fc7\u6ee4\u9879\uff0c\u5982\u679c\u4e24\u8005\u540c\u65f6\u6307\u5b9a\uff0c\u5219\u53d6\u5e76\u96c6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"SWC \u63d2\u4ef6"}),"\u53ef\u80fd\u4e0e Farm \u4f7f\u7528\u7684 ",(0,i.jsx)(e.code,{children:"SWC \u7248\u672c"}),"(rust crate ",(0,i.jsx)(e.code,{children:"swc_core v0.90"}),") \u4e0d\u517c\u5bb9\u3002 \u5982\u679c\u51fa\u73b0\u9519\u8bef\uff0c\u8bf7\u5c1d\u8bd5\u5347\u7ea7\u63d2\u4ef6\u3002"]})})]})}function a(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},5696:(n,e,s)=>{s.d(e,{Z:()=>c,a:()=>t});var i=s(959);const r={},l=i.createContext(r);function t(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);