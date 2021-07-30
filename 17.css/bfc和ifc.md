# BFC
## description
块级格式化上下文，这个区域和外部毫不相关

## 原理、规则
- 内部box在垂直方向上一个下一个的放置(垂直)
- 垂直房县有margin决定，属于同一个BFC的两个相连的margin会发生重叠
- BFC不会和float重叠
- 计算BFC的高度， 浮动元素也会参与计算
- BFC是一个隔离的容器，容器里面的子元素不会影响到外面的元素，反义也如此

## 如何生成BFC
- html元素
- float不为none
- position 为absolute fixed
- overflow不是 visible
- display为 inline-block 、table-cell 、table-caption、 flex 、inline-flex

# IFC (Inline Formatting Contexts)
## description
inline盒子在包含块里面是从左到右水平排列的
> 上下文不单决定盒子内的规则，也会决定自身的特性

## 规则
- inline boxes 会在水平方向，一个接一个放置
- 这些boxes在垂直方向上的起点从包含盒子的顶部开始
- 在垂直方向上，这些框可能会以不同形式来对齐(vertical-align)

# FFC (Flex Formatting Contexts)
- vertical-aign对Flexbox中的子元素是没有效果的
- float 和 clear 属性对Flexbox 中的子元素是没有效果的， 也不会让子元素脱离文档流（但是对Block是有效果的）
