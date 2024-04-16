# 判断数组

## 1 toString

```js
function isArray(target) {
  return Object.prototype.toString.call(target) === '[object Array]'
}
```

但是 es6 新增的 symbol 类型可以指定其符号

```js
let obj = {
  [Symbol.toStringTag]: 'Array'
}

isArray(obj) // true
```

虽然概率很小,但是还是有判断出错的可能性

## 2. instanceof

```js
function isArray(obj) {
  return target instanceof Array
}
```

但是如果页面上存在 iframe 标签,原始页面和 iframe 页面里的数组原型是两个不同的原型

即跨领域（cross-realm）对象，其中 Array 构造函数的标识是不同的，因此会导致 instanceof Array 失败

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Document</title>
  </head>
  <body>
    <iframe
      src="www.baiud.com"
      frameborder="0"
    ></iframe>

    <script>
      function isArray(target) {
        return target instanceof Array
      }

      const Array1 = window.Array

      const frame = document.querySelector('iframe')

      const Array2 = frame.contentWindow.Array

      console.log(Array1, Array2)
      console.log(Array1 === Array2) // false

      const arr1 = new Array1()
      const arr2 = new Array2()

      console.log(isArray(arr1)) // true
      console.log(isArray(arr2)) // false
    </script>
  </body>
</html>
```

## 3 Array.isArray()

Array.isArray() 检查传递的值是否为 Array。它不检查值的原型链，也不依赖于它所附加的 Array 构造函数。对于使用数组字面量语法或 Array 构造函数创建的任何值，它都会返回 true。

```js
let arr = []

console.log(Array.isArray()) // true
```
