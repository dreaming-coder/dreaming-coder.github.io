# HTML - 表格

## 基本表格结构

<iframe height="300" style="width: 100%;" scrolling="no" title="table" src="https://codepen.io/dreaming-coder/embed/LYrypRL?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dreaming-coder/pen/LYrypRL">
  table</a> by 芜情 (<a href="https://codepen.io/dreaming-coder">@dreaming-coder</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

:::tip

这里为了便于识别，加了些样式，暂时不用管。

:::

## 处理列

HTML 中的表格是基于行的。单元格的定义都要放在 `tr` 元素中，而表格则是一行一行地组建出来的。因此对列应用样式有点不方便，对于包含不规则单元格的表格更是如此。这个问题的解决办法是使用 `colgroup` 和 `col` 元素。`colgroup` 代表一组列。 

例如一个 4 × 5 的表格，有 4 行 5 列，我们可以通过 `colgroup` 来对列进行分组。

```html
<colgroup span="2" ></colgroup>  <!--前两列-->
<colgroup span="2" ></colgroup>  <!--三四列-->
<colgroup span="1" ></colgroup>  <!--第五列-->
```

或者有一种等价方式：

```html
<colgroup>
    <col span="2" />
    <col span="2" />
    <col span="1" />
</colgroup>
```

:::warning

不规则单元格计入其起始列。

:::

