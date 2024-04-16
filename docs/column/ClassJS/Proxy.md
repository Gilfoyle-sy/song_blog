# Proxy

Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）

## 语法

```js
/**
 * target 要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）
 * handler 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。
 */
const p = new Proxy(target, handler)
```

## 自身方法

- revocable

> 一旦某个代理对象被撤销，它将变得几乎完全不可调用，在它身上执行任何的可代理操作都会抛出 TypeError 异常（注意，可代理操作一共有 14 种，执行这 14 种操作以外的操作不会抛出异常）。一旦被撤销，这个代理对象便不可能被直接恢复到原来的状态，同时和它关联的目标对象以及处理器对象都有可能被垃圾回收掉。再次调用撤销方法 revoke() 则不会有任何效果，但也不会报错。

```js
let a = { name: 'sy' }

const { proxy, revoke } = Proxy.revocable(a, {})

console.log(proxy.name) // sy
revoke()
console.log(proxy.name) // TypeError
```

## 代理方法

### get

用于拦截对象的读取属性操作

```js
const a = { name: 'sy' }

let handler = {
  get: function (target, prop, receiver) {
    return Reflect.get(target, prop, receiver)
  }
}

const p = new Proxy(a, handler)

console.log(p.name) // sy
```

### set

设置属性值操作的捕获器

```js
const a = { name: 'sy' }

let handler = {
  set: function (target, prop, value, receiver) {
    if (value !== 'aaa') {
      console.log('error')
    } else {
      console.log('success')
      Reflect.set(target, prop, value, receiver)
    }
  }
}

const p = new Proxy(a, handler)

p.name = 'aaa' // success
p.name = 'bbb' // error
```

除了读取(get)和设置(set)的拦截外,还有其他 11 中拦截

| 拦截器                   | 描述                                                           |
| ------------------------ | -------------------------------------------------------------- |
| has                      | in 操作符的捕捉器                                              |
| deleteProperty           | delete 操作符的捕捉器                                          |
| ownKeys                  | Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols |
| getPrototypeOf           | Object.getPrototypeOf 方法的捕捉器                             |
| setPrototypeOf           | Object.setPrototypeOf 方法的捕捉器                             |
| isExtensible             | Object.isExtensible 方法的捕捉器                               |
| preventExtensions        | Object.preventExtensions 方法的捕捉器                          |
| getOwnPropertyDescriptor | Object.getOwnPropertyDescriptor 方法的捕捉器                   |
| defineProperty           | Object.defineProperty 方法的捕捉器。                           |

如果是函数对象, 还有两种拦截

| 拦截器    | 描述                 |
| --------- | -------------------- |
| apply     | 函数调用操作的捕捉器 |
| construct | new 操作符的捕捉器   |

## Reflect

Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。

Reflect 不是一个函数对象，因此它是不可构造的, 其所有属性和方法都是静态的

Reflect 对象提供了以下静态方法，这些方法与 proxy handler 方法的命名相同。

- Reflect.get()
- Reflect.set()
- Reflect.has()
- Reflect.deleteProperty()
- Reflect.ownKeys()
- Reflect.getPrototypeOf()
- Reflect.setPrototypeOf()
- Reflect.isExtensible()
- Reflect.preventExtensions()
- Reflect.getOwnPropertyDescriptor()
- Reflect.defineProperty()
- Reflect.apply()
- Reflect.construct()

## 特别注意

proxy 代理数组时, 触发 push,pop,splice 等方法时,会先 get 两次,再 set 两次

```js
let arr = [1, 2, 3, 4]
let pArr = new Proxy(c, {
  get: function (target, prop, receiver) {
    console.log('get', prop)
    return Reflect.get(target, prop, receiver)
  },
  set: function (target, prop, value, receiver) {
    console.log('set', prop)
    return Reflect.set(target, prop, value, receiver)
  }
})

pArr.push(5)
// get push
// get length
// set 4
// set length
```

因为代理后产生的 taget 内是一个类数组对象

```js
let objArr = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
  push: Array.prototype.push
}
```

所以当给代理数组 push 时, 先访问了 push 方法,然后访问了 length,之后再 set value,set length

> vue 中针对这块重写了方法,添加 shouldTrack 变量,来判断是否触发 track,避免重复执行 track
