# flex

## 属性

### 父

```scss
flex-direction: row; // row-reverse | column | column-reverse

flex-wrap: nowrap; // wrap wrap-reverse

justify-content: flex-start; // flex-end | center | space-around | space-between

// 侧轴-单行
// stretch（默认值） 如果项目未设置高度或设为auto，将占满整个容器的高度。
align-items: stretch; // flex-start flex-end | center | base-line

// 侧轴-多行
// stretch（默认值）：轴线占满整个交叉轴
align-content: stretch; // flex-start |  flex-end | center | space-around | space-between | stretch
```

### 子

```scss
// 从小到大排列 , 可设置负值.
order: 1; // Number

// flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
// 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
// 如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
flex-grow: 0;

// flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
// 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。
// 如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
flex-shrink: flex-start; // flex-end | center | space-around | space-between

// flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。
// 浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
flex-basis: auto; // <length>

// align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。
// 默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
align-self: auto; // 侧轴（多行） | flex-start | flex-end | center | baseline | stretch;

// flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
// 快捷值：auto (1 1 auto) | none (0 0 auto) | 1 (1 1 0) 。
// 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。;
flex: none | [ < 'flex-grow' > < 'flex-shrink' >? || < 'flex-basis' >];
```

## 常见问题及解决方案

1. 子元素溢出

   > 在 Flex 布局中，如果元素的大小超过了父容器的大小，那么该元素会自动溢出。要处理溢出的情况，使用 overflow 属性来指定溢出时的处理方式。

2. 改变子元素间隔

   > 要改变 Flex 元素之间的间隔，使用 gap 属性。该属性指定了元素之间的间距。例如，要增加元素之间的间距，为父元素设置 gap

3. 子元素大小

   > 使用 max-width 和 min-width 属性限制元素的最大和最小宽度,使用 max-height 和 min-height 属性限制元素的最大和最小高度

4. 多行排列，每行平分，但是最后一行希望靠左排列平分
   > 最后一行添加空元素，并加以判断渲染个数；或者使用百分比，但不完美
