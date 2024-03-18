# 微信小程序开发

> [开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)

## 常见问题

1. 注意 tab 页面和子页面的跳转
   tab 页面跳转使用 switchTab ；其他页面使用 navigateTo

2. switchTab 跳转时，url 后面不能带参数
   放在全局变量中，跳转后通过其获取

3. 分享页面的方法在组件中无法感知
   将信息传回父页面，使用 onShareAppMessage 分享

4. webview 跳转的域名无法访问
   需要在小程序管理平台上绑定对应的业务域名

5. 转义字符必须在 text 中使用，并且 decode 默认是 false，设置为 true 才能生效

   ```html
   <text decode="true ">></text>
   ```

## 与 uniapp 对比

- 方法无法在 wxml 里直接使用，要使用 wss 或者 wss 提到外面
- 方法在组件内无法感知。比如分享
- 在开发者工具中，使用 sass 要配合 easy-sass 使用
- 传参必须使用 data-id 形式，接收参数也必须 e.currentTarget.dataset
- 更新视图要用 this.setData
- 引入组件需要再.json 内配置
- uniapp 支持所有小程序 api，使用 vue 语法，方便配置，生态齐全，效率更高。易于维护。uniapp 还可以跨平台。
