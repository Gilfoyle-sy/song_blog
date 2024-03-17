import { defineConfig } from 'vitepress'
import { nav } from './configNavbar.js'
import { sidebar } from './configSidebar.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Song Blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    logo: '/logo1.png',

    outline: {
      level: [2, 6],
      label: '目录'
    },
    search: {
      provider: 'local'
    }
  },

  base: '/song_blog/',
  title: 'song_blog',  // 这里将会影响之后生成的根路
})
