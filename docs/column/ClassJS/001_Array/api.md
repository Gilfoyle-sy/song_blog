# 数组

## 常用方法

### 改变原数组

```js
arr.push(target)
arr.pop()
arr.unshift(target)
arr.shift()
arr.reverse()
arr.sort((a, b) => {})
arr.splice(startIdx, amount)
arr.splice(startIdx, amount, target)
```

### 不改变原数组

- concat
- join
- slice
- indexOf
- lastIndexOf

```js
let res = arr.concat(arr2)
let res = arr.join('_')
let res = arr.slice(startIdx, endIdx) // 包前不好后
let res = arr.indexOf(target)
let res = arr.indexOf(target, idx)
let res = arr.lastIndexOf(target)
let res = arr.lastIndexOf(target, idx)
let res = arr.includes(target)
let res = arr.valueOf()
let res = arr.toString()
let res = arr.keys()
```

### 其他方法

```js
arr.forEach((item, index, arr) => {})
let res = arr.map((item, index, arr) => {
  return item
})
let res = arr.filter((item, index, arr) => {
  return item
})
let res = arr.every((item, index, arr) => {
  return item > 0
})
let res = arr.some((item, index, arr) => {
  return item > 0
})
let res = arr.find((item, index, arr) => {
  return item > 0
})
let res = arr.findIndex((item, index, arr) => {
  return item > 0
})
let res = arr.reduce((prev, item, index, arr) => {
  return prev + item // 返回值即为下一次调用的prev
}, initialValue)
let res = arr.reduceRight((prev, item, index, arr) => {
  return prev + item // 返回值即为下一次调用的prev
}, initialValue)

let res = Array.from(Iter) // 将类数组和可迭代对象转换成一个新的，浅拷贝的数组
let res = Array.of(2) // [2]
let res = Array(2) // [,]
arr.fill('a') // 全部填充为a
let res = Array.isArray(arr) // 检测是否是数组的最保险方式
let res = arr.at() // 负整数表示倒数
let res = arr.flat(depth)
let res = arr.flatMap((item, index, arr) => {
  return item * 2
})
let res = arr.copyWith(target, startIdx, endIdx)
```
