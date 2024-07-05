"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[2906],{7952:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=r(6070),t=r(5710);const o={},i="Develop With Farm",a={id:"tutorials/start",title:"Develop With Farm",description:"In this chapter, we will introduce commonly used configuration and plugins to help you build complex production-ready web project with Farm.",source:"@site/versioned_docs/version-0.x/tutorials/2-start.md",sourceDirName:"tutorials",slug:"/tutorials/start",permalink:"/docs/0.x/tutorials/start",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/versioned_docs/version-0.x/tutorials/2-start.md",tags:[],version:"0.x",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create A Project",permalink:"/docs/0.x/tutorials/create"},next:{title:"Build For Production",permalink:"/docs/0.x/tutorials/build"}},c={},l=[{value:"Introduce Component Library",id:"introduce-component-library",level:2},{value:"Styling the Project",id:"styling-the-project",level:2},{value:"Create a Basic Admin Site Layout",id:"create-a-basic-admin-site-layout",level:3},{value:"Styling With Css Modules",id:"styling-with-css-modules",level:3},{value:"Using Css Preprocessor",id:"using-css-preprocessor",level:3},{value:"Configuring Alias And Externals",id:"configuring-alias-and-externals",level:2},{value:"Configuring DevServer",id:"configuring-devserver",level:2},{value:"Useful Configuration",id:"useful-configuration",level:3},{value:"Setup Proxy",id:"setup-proxy",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"develop-with-farm",children:"Develop With Farm"}),"\n",(0,s.jsxs)(n.p,{children:["In this chapter, we will introduce ",(0,s.jsx)(n.strong,{children:"commonly used configuration and plugins"})," to help you build complex production-ready web project with Farm."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"This chapter reuse the project we created in chapter 1"})}),"\n",(0,s.jsx)(n.p,{children:"We'll setup our project step by step:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Introduce popular component library ",(0,s.jsx)(n.code,{children:"antd"}),", and configure necessary plugins for it"]}),"\n",(0,s.jsx)(n.li,{children:"Introduce commonly used plugins like postcss, svgr, less and so on."}),"\n",(0,s.jsx)(n.li,{children:"Configure proxies and other useful dev server options"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"introduce-component-library",children:"Introduce Component Library"}),"\n",(0,s.jsxs)(n.p,{children:["A component library is often necessary when develop a web project, in this section, we will use ",(0,s.jsx)(n.code,{children:"ant-design"})," as a demo to show How to add component libraries in Farm."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"We use ant design here only for illustration, you can introduce any component library. Farm does not have objection."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"First we need to install ant-design into our project:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm add antd # execute under project root\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Ant Design needs Sass, so we also need to install plugins for compiling scss. We can use ",(0,s.jsx)(n.code,{children:"@farmfe/plugin-sass"})," which is a Rust Plugin officially provided by Farm:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm add @farmfe/plugin-sass -D\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then add this plugin to ",(0,s.jsx)(n.code,{children:"plugins"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts" {7}',children:"// ...\n\nexport default defineConfig({\n  // ... ignore other fields\n  plugins: [\n    '@farmfe/plugin-react',\n    '@farmfe/plugin-sass'\n  ]\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now Antd is ready, add it to our project:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:"{4,12}",children:"import React from 'react';\nimport { createRoot } from 'react-dom/client';\n\nimport { DatePicker } from 'antd';\n\nconst container = document.querySelector('#root');\nconst root = createRoot(container);\n\nroot.render(\n  <div>\n    A React Page compiled by Farm. \n    antd DatePicker: <DatePicker />\n  </div>\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then execute ",(0,s.jsx)(n.code,{children:"npm start"})," and open ",(0,s.jsx)(n.code,{children:"http://localhost:9000"})," in browser:"]}),"\n",(0,s.jsx)("img",{src:"/img/2023-10-10-21-34-33.png",width:"680"}),"\n",(0,s.jsx)(n.h2,{id:"styling-the-project",children:"Styling the Project"}),"\n",(0,s.jsx)(n.p,{children:"Now we have successfully introduced a component library into our project. Next we'll learn how to styling."}),"\n",(0,s.jsx)(n.h3,{id:"create-a-basic-admin-site-layout",children:"Create a Basic Admin Site Layout"}),"\n",(0,s.jsxs)(n.p,{children:["First we create a new ",(0,s.jsx)(n.code,{children:"app.tsx"})," next to ",(0,s.jsx)(n.code,{children:"index.tsx"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:"{7}",children:".\n\u251c\u2500\u2500 farm.config.ts\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 index.html\n    \u251c\u2500\u2500 app.tsx\n    \u2514\u2500\u2500 index.tsx\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Content of ",(0,s.jsx)(n.code,{children:"app.tsx"}),"(It's demo code from official site of Antd):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="app.tsx"',children:"import React from 'react';\nimport { Breadcrumb, Layout, Menu, theme } from 'antd';\n\nconst { Header, Content, Footer } = Layout;\n\nconst App: React.FC = () => {\n  const {\n    token: { colorBgContainer },\n  } = theme.useToken();\n\n  return (\n    <Layout className=\"layout\">\n      <Header style={{ display: 'flex', alignItems: 'center' }}>\n        <div className=\"demo-logo\" />\n        <Menu theme=\"dark\" mode=\"horizontal\" defaultSelectedKeys={['2']}\n          items={new Array(15).fill(null).map((_, index) => {\n            const key = index + 1;\n            return {\n              key,\n              label: `nav ${key}`,\n            };\n          })}\n        />\n      </Header>\n      <Content style={{ padding: '0 50px' }}>\n        <Breadcrumb style={{ margin: '16px 0' }}>\n          <Breadcrumb.Item>Home</Breadcrumb.Item>\n          <Breadcrumb.Item>List</Breadcrumb.Item>\n          <Breadcrumb.Item>App</Breadcrumb.Item>\n        </Breadcrumb>\n        <div className=\"site-layout-content\" style={{ background: colorBgContainer }}>\n          Content\n        </div>\n      </Content>\n      <Footer style={{ textAlign: 'center' }}>Ant Design \xa92023 Created by Ant UED</Footer>\n    </Layout>\n  );\n};\n\nexport default App;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then modify ",(0,s.jsx)(n.code,{children:"index.tsx"})," as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'{4,13} title="index.tsx"',children:"import React from 'react';\nimport { createRoot } from 'react-dom/client';\n\nimport App from './app';\n// import { DatePicker } from 'antd';\n\nconst container = document.querySelector('#root');\nconst root = createRoot(container);\n\nroot.render(\n  <div>\n    A React Page compiled by Farm. \n    <App />\n    {/* antd DatePicker: <DatePicker /> */}\n  </div>\n);\n  \n"})}),"\n",(0,s.jsx)(n.p,{children:"Then we get a Basic admin layout:"}),"\n",(0,s.jsx)("img",{src:"/img/2023-10-12-22-16-48.png",width:"800"}),"\n",(0,s.jsx)(n.h3,{id:"styling-with-css-modules",children:"Styling With Css Modules"}),"\n",(0,s.jsxs)(n.p,{children:["Farm supports ",(0,s.jsx)(n.code,{children:"css modules"})," out of box, by default, Farm will treat any ",(0,s.jsx)(n.code,{children:".module.(css|scss|less)"})," as ",(0,s.jsx)(n.code,{children:"css modules"}),". Firstly we create a ",(0,s.jsx)(n.code,{children:"app.module.scss"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:"{8}",children:".\n\u251c\u2500\u2500 farm.config.ts\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 index.html\n    \u251c\u2500\u2500 app.tsx\n    \u251c\u2500\u2500 app.module.scss\n    \u2514\u2500\u2500 index.tsx\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Content of ",(0,s.jsx)(n.code,{children:"app.module.scss"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scss",metastring:'title="app.module.scss"',children:"$primary-color: #1890ff;\n\n.site-layout-content {\n  min-height: 200px;\n  padding: 24px;\n  font-size: 24px;\n  color: $primary-color;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then import ",(0,s.jsx)(n.code,{children:"app.module.scss"})," in ",(0,s.jsx)(n.code,{children:"app.tsx"})," and save it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"\nimport styles from './app.module.scss';\n// ...\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then your page should be updated like below:"}),"\n",(0,s.jsx)("img",{src:"/img/2023-10-14-21-24-40.png",width:"800"}),"\n",(0,s.jsx)(n.h3,{id:"using-css-preprocessor",children:"Using Css Preprocessor"}),"\n",(0,s.jsxs)(n.p,{children:["Farm provided official js plugins for ",(0,s.jsx)(n.code,{children:"postcss"}),"(",(0,s.jsx)(n.code,{children:"@farmfe/js-plugin-postcss"}),") and ",(0,s.jsx)(n.code,{children:"less"}),"(",(0,s.jsx)(n.code,{children:"@farmfe/js-plugin-less"}),") (We have already installed rust plugin ",(0,s.jsx)(n.code,{children:"sass"}),"(",(0,s.jsx)(n.code,{children:"@farmfe/plugin-sass"}),") above)."]}),"\n",(0,s.jsx)(n.p,{children:"To use postcss, First we need to install the plugin:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm add -D @farmfe/js-plugin-postcss\n"})}),"\n",(0,s.jsxs)(n.p,{children:["then configure it in ",(0,s.jsx)(n.code,{children:"plugins"})," of ",(0,s.jsx)(n.code,{children:"farm.config.ts"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts" {7}',children:"// ...\nimport farmPluginPostcss from '@farmfe/js-plugin-postcss';\n\nexport default defineConfig({\n  // ... ignore other fields\n  plugins: [\n    '@farmfe/plugin-react',\n    '@farmfe/plugin-sass',\n    farmPluginPostcss()\n  ]\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now postcss is fully supported in Farm, we won't cover postcss details here, refer to postcss docs for more details."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Refer to ",(0,s.jsx)(n.a,{href:"/docs/plugins/overview",children:"Farm Plugins"})," to learn more about Farm plugins."]})}),"\n",(0,s.jsx)(n.h2,{id:"configuring-alias-and-externals",children:"Configuring Alias And Externals"}),"\n",(0,s.jsxs)(n.p,{children:["Alias and externals are also most useful configurations, we can use ",(0,s.jsx)(n.code,{children:"compilation.resolve.alias"})," and ",(0,s.jsx)(n.code,{children:"compilation.externals"})," in Farm:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="farm.config.ts"',children:"// ...\n\nexport default defineConfig({\n  compilation: {\n    resolve: {\n      alias: {\n        '@/': path.join(process.cwd(), 'src')\n      },\n      externals: [\n        'node:fs'\n      ]\n    }\n  }\n  // ...\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuring-devserver",children:"Configuring DevServer"}),"\n",(0,s.jsxs)(n.p,{children:["You can find server configuration in ",(0,s.jsx)(n.a,{href:"/docs/config/farm-config#devserver-options---server",children:"Farm Dev Server Config"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"useful-configuration",children:"Useful Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Example configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import type { UserConfig } from '@farmfe/core';\n\nfunction defineConfig(config: UserConfig) {\n   return config;\n}\n\nexport default defineConfig({\n   // All dev server options are under server\n   server: {\n     open: true,\n     port: 9001,\n     hmr: {\n       // Configure the port for web socket listening\n       port: 9801\n       // Configure the host for web socket listening\n       host: 'localhost',\n       // Files to ignore when configuring file monitoring\n       ignores: ['auto_generated/*']\n     }\n     //...\n   }\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"For above examples, we used following options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"open"}),": open the browser with specified port automatically"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"port"}),": set the dev sever port to ",(0,s.jsx)(n.code,{children:"9001"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"hmr"}),": set the hmr port and watched files, we ignores file changes under ",(0,s.jsx)(n.code,{children:"auto_generated"})," directory."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"setup-proxy",children:"Setup Proxy"}),"\n",(0,s.jsxs)(n.p,{children:["Configure server proxy. farm uses ",(0,s.jsx)(n.code,{children:"http-proxy"})," as a proxy for the development server. Based on ",(0,s.jsx)(n.a,{href:"https://github.com/http-party/node-http-proxy?tab=readme-ov-file#options",children:"http-proxy"})," implementation, specific options refer to its documentation, example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import type { UserConfig } from '@farmfe/core';\n\nfunction defineConfig(config: UserConfig) {\n   return config;\n}\n\nexport default defineConfig({\n    server: {\n     proxy: {\n       '/api': {\n         target: 'https://music-erkelost.vercel.app/banner',\n         changeOrigin: true,\n         pathRewrite: (path: any) => path.replace(/^\\/api/, ''),\n       },\n     },\n   },\n});\n\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5710:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var s=r(758);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);