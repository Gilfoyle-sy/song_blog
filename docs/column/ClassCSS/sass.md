# SASS

```sass
  /* 这段注释不会被编辑 */
  /*! 这段注释会被编辑 */

  @import './index.css' // 全量导入
  .theme { @import "test" } // 单个导入

  /**
    @mixin 指令允许我们定义一个可以在整个样式表中重复使用的样式。
    @include 指令可以将混入（mixin）引入到文档中。
   */

  /**
    @extend 继承
   */

  /** 声明变量 */
  $colorValue: #16C26C, #FF951A, #FF4930, #38CFFF, #0182FF, #3B23E4, #5C728E;
  $colorNames: 'green', 'orange', 'red', 'blueLight', 'blue', 'purple', 'gray';

  .status {
    flex-shrink: 0;
    padding: 6rpx 20rpx;
    font-size: $font-size-m;
    border-radius: $radius-m;

    &.name { // 父级选择器 &
      color: red;
    }

    @for $i from 1 through length($colorValue) {
      &.#{nth($colorNames, $i)} {
        $color: nth($colorValue, $i);
        color: $color;
        background: opacify(rgba($color, 0.1), 0.1)
      }
    }
  }
```
