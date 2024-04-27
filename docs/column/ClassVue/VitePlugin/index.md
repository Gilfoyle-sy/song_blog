# vite plugin

> Vite 插件扩展了设计出色的 Rollup 接口，带有一些 Vite 独有的配置项。因此，你只需要编写一个 Vite 插件，就可以同时为开发环境和生产环境工作。

[roll-up 接口文档](https://www.rollupjs.com/plugin-development/)

[vite-plugin 文档](https://cn.vitejs.dev/guide/api-plugin.html)

[vite-plugin 项目](https://github.com/vitejs/awesome-vite?tab=readme-ov-file#plugins)

比如我们平时经常使用的一些插件,图片压缩,markdown 格式转换,甚至 vite 中使用 vue,都是通过 vite 的 plugin 进行加载的

plugin 为开发除了提供 rollup 的钩子外,还提供 vite 自身的一些构建钩子函数,方便我们在开发和生产环境中更加定制化的开发项目

## 实际开发项目

[仓库](https://github.com/Gilfoyle-sy/song_vite_plugin_demo)

- 包含了一个所有钩子的使用和执行顺序的 demo
- 封装[命令行工具](/column/ClassNode/Prompts/)的 plugin

## 基本语法

- name 即定义该 plugin 的名称,官方指定的 plugins 命名规范是 vite-plugin-xxx, 这个 name 值最终在项目中会用于提示作用
- version 即 plugin 的版本
- emforce 这个自定用于调整钩子在 vite 中的执行顺序
  > 1. alias
  > 2. 带有 enforce: 'pre' 的用户插件
  > 3. Vite 核心插件
  > 4. 没有 enforce 值的用户插件
  > 5. Vite 构建用的插件
  > 6. 带有 enforce: 'post' 的用户插件
  > 7. Vite 后置构建插件（最小化，manifest，报告）

```js
export default function vitePluginDemo() {
  return {
    name: 'vite-plugin-demo',
    version: '1.0.0'
  }
}
```

## plugin 的钩子

> 具体的相关钩子描述和处理流程请看上面的官方文档和 github 仓库代码, 这块只做简单的总结

### 通用钩子(即 rollup 的钩子)

vite 开发服务器会穿件一个插件来调用 rollup 的构建钩子,其功能和参数与其一样

1. 服务启动时有两个钩子会被调用

   > - options(opts)
   >   - 替换或操作传递给 rollup.rollup 的选项对象。返回 null 不会替换任何内容
   > - buildStart(opts)
   >   - 在每个 rollup.rollup 构建上调用。当你需要访问传递给 rollup.rollup() 的选项时，建议使用此钩子, 包含了 options 修改合并过后的配置项

2. 每个传入模块请求时被调用的钩子

   > - resolveId
   >   - 定义一个自定义解析器。解析器可以用于定位第三方依赖项等
   > - load 自定义加载器
   > - transform 转换单个模块

3. 服务关闭时调用的钩子

   > - buildEnd
   > - closeBundle

### vite 独有钩子

1. config(config, env)
   config 就是在 vite 启动时的所有配置项,包括 plugins,css,server 等等

   env 就是当前使用的环境 内部有 mode,command

2. configResolved(resolvedConfig)
   resolvedConfig 就是 config 里合并修改过后,最终被 vite 配置且已经调用的配置项

3. configureServer(server) / configurePreviewServer(server)
   是用于配置开发服务器的钩子, 第二个是预览服务器的配置

4. transformIndexHtml(html)
   这个钩子的作用就是调用更目录下的 index.html,接受并转换为上下文,开发时给 viteserver,构建时给 rollup 打包

5. handleHotUpdate({ server, modules, timestamp })
   执行自定义 HMR 更新处理

## 参考

[vite 插件开发指南](https://juejin.cn/post/6930878407559348231)
