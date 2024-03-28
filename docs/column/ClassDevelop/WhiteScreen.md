# 白屏

前端开发或面试中，白屏优化是一个绕不开的话题。
由于网络，代码，机能等因素，导致用户打开页面加载过慢，使用户等待时间过长，降低了体检流畅度，更有可能导致用户的流失。
所以作为前端开发者，我们有必要通过各种解决方案，来降低或者避免白屏的出现，提升用户体验。

## 图片

开发过程中，UI 给于我们展示，或者用户上传的图片过大，导致载入对应图片的网站时，需要过多的网络资源加载大图片，因而产生白屏。

1. 通过 tinypng 等图片压缩软件，对这些静态图片进行压缩，保持视觉上没有影响，但可以极大的降低图片的大小。
2. 会针对于不同尺寸的设备，加载不同的图片
3. 用户上传的图片，我们可以通过限制用户上传图片的大小
4. 通过 image-compressor 等第三方库，对用户上传后的图片进行压缩
5. 图片懒加载，在用户滚动到可视区域时再加载图片，比如 vue-lazyload 第三方库
6. 对于一些体积较小的静态图片，可以通过脚手架的配置，将图片转为 base64。webpack 中有 url-loader，vite 中可以配置 assetsInlineLimit

## 骨架屏

骨架屏，spin，进度条其实是同一种优化手段，就是提前告知用户页面正在加载资源，避免完全的白屏。但是骨架屏的视觉效果更好，可以提升用户体验，多用于移动端页面。

## 文件体积

开启 gzip，降低传输文件体积。需要服务器开启 gzip。

- vite compressPlugin

```js
// npm i -d vite-plugin-compression
import compressPlugin from 'vite-plugin-compression'
plugins[
  compressPlugin({
    ext: '.gz', //gz br
    algorithm: 'gzip',
    deleteOriginFile: true
  })
]
```

- webpack 中 compression-webpack-plugin

```js
// npm install compression-webpack-plugin --save-dev
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css)$/, // 匹配文件名
      threshold: 10240, // 对超过10k的数据压缩
      deleteOriginalAssets: false, // 不删除源文件
      minRatio: 0.8 // 压缩比
    })
  ]
}
```

## 生产环境不需要 map.js

map 文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。也就是说 map 文件相当于是查看源码的一个东西。如果不需要定位问题，并且不想被看到源码，就可以删除 map.js，既可以减少包大小，也可以加密源码。

```js
productionSourceMap: false
```

## 第三方库使用外链接

第三方库，比如 lodash 等，可以通过公共外链的形式加载。（注意：外链会存在挂掉的情况）

- vite 中配置 vite-plugin-externals

```js
// npm install vite-plugin-externals -D
import { viteExternalsPlugin } from 'vite-plugin-externals'

export default defineConfig({
  plugins: [
    vue(),
    viteExternalsPlugin({
      mnt: 'moment'
    })
  ]
})
```

- webpack 中配置 externals

```js
configureWebpack:{
  externals: {
    'element-ui': 'ELEMENT',
    'vue': 'Vue',
  }
}
```

## 路由组件的懒加载

讲不通的路由打包到不同文件中，待访问到的时候再进行加载

```js
component: () => import('./views/DetailPage.vue')
```

## 预加载

通过触发式（鼠标悬停动）来加载即将打开的路由

```vue
<router-link to="/about" prefetch>关于我</router-link>
```

## 帧渲染

requestAnimationFrame 是一个用于动画效果的 API,它使用浏览器的刷新率来执行回调函数,通常每秒钟执行 60 次。我们可以通过帧渲染来加载一些模块很大的 dom 节点，比如长列表元素。

## 参考

> [Vite 打包优化，通过文件，图片，字体压缩优化大小](https://www.6hu.cc/archives/234917.html)
>
> [Vue 首屏加载过慢出现白屏的六种优化方案](https://blog.csdn.net/weixin_44786530/article/details/126936033)
>
> [requestAnimationFrame 帧渲染](https://blog.csdn.net/weixin_42981560/article/details/134725320)
>
> [一文详解 requestAnimationFrame 请求动画帧](https://www.jb51.net/javascript/3071211hv.htm)
