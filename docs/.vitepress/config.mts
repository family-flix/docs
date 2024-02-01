import { defineConfig } from "vitepress";
import { genYuqueSideBar } from "../../utils/route";
import { YuQueSVG } from "../../utils/assists";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "FamilyFlix",
  description: "视频刮削 + 云盘管理 + 自动更新 + 在线观看",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    search: {
      provider: "local",
    },
    outline: [2, 6],
    nav: [
      { text: "首页", link: "/" },
      {
        text: "配置文档",
        link: "/docs/安装步骤",
        activeMatch: "/docs/",
      },
      // { text: '短路由模式', link: '/docs-shorturl/ssuhngw0yb3dgkkg', activeMatch: '/docs-shorturl/' }
    ],
    sidebar: {
      "/docs/": await genYuqueSideBar("/docs"),
      // "/docs-shorturl/": await genYuqueSideBarWithShortUrl('/docs-shorturl')
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/family-flix/api" },
    ],
    footer: {
      message:
        'Powered by <a href="https://www.yuque.com/1874w/yuque-vitepress-template" target="_blank">语雀</a>  & <a href="https://vitepress.dev" target="_blank">VitePress</a> with <a href="https://github.com/LetTTGACO/elog" target="_blank">Elog</a>',
      copyright: "Copyright © 2023-present",
    },
  },
});
