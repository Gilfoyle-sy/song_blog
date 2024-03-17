---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

lastUpdated: true

hero:
  name: 'Song'
  text: '个人知识库'
  tagline: 效果率/练习率/准备率
  actions:
    - theme: brand
      text: 进入主页
      link: /markdown-examples
    - theme: alt
      text: 关于我
      link: /api-examples
  image:
    src: /logo1.png
    alt: logo

features:
  - title: web前端
    icon: 📖
    details: 互联网程序猿，代码的搬运工
  - title: 美剧
    icon: 🎥
    details: 美剧,日剧,德剧
  - title: 游戏玩家
    icon: 🎮
    details: Dota2,Rimworld,Stellaris
---

<script setup>
import home from './components/test.vue';
</script>

<home />
