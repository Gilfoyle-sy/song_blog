# 大屏展示

## vw,vh

原理

```txt
元素设置的vw = (设计稿中元素的宽度px / 设计稿的宽度px ) * 100vw
元素设置的vh = (设计稿中元素的高度px / 设计稿的高度px ) * 100vh
```

可以在 scss 中封装函数

> 在 vite.config.js 全局引入, 避免每次都在文件中引入

```scss
@use 'sass:math'; // 此处注意sass版本 1.33以上支持

$designW: 1920;
$designH: 1080;

@function vw($px) {
  @return math.div($px, $designW) * 100vw;
}

@function vh($px) {
  @return math.div($px, $designH) * 100vh;
}

@function font($px) {
  @return math.div($px, $designH) * 100vw;
}
```

如果非 style 中使用,再同理封装 js 方法

```js
const designW: 1920
const designH: 1080

export default {
  vw: (px) => {
    return (px * 100.0) / designW + 'vw'
  },
  vh: (px) => {
    return (px * 100.0) / designH + 'vh'
  },
  font: (px) => {
    return (px * 100.0) / designW + 'vw'
  }
}
```

## postcss-px-to-viewport

[官方仓库](https://github.com/evrone/postcss-px-to-viewport)

根目录添加配置文件 .postcssrc.js

```cmd
pnpm install postcss-px-to-viewport
```

```js
module.exports = {
  plugins: {
    autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 要转化的单位
      viewportWidth: 750, // UI设计稿的宽度
      unitPrecision: 6, // 转换后的精度，即小数点位数
      propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      selectorBlackList: ['wrap'], // 指定不转换为视窗单位的类名，
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      landscape: false // 是否处理横屏情况
    }
  }
}
```

## scale

scale 方案是等比例缩放来适配大屏,但是会有几个问题

- 若实际屏幕的比例和 ui 的比例不一致,会导致大屏四周出现留白
- 放大会导致字体出现模糊
- 比例过大会导致图标的事件热区偏移

## 大屏相关的库

- [DataV](https://datav-vue3.jiaminghi.com/)
- [v-scal-screen](https://github.com/Alfred-Skyblue/v-scale-screen)
