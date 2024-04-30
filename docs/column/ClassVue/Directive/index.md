# 自定义指令

## demo

[仓库](https://github.com/Gilfoyle-sy/song_theme_switch)

[演示](https://gilfoyle-sy.github.io/song_theme_switch/#/)

## 例子-主题切换动画指令

```js
export default {
  mounted(el, binding) {
    el.addEventListener('click', (event) => {
      // 如果浏览器不支持 startViewTransition 方法，则直接执行回调
      if (!document.startViewTransition) return binding.value()

      const transition = document.startViewTransition(() => {
        binding.value()
      })

      // 动画效果
      transition.ready.then(() => {
        const x = event?.clientX ?? innerWidth / 2
        const y = event?.clientY ?? innerHeight / 2
        const endRadius = Math.hypot(
          Math.max(x, innerWidth - x),
          Math.max(y, innerHeight - y)
        )
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0 at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 600,
            easing: 'ease-in',
            // 指定要附加动画的伪元素
            pseudoElement: '::view-transition-new(root)'
          }
        )
      })
    })
  }
}
```

## vue 自定义指令

[官方文档](https://cn.vuejs.org/guide/reusability/custom-directives.html#custom-directives)

## 注意事项

- 除了 el 外，所有参数都是只读的，不可以去修改。如果需要在不同的钩子间通信，可以使用元素的 dataset 属性
- 如果在组件上使用，会作用域组件的根节点
- 如果组件有多个根节点，指令会报错
- 指令不能通过$attrs 透传给不同元素，官方也不推荐在组件上使用自定义指令
- prevnode 仅在 beforeUpdate 和 updated 钩子中可用。

## 钩子

```js
const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {
    // el 指令绑定到的元素。这可以用于直接操作 DOM
    // vnode 代表绑定元素的底层 VNode
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {}
}
```
