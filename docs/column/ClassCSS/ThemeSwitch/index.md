# 主题切换

- 动态切换主题
- 切换动画

## demo

[仓库](https://github.com/Gilfoyle-sy/song_theme_switch)

[演示](https://gilfoyle-sy.github.io/song_theme_switch/#/)

## 核心代码

- 通过 css 变量来切换主题色
- 通过 setAttribute 设置根节点主题名称
- 通过 setProperty 动态更改主题颜色
- 通过 startViewTransition 设置切换主题的动画

```scss
// 定义主题
// 图片需要UI重新设计
:root[data-theme='light'] {
  --custom-bg-color: #f2f3f5;
}

:root[data-theme='dark'] {
  --custom-bg-color: #0a0a0a;
}

// 清空默认动画效果
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
}
```

```js
// 设置data-theme的值
document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')

// 动态切换值
document.documentElement.style.setProperty(key, value)

// 动画api兼容性还是不全, 故需要判断
if (!document.startViewTransition) {
  // 切换主题
  return
}

// 使用切换动画
const transition = document.startViewTransition(() => {
  // 切换主题
})

transition.ready.then(() => {
  // 动画效果
})
```
