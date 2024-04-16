# 稀疏数组

## 定义

稀疏数组是一个有着空位的数组。空位并不是 undefined，它是一个实际的值，用 hole 来表示

## 创建稀疏数组

```js
console.log(new Array(5)) // Array [ <5 empty items> ]

console.log([1, 2, , , 5]) // Array [ 1, 2, <2 empty items>, 5 ]

const arr = [1, 2]
arr[4] = 5
console.log(arr) // Array [ 1, 2, <2 empty items>, 5 ]

const arr = [1, 2]
arr.length = 5
console.log(arr) // Array [ 1, 2, <3 empty items> ]

const arr = [1, 2, 3, 4, 5]
delete arr[2]
console.log(arr) // Array [ 1, 2, <1 empty item>, 4, 5 ]
```

## 稀疏数组的迭代

稀疏数组的 length 是不会忽略 hole 的,但是稀疏数组在数组迭代中会被跳过

```js
const arr = [1, 2, , , 5]
arr.map((item) => console.log(item)) // 1 2 5
arr.forEach((item) => console.log(item)) // 1 2 5
arr.filter((item) => console.log(item)) // 1 2 5
arr.some((item) => console.log(item)) // 1 2 5
console.log(Array.from(Object.keys(arr))) // Array ['0', '1', '4']
console.log(Array.from(Object.values(arr))) // Array [1, 2, 5]
console.log(Array.from(Object.entries(arr))) // Array [['0', 1], ['1', 2], ['4',]]
for (const key in arr) {
  console.log(key) // 0 1 4
}
console.log({ ...arr }) // Object {'0': 1, '1': 2, '4': 5}
```

## 判断稀疏数组

```js
function isAparseArray(arr) {
  if (!Array.isArray(arr)) {
    return false
  }
  for (let i = 0; i < arr.length; i++) {
    if (!(i in arr)) {
      return true
    }
  }
  return false
}
```
