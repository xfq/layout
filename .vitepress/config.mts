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
          { text: '波斯语', link: '/arab/pes' },
          { text: '维吾尔语', link: '/arab/ug' }
        ]
      },
      {
        text: '朝鲜语',
        link: '/kore/ko'
      },
      {
        text: '传统蒙古文',
        items: [
          { text: '蒙古语', link: '/mong/mn' }
        ]
      },
      {
        text: '缅文',
        items: [
          { text: '缅甸语', link: '/mymr/my' }
        ]
      },
      {
        text: '日语',
        link: '/jpan/ja'
      },
      {
        text: '泰文',
        items: [
          { text: '泰语', link: '/thai/th' }
        ]
      },
      {
        text: '天城文',
        items: [
          { text: '印地语', link: '/deva/hi' }
        ]
      },
      {
        text: '希伯来字母',
        items: [
          { text: '现代希伯来语', link: '/hebr/he' }
        ]
      },
      {
        text: '希腊字母',
        items: [
          { text: '现代希腊语', link: '/grek/el' }
        ]
      },
      {
        text: '爪哇字母',
        items: [
          { text: '爪哇语', link: '/java/jv' }
        ]
      },
      {
        text: '中文（W3C）',
        link: 'https://www.w3.org/TR/clreq/'
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xfq/lreq' }
      // Mastodon
    ],

    footer: {
      message: 'Licence <a href="https://creativecommons.org/licenses/by/4.0/">CC-By</a>',
      copyright: 'Copyright xfq@w3.org'
    },

    darkModeSwitchLabel: '主题',

    outline: {
      level: 'deep'
    },

    search: {
      provider: 'local'
    }

  }
})
