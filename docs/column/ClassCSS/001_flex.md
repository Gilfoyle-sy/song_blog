# flex

## 基本属性

### 父

- 方向 flex-direction row/column-reverse
- 主轴排列 justify-content flex-start/end/space-around/between center
- 换行 flex-wrap wrap/no-wrap
- 侧轴
- - 多行 align-content flex-start/end/space-around/between center stretch
- - 单行 align-items flex-start/end center base-line stretch(没设置高度/高度 auto 时，沾满容器高度)

### 子

- order
- flex-grow 放大 默认 0
- flex-shrink 缩小 默认 1：自动缩小；0：不缩小
- flex-basic 最小空间 默认 auto 自身大小
- flex 0 1 auto
- align-self 自身对其方式
