# 尺寸

## px

> 对长度单位。像素 px 是相对于**显示器屏幕分辨率**而言的。

## em

> 相对长度单位。基准点为父节点字体的大小，即相对于当前对象内文本的字体尺寸（继承父节点字体大小）。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸( 16px )。

## rem

> 相对长度单位。r 是 root 的缩写，相对于根元素 html 的字体大小
>
> ```js
> function getRem(pwidth,prem){
>   var html = document.getElementsByTagName("html")[0];
>   var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
>   html.style.fontSize = oWidth/pwidth\*prem + "px";
> }
> ```

## vh and vw

> 相对于视口的高度和宽度，而不是父元素的（CSS 百分比是相对于包含它的最近的父元素的高度和宽度）。
> 获取视口宽度的 1% const vw = window.innerWidth / 100;
> 获取视口高度的 1% const vh = window.innerHeight / 100

## rpx

> 小程序中的视觉单位，1rpx 等于屏幕宽度的 1/750

## pt

> 设备像素（物理像素），等于 1/72 英寸

## dpr

> dpr = 设备像素 / 设备独立像素
