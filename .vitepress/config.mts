import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "语言排版需求",
  description: "各语言和书写系统于排版上的需求和问题。",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo-mini.png' }],
    // ['meta', { name: 'theme-color', content: '' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '需求文档', link: '/arab/arb' },
      { text: '语言文字列表', link: 'https://xfq.github.io/scripts/name/index.zh-Hans.html' }
    ],

    sidebar: [
      {
        text: '阿拉伯字母',
        items: [
          { text: '现代标准阿拉伯语', link: '/arab/arb' },
          { text: '波斯语', link: '/arab/pes' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xfq/lreq' }
      // Mastodon
    ],

    footer: {
      message: 'Licence <a href="https://creativecommons.org/licenses/by/4.0/">CC-By</a>',
      copyright: 'Copyright xfq@w3.org'
    },

    darkModeSwitchLabel: '主题'
  }
})
