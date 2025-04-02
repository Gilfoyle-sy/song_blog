# vue3 部分新增特新

## v-memo

[文档](https://cn.vuejs.org/api/built-in-directives.html#v-memo)

缓存模版的子树. 可以跳过 vnode 的创建过程. 搭配 v-for 使用提升性能.

## Teleport

[文档](https://cn.vuejs.org/guide/built-ins/teleport.html#teleport)

将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置.

- 只改变渲染后的 dom 结构, 并不会改变组件之间的父子关系
- 可以同时传入多个 teleport, 而顺序就是简单的顺次追加
- 可以通过 disabeld 禁用

## :global

样式规则应用到全局

## :slotted

默认情况下，作用域样式不会影响到 slot 渲染出来的内容，因为它们被认为是父组件所持有并传递进来的

## CSS modules

```vue
<template>
  <p :class="$style.red">This should be red</p>
</template>

<style module>
.red {
  color: red;
}
</style>

// 也可以自定义注入名称
<template>
  <p :class="classes.red">red</p>
</template>

<style module="classes">
.red {
  color: red;
}
</style>
```

可以通过 useCssModule API 中访问注入的 class

```js
import { useCssModule } from 'vue'

// 在 setup() 作用域中...
// 默认情况下, 返回 <style module> 的 class
useCssModule()

// 具名情况下, 返回 <style module="classes"> 的 class
useCssModule('classes')
```
