/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["why-farm", "quick-start", "using-plugins", 'contribution'],
    },
    {
      type: "category",
      label: "Tutorial",
      collapsed: false,
      items: [
        "tutorials/overview",
        "tutorials/create",
        "tutorials/start",
        "tutorials/build",
      ],
    },
    {
      type: "category",
      label: "Features",
      collapsed: false,
      items: [
        "features/dev-server",
        "features/html",
        "features/css",
        "features/script",
        "features/static",
        "features/env",
        "features/lazy-compilation",
        "features/sourcemap",
      ],
    },
    {
      type: "category",
      label: "Frameworks",
      collapsed: true,
      items: [
        "frameworks/vanilla",
        "frameworks/react",
        "frameworks/vue",
        "frameworks/solid",
        "frameworks/svelte",
        "frameworks/preact",
        "frameworks/lit",
        "frameworks/electron",
        "frameworks/tauri",
        "frameworks/nestjs",
      ],
    },
    {
      type: "category",
      label: "Advanced",
      collapsed: true,
      items: [
        "advanced/ssr",
        "advanced/partial-bundling",
        "advanced/tree-shake",
        "advanced/minification",
        "advanced/polyfill",
        "advanced/persistent-cache"
      ],
    },
    {
      type: "category",
      label: "Migration",
      collapsed: true,
      items: ["migration/from-vite"],
    },
    // "comparisons",
    "benchmark",
  ],
  configSidebar: [
    {
      type: "category",
      label: "Configuration Reference",
      collapsed: false,
      items: [
        "config/configuring-farm",
        "config/compilation-options",
        "config/dev-server",
        "config/shared",
        // "config/plugins-options",
      ],
    },
    {
      type: "category",
      label: "CLI",
      collapsed: false,
      items: ["cli/cli-api"],
    },
    // "config/farm-config",
    // "config/cli",
  ],
  apiSidebar: [
    {
      type: "category",
      label: "Api Reference",
      collapsed: false,
      items: [
        "api/hmr-api",
        "api/js-plugin-api",
        "api/rust-plugin-api",
        "api/runtime-plugin-api",
        "api/javascript-api",
        "api/rust-api",
      ],
    },
  ],
  pluginSidebar: [
    {
      type: "category",
      label: "Official Plugins",
      items: [
        "plugins/official-plugins/overview",
        {
          type: "category",
          label: "Rust Plugins",
          collapsed: false,
          items: [
            "plugins/official-plugins/react",
            "plugins/official-plugins/sass",
          ],
        },
        {
          type: "category",
          label: "Js Plugins",
          collapsed: false,
          items: [
            "plugins/official-plugins/js-postcss",
            "plugins/official-plugins/js-less",
            "plugins/official-plugins/js-sass",
            "plugins/official-plugins/js-svgr",
            "plugins/official-plugins/js-dts",
          ],
        },
      ],
    },
    "plugins/community-plugins",
    {
      type: "category",
      label: "Writing Plugins",
      collapsed: false,
      items: [
        "plugins/writing-plugins/overview",
        "plugins/writing-plugins/rust-plugin",
        "plugins/writing-plugins/js-plugin",
        "plugins/writing-plugins/runtime-plugin",
      ],
    },
  ],
};

module.exports = sidebars;
