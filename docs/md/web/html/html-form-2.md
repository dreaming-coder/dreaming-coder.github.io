# HTML - 定制 input 元素

## 输入文字

<div class="demo">
    <input type="text"/>
</div>

```html
<input type="text"/>
```
`type` 属性设置为 `text` 的 `input` 元素在浏览器中显示为一个单行文本框，这是未设置 `type` 属性情况下的默认形式。

### 设定元素大小

有两个属性能够对文本框的大小产生影响。`maxlength` 属性设定 了用户能够输人的字符的最大数目，`size` 属性则设定了文本框能够显示的字符数目，二者的字符数目均以正整数表示。

<div class="demo">
    <input type="text" size="25" maxlength="30"/>
</div>

```html
<input type="text" size="25" maxlength="30"/>
```
> `size `属性一般不起作用，建议用 CSS 控制可见字符。

### 设置初始值与占位符提示

<div class="demo">
    <form>
        <p><label for="name">姓名：<input id="name" type="text"  placeholder="请输入姓名" /></label></p>
        <p><label for="age">年龄：<input id="age" type="text" value="18" placeholder="请输入年龄" /></label></p>
    </form>
</div>

```html
<form>
    <p>
        <label for="name">
            姓名：<input id="name" type="text"  placeholder="请输入姓名" />
        </label>
    </p>
    <p>
        <label for="age">
            年龄：<input id="age" type="text" value="18" placeholder="请输入年龄" />
        </label>
    </p>
</form>
```
:::tip

这里，提示“请输入姓名”是用 `placeholder` 设置的占位符，下面年龄显示的 `18` 是 `value` 设置的默认值。

:::

### 使用数据列表

可以将 `input` 元素的 `list` 属性设置为一个 `datalist` 元素的 `id` 属性值，这样用户在文本框中输人数据时只消从后一元素提供的一批选项中进行选择就行了。

`datalist` 元素是 HTML 5 中新增的，它可以用来提供一批值，以便帮助用户输入需要的数据。不同类型的 `input` 元素使用 `datalist` 元素的方式略有差异。对于 `text` 型 `input` 元素，`datalist` 元素提供的值以自动补全建议值的方式呈现。提供给用户选择的值各用一个 `option` 元素指定。

<div class="demo">
    <form>
        <p><label for="fruit">Fruit：<input id="fruit" type="text" placeholder="请选择水果种类"  list="fruit-list" /></label></p>
    </form>
    <datalist id="fruit-list">
        <option value="Apple"></option>
        <option value="Banana"></option>
        <option value="Orange"></option>
    </datalist>
</div>

```html
<form>
    <p>
        <label for="fruit">
            Fruit：
            <input id="fruit" type="text" 
                   placeholder="请选择水果种类"  
                   list="fruit-list" />
        </label>
    </p>
</form>
<datalist id="fruit-list">
    <option value="Apple"></option>
    <option value="Banana"></option>
    <option value="Orange"></option>
</datalist>
```
### 生成只读或被禁用的文本框

`readonly` 和 `disabled` 属性都可以用来生成用户不能编辑的文本框。

<div class="demo">
    <form>
        <p><label for="read">Read Only：<input id="read" type="text" readonly /></label></p>
        <p><label for="disable">Disabled：<input id="disable" type="text" disabled /></label></p>
    </form>
</div>

```html
<form>
    <p>
        <label for="read">
            Read Only：<input id="read" type="text" readonly />
        </label>
    </p>
    <p>
        <label for="disable">
            Disabled：<input id="disable" type="text" disabled />
        </label>
    </p>
</form>
```
> 设置了 `disabled` 属性的 `input `元素的数据不会随着表单一起提交。

## 输入密码

`type` 属性值设置为 `password` 的 `input` 元素用于输入密码。用户输入的字符在这种文本框中显示为星号(`*`)之类的掩饰字符。

<div class="demo">
    <label for="pwd">密码：<input id="pwd" type="password" placeholder="请输入密码" /></label>
</div>

```html
<label for="pwd">
    密码：<input id="pwd" type="password" placeholder="请输入密码" />
</label>
```
## 用 input 元素生成按钮

将 `input` 元素的 `type` 属性设置为 `submit`、`reset` 或 `button` 会生成类似 `button` 元素那样的按钮。`submit` 型 `input` 元素可用的额外属性与 `button` 元素的同名属性用法相同，生成的按钮上的说明文字均来自它们的 `value` 属性值。

<div class="demo">
    <form>
    <input type="submit" value="提交" />&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="reset" value="重置" />&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="button" value="按钮" />
</form>
</div>

```html
<form>
    <input type="submit" value="提交" />
    <input type="reset" value="重置" />
    <input type="button" value="按钮" />
</form>
```


## 用 input 元素为输入数据把关

### 获取数值

`type` 属性设置为 `number` 的 `input` 元素生成的输人框只接受数值。有些浏览器(如 Chrome)还会在旁边显示用来上调和下调数值的箭头形小按钮。

![](/imgs/web/html/form/002.png)


> `min`、`max`、`step` 和 `value` 属性值可以是整数或小数，如 `3` 和 `3. 14` 都是有效值。

<div class="demo">
    <form>
    <p><label for="num">年龄：<input id="num" type="number" min="10" max="26" step="2" value="18"></label></p>
</form>
</div>

```html
<form>
    <p>
        <label for="num">
            年龄：
            <input id="num" type="number" 
                   min="10" max="26" step="2" 
                   value="18">
        </label>
    </p>
</form>
```
### 获取指定范围内的数值

获取数值的另一种办法是使用 `range` 型 `input` 元素。用户只能用它从事先规定的范围内选择一个数值。`range` 型 `input` 元素支持的属性与 `number` 型相同，但二者在浏览器中的显示结果不同。

<script setup>
    import { ref } from 'vue'
    const count = ref(25)
</script>

<div class="demo">
    <form>
  		<p>
            <label for="range">
                范围：<input id="range" type="range" v-model="count" min="10" max="50" step="2">
            </label>
        </p>
        <p>
            <label for="result">
                数值：<input id="result" disabled size="13" :value="count">
            </label>
        </p>
    </form>
</div>

```html
<form>
    <p>
        <label for="range">
            范围：
            <input id="range" type="range" 
                   v-model="count" 
                   min="10" max="50" step="2" />
        </label>
    </p>
    <p>
        <label for="result">
            数值：
            <input id="result" disabled size="13" 
                   :value="count" />
        </label>
    </p>
</form>
```
### 获取复选框输入

`checkbox` 型 `input` 元素会生成供用户选择是或否的复选框。

![](/imgs/web/html/form/003.png)

<div class="demo">
    <form>
    喜欢的音乐：<br><br>
    <label for="m1"><input type="checkbox" checked name="music" id="m1" value="a"/> 七里香</label>
    <label for="m2"><input type="checkbox" name="music" id="m2" value="b"/> 龙拳</label>
    <label for="m3"><input type="checkbox" name="music" id="m3" value="c"/> 青花瓷</label>
    <br><br>
  <button type="submit">提交</button>
</form>
</div>

```html
<form>
    喜欢的音乐：<br><br>
    <label for="m1">
        <input type="checkbox" checked name="music" id="m1" value="a"/> 
        七里香
    </label>
    <label for="m2">
        <input type="checkbox" name="music" id="m2" value="b"/> 
        龙拳
    </label>
    <label for="m3">
        <input type="checkbox" name="music" id="m3" value="c"/> 
        青花瓷
    </label>
    <br><br>
  <button type="submit">提交</button>
</form>
```
:::warning

提交后的数据变量名是 `name` 值，变量值是所选复选框 `value` 值的集合。

:::

### 获取单选框输入

单选框和复选框有相同的额外属性，不同的是，这里同名的 `ratio` 是互斥的。

<div class="demo">
    <form>
    喜欢的饮料：
    <label for="mm1">
        <input type="radio" checked name="drink" id="mm1" value="a"/>
        百事可乐
    </label>
    <label for="mm2">
        <input type="radio" name="drink" id="mm2" value="b"/>
        可口可乐
    </label>
    <button type="submit">提交</button>
</form>
</div>

```html
<form>
    喜欢的饮料：
    <label for="mm1">
        <input type="radio" checked name="drink" id="mm1" value="a"/>
        百事可乐
    </label>
    <label for="mm2">
        <input type="radio" name="drink" id="mm2" value="b"/>
        可口可乐
    </label>
    <button type="submit">提交</button>
</form>
```


### 获取有规定格式的字符串

`type` 属性设置为 `email`、`tel` 和 `url` 的 `input` 元素能接受的输人数据分别为有效的电子邮箱地址、电话号码和 URL。

这些类型的 `input` 元素额外属性大体类似，特别地，有一个 `pattern` 属性，可以指定一个用于输人验证的正则表达式。`email` 型 `input` 元素还支持一个名为 `multiple` 的属性。设置了该属性的 `input` 元素可以接受多个电子邮箱地址。

<div class="demo">
    <form>
    <p>
        <label for="name">
            Name: <input value="Adam" id="name" name="name"/>
        </label>
    </p>
    <p>
        <label for=" password">
            Password: <input type="password" placeholder="Min 6 characters"
                             id=" password" name="password"/>
        </label>
    </p>
    <p>
        <label for="email">
            Email: <input type="email" placeholder="user@domain. com"
                          id="email" name="email"/>
        </label>
    </p>
    <p>
        <label for="tel">
            Tel: <input type="tel" placeholder=" (XXX) -XXX-XXXX"
                        id="tel" name="tel"/>
        </label>
    </p>
    <p>
        <label for="url">
            Your homepage: <input type="url" id="url" name="url"/>
        </label>
    </p>
    <input type="submit" value=" Submit Vote"/>
</form>
</div>

```html
<form>
    <p>
        <label for="name">
            Name: <input value="Adam" id="name" name="name"/>
        </label>
    </p>
    <p>
        <label for=" password">
            Password: <input type="password" placeholder="Min 6 characters"
                             id=" password" name="password"/>
        </label>
    </p>
    <p>
        <label for="email">
            Email: <input type="email" placeholder="user@domain. com"
                          id="email" name="email"/>
        </label>
    </p>
    <p>
        <label for="tel">
            Tel: <input type="tel" placeholder=" (XXX) -XXX-XXXX"
                        id="tel" name="tel"/>
        </label>
    </p>
    <p>
        <label for="url">
            Your homepage: <input type="url" id="url" name="url"/>
        </label>
    </p>
    <input type="submit" value=" Submit Vote"/>
</form>
```


> `pattern` 属性可以自定义正则校验规则。

### 获取时间和日期

HTML 5 中增加了一些 `input` 元素的新类型，供用户输入日期和时间。

![](/imgs/web/html/form/004.png)


> 其实这些类型都是输入控件，根据你选的时间日期来返回规定格式的值。

<div class="demo">
    <form>
    <label>选择日期：<input type="date"></label>
</form>
</div>

```html
<form>
    <label>选择日期：<input type="date"></label>
</form>
```
### 获取颜色值

<div class="demo">
    <form>
    <p><label>选择颜色：<input type="color" value="#FF1234"></label></p>
    <p><label>选择颜色列表：<input type="color" value="#FF1234" list="color"></label></p>
</form>
<datalist id="color">
    <option>#f22345</option>
    <option>#12ff32</option>
    <option>#aa5312</option>
</datalist>
</div>

```html
<form>
    <p>
        <label>
            选择颜色：<input type="color" value="#FF1234">
        </label>
    </p>
    <p>
        <label>
            选择颜色列表：<input type="color" value="#FF1234" list="color">
        </label>
    </p>
</form>
<datalist id="color">
    <option>#f22345</option>
    <option>#12ff32</option>
    <option>#aa5312</option>
</datalist>
```
## 用 input 元素获取搜索用词

`search` 型 `input` 元素会生成一个单行文本框，供用户输入搜索用词。这只是一个样式，具体功能自己实现。

<div class="demo">
    <form>
    <p><label>搜索：<input type="search" placeholder="请输入搜索内容"></label></p>
</form>
</div>

```html
<form>
    <p><label>搜索：<input type="search" placeholder="请输入搜索内容"></label></p>
</form>
```
## 用 input 元素生成隐藏的数据项

说白了，就是一个隐藏域，想传递数据但又不想显示出来。

```html
<input type="hidden" name="key" value="value" />
```

传递到后台，键值对对应一目了然。

## 用 input 元素生成图像按钮和分区响应图

`image` 型 `input` 元素生成的按钮显示为一幅图像，点击它可以提交表单。它的额外属性和 `button` 元素类似，不同的是有以下属性可以设置：

- `alt`

  提供元素的说明文字

- `height`

  以像素为单位设置图像的高度(不设置这个属性的话图像将以其本身的高度显示)

- `width`

  以像素为单位设置图像的宽度(不设置这个属性的话图像将以其本身的宽度显示)

- `src`

  指定要显示的图像的 URL

## 用 input 元素上传文件

最后一种 `input` 元素类型是 `file` 型，它可以在提交表单时将文件上传到服务器。`file` 型 `input` 元素可用的额外属性如下：

- `accept`

  指定接受的 MIME 类型

- `multiple`

  设置这个属性的 `input` 元素可一次上传多个文件

- `required`

  表明用户必须为其提供一个值，否则无法通过输入验证

:::warning

表单编码类型为 `multipart/form-data` 的时候才能上传文件。

:::

