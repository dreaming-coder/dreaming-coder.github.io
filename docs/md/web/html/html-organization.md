# HTML - 内容组织

##  建立段落

<div class="demo">
    <p>
        这是一段话。
        可以换行。
    </p>
</div>

```html
<p>
    这是一段话。
    可以换行。
</p>
```

## 使用 div 元素

`div` 元素没有具体的含义。找不到其他恰当的元素可用时可以使用这个元素为内容建立结构并赋予其含义。它的含义是由全局属性提供的，通常用的是 `class` 或 `id` 属性。

<div class="demo">
    <div>
    	通用结构，可以通过class属性等定制样式
    </div>
</div>

```html
<div>
    通用结构，可以通过class属性等定制样式
</div>
```
:::warning

不在万不得已的情况下最好不要使用 `div` 元素，你应该优先考虑那些具有语义重要性的元素。使用 `div` 元素之前，应该先想想 HTML 5 中新增的那些元素，如 `article` 和 `section `。`div` 本身没有任何问题，不过任何情况下，我们在编写 HTML 5 文档时都要牢记语义问题。

:::

## 引用他处内容

`blockquote` 元素表示引自他处的一片内容。 该元素的用途与 `q` 元素类似，但是通常用在要引用的内容更多的情况下。

<div class="demo">
    <blockquote cite="https://www.baidu.com">
        大段引用，默认会整体缩进，但是不像 q 元素会自动添加双引号
    </blockquote>
</div>

```html
<blockquote cite="https://www.baidu.com">
    大段引用，默认会整体缩进，但是不像 q 元素会自动添加双引号
</blockquote>
```
## 添加主题分隔

```html
<hr/>
```

## 将内容组织为列表

- **`ol` 元素**

`ol` 表示有序列表，列表项目可以通过 `ol` 元素定义的属性加以控制。`start` 属性设定的是列表首项的编号值。如果不用这个属性，那么首项的编号为 1。`type`  属性用来设定显示在各列表项旁的编号的类型。

![](/imgs/web/html/organization/001.png)


:::tip

如果使用了 `reversed` 属性，那么列表编号采用降序。

:::

- **`ul `元素**

`ul` 元素表示无序列表，其样式由 CSS 控制。

- **`li` 元素**

`li` 元素表示列表中的列表项。

## 生成说明列表

说明列表包含着一系列术语/说明组合(也即一系列附带定义的术语)。定义说明列表要用到三个元素：

<div class="demo">
    <dl>
        <dt>术语一</dt>
            <dd>定义一</dd>
        <dt>术语二</dt>
            <dd>定义二</dd>
    </dl>
</div>

```html
<dl>
    <dt>术语一</dt>
        <dd>定义一</dd>
    <dt>术语二</dt>
        <dd>定义二</dd>
</dl>
```
## 生成自定义列表

HTML 对列表的支持不像看上去那么简单，实际上要灵活得多。结合 CSS 中的 `counter` 特性和 `: before` 选择器,可以用 `ul` 元素生成复杂的列表。

## 使用插图

插入是一个独立的内容单元，可带标题。通常作为一个整体被文档的主体引用，把它从文档主体中删除也不会影响文档的意思。插图用 `figure` 元素定义，`figure` 元素可以包含一个 `figcaption` 元素，后者表示插图的标题。

```html
<figure>
    <figcaption>插图标题</figcaption>
    <!-- 插图内容 -->
</figure>
```

