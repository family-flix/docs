import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FamilyFlix",
  description: "Cloud drive and media manage",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "API", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "使用说明",
        items: [
          { text: "FamilyFlix 什么", link: "/docs/intro" },
          { text: "1. 源码部署", link: "/docs/deploy" },
          { text: "2. 转存影视剧资源", link: "/docs/resource" },
          { text: "3. 刮削云盘", link: "/docs/analysis" },
          { text: "4. 影视剧播放", link: "/docs/preview" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/family-flix/api" },
    ],
  },
  base: "/docs",
});
