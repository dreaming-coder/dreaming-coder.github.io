# CSS - 其他常用特性
## 设置表格样式

### 表格默认外观

<iframe height="234.4000244140625" style="width: 100%;" scrolling="no" title="TableDefault" src="https://codepen.io/dreaming-coder/embed/ZEjywwb?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dreaming-coder/pen/ZEjywwb">
  TableDefault</a> by 芜情 (<a href="https://codepen.io/dreaming-coder">@dreaming-coder</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

::: details 参考代码

::: code-group

```html
<table class="default">
    <caption>Results of the 2022 Fruit Survey</caption>
    <colgroup id="colgroup1">
        <col id="col1And2" span="2"/>
        <col id="col3"/>
    </colgroup>
    <colgroup id="co1group2" span="2"></colgroup>
    <thead>
    <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Color</th>
        <th colspan="2">Size &amp; Votes</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th>Favorite:</th>
        <td>Apples</td>
        <td>Green</td>
        <td>Medium</td>
        <td>500</td>
    </tr>
    <tr>
        <th>2nd Favorite:</th>
        <td>Oranges</td>
        <td>Orange</td>
        <td>Large</td>
        <td>450</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <th colspan="5">&copy; 2022 Adam Freeman Fruit Data Enterprises</th>
    </tr>
    </tfoot>
</table>
```
```css
.default,
.default tr,
.default th,
.default td{
    border: 1px solid;
}
```
:::

### 合并表格边框

`border-collapse` 用来控制 `table` 元素相邻单元格边框的样式。

<iframe height="219.20001220703125" style="width: 100%;" scrolling="no" title="table-border" src="https://codepen.io/dreaming-coder/embed/OJwgqXG?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dreaming-coder/pen/OJwgqXG">
  table-border</a> by 芜情 (<a href="https://codepen.io/dreaming-coder">@dreaming-coder</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

::: details 参考代码

::: code-group

```html
<table class="default">
    <caption>Results of the 2022 Fruit Survey</caption>
    <colgroup id="colgroup1">
        <col id="col1And2" span="2"/>
        <col id="col3"/>
    </colgroup>
    <colgroup id="co1group2" span="2"></colgroup>
    <thead>
    <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Color</th>
        <th colspan="2">Size &amp; Votes</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th>Favorite:</th>
        <td>Apples</td>
        <td>Green</td>
        <td>Medium</td>
        <td>500</td>
    </tr>
    <tr>
        <th>2nd Favorite:</th>
        <td>Oranges</td>
        <td>Orange</td>
        <td>Large</td>
        <td>450</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <th colspan="5">&copy; 2022 Adam Freeman Fruit Data Enterprises</th>
    </tr>
    </tfoot>
</table>
```
```css
.default {
    border-collapse: collapse;
}
.default
.default tr,
.default th,
.default td{
    border: 1px solid;
}
```
:::

### 配置独立边框

如果一定要为 `border-collapse` 属性使用默认值 `separate`，再加几个其他属性同样可以改善表格的外观，`border-spacing` 属性可以定义相邻元素边框的间距。

<iframe height="273.6000671386719" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/dreaming-coder/embed/rNrwRMy?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dreaming-coder/pen/rNrwRMy">
  Untitled</a> by 芜情 (<a href="https://codepen.io/dreaming-coder">@dreaming-coder</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

::: details 参考代码

::: code-group

```html
<table class="default">
    <caption>Results of the 2022 Fruit Survey</caption>
    <colgroup id="colgroup1">
        <col id="col1And2" span="2"/>
        <col id="col3"/>
    </colgroup>
    <colgroup id="co1group2" span="2"></colgroup>
    <thead>
    <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Color</th>
        <th colspan="2">Size &amp; Votes</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th>Favorite:</th>
        <td>Apples</td>
        <td>Green</td>
        <td>Medium</td>
        <td>500</td>
    </tr>
    <tr>
        <th>2nd Favorite:</th>
        <td>Oranges</td>
        <td>Orange</td>
        <td>Large</td>
        <td>450</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <th colspan="5">&copy; 2022 Adam Freeman Fruit Data Enterprises</th>
    </tr>
    </tfoot>
</table>
```
```css
.default {
    border-collapse: separate;
    border-spacing: 10px;
}
.default,
.default tr,
.default th,
.default td{
    border: 1px solid;
}
```
:::

### 设置标题的位置

表格标题会显示在表格的顶部，我们可以使用 `caption-side` 属性改变这种默认行为。这个属性有两个值：`top `(默认值)和 `bottom`。

<iframe height="225.60000610351562" style="width: 100%;" scrolling="no" title="table-title" src="https://codepen.io/dreaming-coder/embed/VwBWRKB?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dreaming-coder/pen/VwBWRKB">
  table-title</a> by 芜情 (<a href="https://codepen.io/dreaming-coder">@dreaming-coder</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

::: details 参考代码

::: code-group

```html
<table class="default">
    <caption>Results of the 2022 Fruit Survey</caption>
    <colgroup id="colgroup1">
        <col id="col1And2" span="2"/>
        <col id="col3"/>
    </colgroup>
    <colgroup id="co1group2" span="2"></colgroup>
    <thead>
    <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Color</th>
        <th colspan="2">Size &amp; Votes</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th>Favorite:</th>
        <td>Apples</td>
        <td>Green</td>
        <td>Medium</td>
        <td>500</td>
    </tr>
    <tr>
        <th>2nd Favorite:</th>
        <td>Oranges</td>
        <td>Orange</td>
        <td>Large</td>
        <td>450</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <th colspan="5">&copy; 2022 Adam Freeman Fruit Data Enterprises</th>
    </tr>
    </tfoot>
</table>
```
```css
.default {
    border-collapse: collapse;
    caption-side: bottom;
}
.default
.default tr,
.default th,
.default td{
    border: 1px solid;
}
```
:::

### 指定表格布局

默认情况下，浏览器会根据表格每一列中最宽的单元格设置整列单元格的宽度。这意味着你不需要担心还要亲自解决单元格大小的问题，不过，这同时意味着在能够确定页面布局之前，浏览器必须获取所有的表格内容。

浏览器显示表格采用的方法是由 `table-layout` 属性决定的，它的默认值是 `auto`。使用另一个值 `fixed` 可以禁用自动布局。在 `fixed` 模式中，表格的大小是由表格自身和单独每列的 `width` 值设定的。如果没有列宽值可用，浏览器会设置等距离的列宽。

<iframe height="223.199951171875" style="width: 100%;" scrolling="no" title="table-layout" src="https://codepen.io/dreaming-coder/embed/jOpwJVb?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dreaming-coder/pen/jOpwJVb">
  table-layout</a> by 芜情 (<a href="https://codepen.io/dreaming-coder">@dreaming-coder</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

::: details 参考代码

::: code-group

```html
<table class="default">
    <caption>Results of the 2022 Fruit Survey</caption>
    <colgroup id="colgroup1">
        <col id="col1And2" span="2"/>
        <col id="col3"/>
    </colgroup>
    <colgroup id="co1group2" span="2"></colgroup>
    <thead>
    <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Color</th>
        <th colspan="2">Size &amp; Votes</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th>Favorite:</th>
        <td>Apples</td>
        <td>Green</td>
        <td>Medium</td>
        <td>500</td>
    </tr>
    <tr>
        <th>2nd Favorite:</th>
        <td>Oranges</td>
        <td>Orange</td>
        <td>Large</td>
        <td>450</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <th colspan="5">&copy; 2022 Adam Freeman Fruit Data Enterprises</th>
    </tr>
    </tfoot>
</table>
```
```css
.default {
    border-collapse: collapse;
    table-layout: fixed;
    width: 50%;
}
.default
.default tr,
.default th,
.default td{
    border: 1px solid;
}
```
:::

## 设置列表样式

### 设置列表标记类型

`list-style-type` 属性用来设置标记(有时候也称为项目符号)的样式，这个属性允许的值部分如下所示。

- `none`
- `box`、`check`、`circle`、`diamond`、`disc`、`dash`、`square`
- `decimal`、`binary`
- `lower-alpha`、`upper-alpha`

<div class="demo">
    <ul>
        <li style="list-style-type:disc">disc，默认值</li>
        <li style="list-style-type:circle">circle</li>
        <li style="list-style-type:square">square</li>
        <li style="list-style-type:decimal">decimal</li>
        <li style="list-style-type:decimal-leading-zero">decimal-leading-zero</li>
        <li style="list-style-type:lower-roman">lower-roman</li>
        <li style="list-style-type:upper-roman">upper-roman</li>
        <li style="list-style-type:lower-alpha">lower-alpha</li>
        <li style="list-style-type:upper-alpha">upper-alpha</li>
        <li style="list-style-type:lower-greek">lower-greek，希腊字母</li>
    </ul>
</div>

::: details 参考代码

::: code-group

```html
<ul>
    <li style="list-style-type:disc">disc，默认值</li>
    <li style="list-style-type:circle">circle</li>
    <li style="list-style-type:square">square</li>
    <li style="list-style-type:decimal">decimal</li>
    <li style="list-style-type:decimal-leading-zero">decimal-leading-zero</li>
    <li style="list-style-type:lower-roman">lower-roman</li>
    <li style="list-style-type:upper-roman">upper-roman</li>
    <li style="list-style-type:lower-alpha">lower-alpha</li>
    <li style="list-style-type:upper-alpha">upper-alpha</li>
    <li style="list-style-type:lower-greek">lower-greek，希腊字母</li>
</ul>
```
:::

### 使用图像作为列标记

`list-style-image` 属性可以将图像用做列表标记。

<div class="demo ice-container">
    <div style="float: left; margin-left: 20px">
        <ul style='list-style-image: url("https://www.baidu.com/favicon.ico");'>
            <li>亚索</li>
            <li>瑞雯</li>
            <li>劫</li>
            <li>菲奥娜</li>
        </ul>
    </div>
</div>

::: details 参考代码

::: code-group

```html
<div style="float: left; margin-left: 20px">
    <ul style='list-style-image: url("https://www.baidu.com/favicon.ico");'>
        <li>亚索</li>
        <li>瑞雯</li>
        <li>劫</li>
        <li>菲奥娜</li>
    </ul>
</div>
```
:::

### 设置列表标记的位置

可以使用 `list-style-position` 属性指定标记相对于 `li` 元素内容框的位置。这个属性有两个值：` inside` 和 `outside`，前者定义标记位于内容框内部，后者定义标记位于内容框外部。

<div class="demo">
    I like play
    <ul style="list-style-position: outside">
        <li>亚索</li>
        <li>瑞雯</li>
        <li>劫</li>
        <li>菲奥娜</li>
    </ul>
    I like play
    <ul style="list-style-position: inside">
        <li>亚索</li>
        <li>瑞雯</li>
        <li>劫</li>
        <li>菲奥娜</li>
    </ul>
</div>

::: details 参考代码

::: code-group

```html
I like play
<ul style="list-style-position: outside">
    <li>亚索</li>
    <li>瑞雯</li>
    <li>劫</li>
    <li>菲奥娜</li>
</ul>
I like play
<ul style="list-style-position: inside">
    <li>亚索</li>
    <li>瑞雯</li>
    <li>劫</li>
    <li>菲奥娜</li>
</ul>
```
:::

## 设置光标样式

常用样式如下：

```css
div {
    cursor: default;     /* 小白，默认 */
    cursor: pointer;     /* 小手 */
    cursor: move;        /* 移动 */
    cursor: wait;        /* 转圈等待 */
    cursor: text;        /* 文本 */
    cursor: crosshair;   /* 十字光标 */
    cursor: not-allowed  /* 禁止 */
}
```

## 防止拖拽文本域

实际开发中，我们文本域右下角是不可以拖拽的

```css
textarea {
    resize: none;
    outline: none;
}
```

<div class="demo">
    <textarea cols="30" rows="2">可以拖拽</textarea> &nbsp;&nbsp;&nbsp;&nbsp;
	<textarea cols="30" rows="2" style="resize:none; outline:none">不可拖拽</textarea>
</div>

