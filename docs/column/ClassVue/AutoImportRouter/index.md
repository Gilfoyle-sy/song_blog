# 自动导入路由

> 通过脚手架提供的 api 自动生成路由配置

## 核心 api

### webpack

```js
/**
 *
 * @param {string} dir 检索目录
 * @param {boolean} useSubdir 是否检索子文件
 * @param {reg} regExp 匹配文件的正则表达
 */
require.context(dir, useSubdir, regExp)
```

> 注意: dir 必须是字面量

### vite

```js
import.meta.glob()
```

- 该 api 非 web 标准,仅仅是 vite 提供的导入功能
- 内部必须是字面量,即不能存在变量,拼接变量和字符串也是不行
- 改 api 本质调用的是 fast-global 库的功能,所以该库的字面量配置支持 vite 使用
- 路径必须是相对路径,绝对路径,或者在 alias 内配置过的别名路径
- 在 vue 项目中使用的时候, 因为路由配置统一生成,最好避免使用 pramas 形式动态路由, 应该以 query 形式传参, 这样避免在动态生成方法出做过多判断,再加代码不必要的耦合
- 在 vue3 版本中 可以将路由的 meta 参数配置在.vue 文件中的 defiendOptions 内,方便读取时拿到, 不需要再新增配置文件

```js
defineOptions({
  meta: {
    title: '测试1',
    isMenu: true,
    order: 1
  }
})
```

- 这种动态路由的形式 可以通过导入文件的后缀名形式,过滤掉不必要的组件导致,仅仅导入页面级别的.vue 文件

```js
// 比如本例子中, 将所有页面级别的.vue文件统一成xxxPage.vue的形式
const pageObj = import.meta.glob('../views/MenuList/**/(*)Page.vue', {
  eager: true,
  import: 'default'
})
```

## 使用案例

- 将页面级别配置文件移入到.vue 文件
- 支持一级二级菜单的路由自动导入
- 通过 menu.js 配置一级菜单
- 通过页面 xxxPage.vue 内的 defineOptions 配置页面参数

[Git](https://github.com/Gilfoyle-sy/song_auto_import_router)
