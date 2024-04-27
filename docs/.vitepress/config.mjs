import { defineConfig } from 'vitepress'
import { nav } from './configNavbar.js'
import { sidebar } from './configSidebar.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/song_blog/',
  title: "个人知识库",
  description: "一个基于vitepress的个人知识库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gilfoyle-sy' }
    ],

    logo: '/ball.webp',

    outline: {
      level: [2, 6],
      label: '目录'
    },
    search: {
      provider: 'local'
    }
  },

})
