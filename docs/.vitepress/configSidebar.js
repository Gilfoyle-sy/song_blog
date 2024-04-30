export const sidebar = {
  '/column/ClassCSS/': [
    { text: 'flex', link: '/column/ClassCSS/flex' },
    { text: '尺寸', link: '/column/ClassCSS/size' },
    { text: 'sass', link: '/column/ClassCSS/sass' },
    { text: '大屏适配', link: '/column/ClassCSS/LargeScreen/' },
    { text: '主题切换', link: '/column/ClassCSS/ThemeSwitch/' },
  ],
  '/column/ClassJS/': [
    {
      text: '数组',
      items: [
        { text: '常用api', link: '/column/ClassJS/001_Array/api.md' },
        { text: '判断数组', link: '/column/ClassJS/001_Array/isArray.md' },
        { text: '稀疏数组', link: '/column/ClassJS/001_Array/isSparseArray.md' },
        { text: '数组去重', link: '/column/ClassJS/001_Array/uniqueArray.md' }
      ]
    },
    {
      text: '对象',
      items: [
        {
          text: '常用api',
          link: '/column/ClassJS/002_Object/api.md'
        }
      ]
    },
    { text: '垃圾回收机制', link: '/column/ClassJS/GC' },
    { text: 'Babel&PolyFill', link: '/column/ClassJS/Babel&Polyfill' },
    { text: 'Proxy', link: '/column/ClassJS/Proxy' },

  ],
  '/column/ClassDevelop/': [
    { text: '前端工程化', link: '/column/ClassDevelop/Engineering' },
    { text: '白屏问题', link: '/column/ClassDevelop/WhiteScreen' },
    { text: 'RESTful', link: '/column/ClassDevelop/RESTful' },
    { text: '埋点', link: '/column/ClassDevelop/EventTracking' },
    { text: 'npm&yarn&pnpm', link: '/column/ClassDevelop/Npm&Yarn&Pnpm' },
    { text: 'nvm', link: '/column/ClassDevelop/Nvm' },
    { text: 'nrm', link: '/column/ClassDevelop/Nrm' },
    { text: 'git', link: '/column/ClassDevelop/Git' },
  ],
  '/column/ClassCI&CD/': [
    { text: 'CI/CD', link: '/column/ClassCI&CD/' },
    { text: 'Jenkins', link: '/column/ClassCI&CD/Jenkins/' },
    { text: '云效', link: '/column/ClassCI&CD/YunXiao/' },
  ],
  'column/ClassNode/': [
    { text: '命令行工具', link: '/column/ClassNode/Prompts/' }
  ],
  'column/ClassVue/': [
    { text: '动态路由导入', link: '/column/ClassVue/AutoImportRouter/' },
    { text: 'VitePlugin', link: '/column/ClassVue/VitePlugin/' },
    { text: '切换主题指令', link: '/column/ClassVue/Directive/' },
  ]

}
