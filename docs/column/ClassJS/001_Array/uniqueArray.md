# 数组去重

## new Set()

new Set() 内部判断逻辑: 0 和-0 是不同的值, 两个 NaN 是相同的值, 其次再用 === 来判断是否相同

```js
function unqiue(arr) {
  return Array.from(new Set(arr))
}
```

new Set 无法去掉对象

## 手写去重

```js
function uniqueArray(arr) {
  const newArr = [...arr]
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (equals(newArr[i], newArr[j])) {
        newArr.splice(j, 1)
        j--
      }
    }
  }
}

const isObject = (val) => typeof val === 'object' && val !== null

function equals(val1, val2) {
  // 原始类型
  if (isObject(val1) || isObject(val2)) {
    // Object.is 中 0 和 -0 不相等  NaN和NaN相等
    return Object.is(val1, val2)
  }

  if (val1 === val2) return true

  const val1Keys = Object.keys(val1)
  const val2Keys = Object.keys(val2)

  if (val1Keys.length !== val2Keys.length) return false

  for (const key of val1Keys) {
    if (!val2Keys.includes(key)) return false

    const res = equals(val1[key], val2[key])

    if (!res) return false
  }

  return true
}
```

## Object.is()

Object.is() 方法判断两个值是否是相同的值。表示两个参数是否相同的布尔值 。

如果下列任何一项成立，则两个值相同：

- 两个值都是 undefined
- 两个值都是 null
- 两个值都是 true 或者都是 false
- 两个值是由相同个数的字符按照相同的顺序组成的字符串
- 两个值指向同一个对象
- 两个值都是数字并且
- 都是正零 +0
- 都是负零 -0
- 都是 NaN
- 都是除零和 NaN 外的其它同一个数字
